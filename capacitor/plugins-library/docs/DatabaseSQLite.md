# Capacitor SQLite Plugin
Capacitor SQlite  Plugin is a custom Native Capacitor plugin to create SQLite databases, tables, indexes and store permanently data to it. 
It is then available only for IOS and Android platforms.
Databases can be or not encrypted using SQLCipher module. 


## Methods available

### `open({database:"fooDB"}) => Promise<{result:boolean}>`

Open a database, 
the plugin add a suffix "SQLite" and an extension ".db" to the name given ie (fooDBSQLite.db)

#### Returns

Type: `Promise<{result:boolean}>`

### `close({database:"fooDB"}) => Promise<{result:boolean}>`

Close a database

#### Returns

Type: `Promise<{result:boolean}>`


### `execute({statements:"fooStatements"}) => Promise<{changes:number}>`

Execute a batch of raw SQL statements

#### Returns

Type: `Promise<{changes:number}>`

### `run({statement:"fooStatement"}) => Promise<{changes:number}>`

Run a SQL statement

#### Returns

Type: `Promise<{changes:number}>`


### `run({statement:"fooStatement VALUES (?,?,?)",values:[1,"foo1","foo2"]}) => Promise<{changes:number}>`

Run a SQL statement with given values

#### Returns

Type: `Promise<{changes:number}>`

### `query({statement:"fooStatement"}) => Promise<{changes:number}>`

Query a SELECT SQL statement

#### Returns

Type: `Promise<{changes:number}>`


### `query({statement:"fooStatement VALUES (?)",values:["foo1"]}) => Promise<{changes:number}>`

Query a SELECT SQL statement with given values

#### Returns

Type: `Promise<{changes:number}>`

### `deleteDatabase({database:"fooDB"}) => Promise<{result:boolean}>`

Delete a database

#### Returns

Type: `Promise<{result:boolean}>`

## Methods available for encrypted database in IOS and Android

### `openStore({database:"fooDB",encrypted:true,mode:"encryption"}) => Promise<{result:boolean}>`

Encrypt an existing store with a secret key and open the store with given database name.

To define your own "secret" and "newsecret" keys: 
 - in IOS, go to the Pod/Development Pods/jeepqCapacitor/DatabaseSQLite/GlobalSQLite.swift file 
 - in Android, go to jeepq-capacitor/java/com.jeep.plugins.capacitor/cdssUtils/GlobalSQLite.java
and update the default values before building your app.

#### Returns

Type: `Promise<{result:boolean}>`

### `openStore({database:"fooDB",encrypted:true,mode:"secret"}) => Promise<{result:boolean}>`

Open an encrypted store with given database and table names and secret key.

#### Returns

Type: `Promise<{result:boolean}>`

### `openStore({database:"fooDB",encrypted:true,mode:"newsecret"}) => Promise<{result:boolean}>`

Modify the secret key with the newsecret key of an encrypted store and open it with given database and table names and newsecret key.

#### Returns

Type: `Promise<{result:boolean}>`


## Using the Plugin in your App

 - [see capacitor documentation](https://capacitor.ionicframework.com/docs/getting-started/with-ionic)

 - Plugin installation

  ```bash
  npm install --save @jeepq/capacitor@latest
  ```
 - In your code
 ```ts
  import { Plugins } from '@capacitor/core';
  import * as PluginsLibrary from '@jeepq/capacitor';
  const { CapacitorSqlite,Device } = Plugins;

  @Component( ... )
  export class MyPage {
    _sqlite: any;

    ...

    async ngAfterViewInit()() {
      const info = await Device.getInfo();
      if (info.platform === "ios" || info.platform === "android") {
        this._sqlite = CapacitorSqlite;
      } else {
        this._sqlite = PluginsLibrary.CapacitorSqlite
      }

    }

    async testSQLitePlugin() {
        let result:any = await this._sqlite.open({database:"testsqlite"});
        retOpenDB = result.result;
        if(retOpenDB) {
            // Create Tables if not exist
            let sqlcmd: string = `
            BEGIN TRANSACTION;
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY NOT NULL,
                email TEXT UNIQUE NOT NULL,
                name TEXT,
                age INTEGER
            );
            PRAGMA user_version = 1;
            COMMIT TRANSACTION;
            `;
            var retExe: any = await this._sqlite.execute({statements:sqlcmd});
            console.log('retExe ',retExe.changes);
            // Insert some Users
            sqlcmd = `
            BEGIN TRANSACTION;
            DELETE FROM users;
            INSERT INTO users (name,email,age) VALUES ("Whiteley","Whiteley.com",30);
            INSERT INTO users (name,email,age) VALUES ("Jones","Jones.com",44);
            COMMIT TRANSACTION;
            `;
            retExe = await this._sqlite.execute({statements:sqlcmd});
            console.log('retExe ',retExe.changes);
            // Select all Users
            sqlcmd = "SELECT * FROM users";
            const retSelect: any = await this._sqlite.query({statement:sqlcmd,values:[]});
            console.log('retSelect.values.length ',retSelect.values.length);
            const row1: any = retSelect.values[0];
            console.log("row1 users ",JSON.stringify(row1))
            const row2: any = retSelect.values[1];
            console.log("row2 users ",JSON.stringify(row2))

            // Insert a new User with SQL and Values

            sqlcmd = "INSERT INTO users (name,email,age) VALUES (?,?,?)";
            let values: Array<any>  = ["Simpson","Simpson@example.com",69];
            var retRun: any = await this._sqlite.run({statement:sqlcmd,values:values});
            console.log('retRun ',retRun.changes);

            // Select Users with age > 35
            sqlcmd = "SELECT name,email,age FROM users WHERE age > ?";
            retSelect = await this._sqlite.query({statement:sqlcmd,values:["35"]});
            console.log('retSelect ',retSelect.values.length);
            
        ...
        }
    }
    ...
  }
 ```

### Running on Android

 ```bash
 npx cap update
 npm run build
 npx cap copy
 npx cap open android
 ``` 
 Android Studio will be opened with your project and will sync the files.
 In Android Studio go to the file MainActivity

 ```java 
  ...
 import com.jeep.plugins.capacitor.CapacitorSqlite;

  ...

  public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);

      // Initializes the Bridge
      this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
        // Additional plugins you've installed go here
        // Ex: add(TotallyAwesomePlugin.class);
        add(CapacitorSqlite.class);
      }});
    }
  }
 ``` 
### Running on IOS

 Modify the Podfile under the ios folder as follows

 ```
 platform :ios, '11.0'
 use_frameworks!

 # workaround to avoid Xcode 10 caching of Pods that requires
 # Product -> Clean Build Folder after new Cordova plugins installed
 # Requires CocoaPods 1.6 or newer
 install! 'cocoapods', :disable_input_output_paths => true

 def capacitor_pods
  # Automatic Capacitor Pod dependencies, do not delete
  pod 'Capacitor', :path => '../../node_modules/@capacitor/ios'
  pod 'CapacitorCordova', :path => '../../node_modules/@capacitor/ios'
  pod 'JeepqCapacitor', :path => '../../node_modules/@jeepq/capacitor'
  # Do not delete
 end

 target 'App' do
  capacitor_pods
  # Add your Pods here
 end
 ```

 ```bash
 npx cap update
 npm run build
 npx cap copy
 npx cap open ios
 ```

## Dependencies
The IOS  and Android codes are using SQLCipher allowing for database encryption

