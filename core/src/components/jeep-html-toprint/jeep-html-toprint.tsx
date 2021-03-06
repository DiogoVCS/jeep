import { Component, Host, h, Element, Prop, State, Watch, 
        Method, Listen, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'jeep-html-toprint',
  styleUrl: 'jeep-html-toprint.css',
  shadow: true
})
export class JeepHtmlToprint {
  @Element() el!: HTMLJeepHtmlToprintElement;

  //************************
  //* Property Definitions *
  //************************
  /**
   * The style for elements in slot
   */
  @Prop() slotstyle: string;

  @State() innerSlotStyle: string = null;

  //*****************************
  //* Watch on Property Changes *
  //*****************************

  @Watch('slotstyle')
  parseSlotStyleProp(newValue: string) {
    if (newValue) this.innerSlotStyle = newValue ? newValue : null;
  }

  //*********************
  //* Event Definitions *
  //*********************

  @Event({eventName:'jeepHtmlToPrint'}) printPage: EventEmitter<void>;
  @Event({eventName:'jeepHtmlToPrintReady'}) printPageReady: EventEmitter<void>;
  @Event({eventName:'jeepHtmlToPrintCompleted'}) printPageCompleted: EventEmitter<void>;

  //*******************************
  //* Listen to Event Definitions *
  //*******************************

  @Listen('jeepHtmlToPrint')
  printDocHandler() {
    this.window.print();
    this.printPageCompleted.emit();
    }
  //**********************
  //* Method Definitions *
  //**********************
  /**
   * Method initialize
   */
  @Method()
  async init(): Promise<void> {
    return await this._init();
  }
  @Method()
  async load(): Promise<void> {
    return await this._load();
  }

  @Method()
  async emitPrint(): Promise<void> {
    this.printPage.emit();
    return;
  }

  @Method()
  async getSlotStyle(): Promise<string> {
    return this.innerSlotStyle;
  }
  //*********************************
  //* Internal Variable Definitions *
  //*********************************
  window: Window;
//  _element: any ;
  _menu: any;
  _toprint: string;
  _error: string = null;

  //*******************************
  //* Component Lifecycle Methods *
  //*******************************

  async componentWillLoad() {
    await this.init();
  }

  async componentDidLoad() {
    await this.load();
  }

  //******************************
  //* Private Method Definitions *
  //******************************

  private async _init(): Promise<void> {
    this.window = window;
//    this._element = this.el.shadowRoot;
    this.parseSlotStyleProp(this.slotstyle ? this.slotstyle : null);
    // check if there is a ion-menu and dismiss it
    this._menu = document.querySelector('ion-menu');
    if(this._menu !== null) {
      this._menu.setAttribute('disabled','true');
    }
    return;
  }

  private async _load(): Promise<void> {
    const divs:Array<HTMLDivElement> = Array.from(this.el.querySelectorAll('div'));
    if(divs && divs.length > 0 ) {
      const slotDivEl = divs.filter((item) => {
        return (item.slot && item.slot === 'toprint') || item.outerHTML.indexOf('slot="toprint"') !== -1 ? item: null});
      this._error = slotDivEl && slotDivEl.length > 0 ? null : "Error: slot name toprint doesn't exist";
      if(this._error === null ) {
        const erEl: HTMLDivElement = this.el.shadowRoot.querySelector('#error-div');
        erEl.style.setProperty('display','none');
        slotDivEl[0].innerHTML = this.innerSlotStyle !== null ? this.innerSlotStyle + slotDivEl[0].innerHTML : slotDivEl[0].innerHTML;
        this.printPageReady.emit();    
      }
    } else {
      this._error = "Error: slot name toprint doesn't exist";
    }
    return;
  }

  //*************************
  //* Rendering JSX Element *
  //*************************

  render() {
    /*
    let toRender: any[] = [];
    if (this._error !== null) {
      toRender = [...toRender,
        <div id="error-div">{this._error}</div>
      ];
    } else {
      toRender = [...toRender,
        <slot name='toprint'></slot>
      ];
    }
    */
    return (
      <Host>
        <div id="error-div">Error: slot name toprint doesn't exist</div> 
        <slot name='toprint'></slot>
      </Host>
    );
  }

}
