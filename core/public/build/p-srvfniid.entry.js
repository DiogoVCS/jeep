import{r as t,h as i,g as s,H as h}from"./p-1eafec4e.js";import{w as l,c as e,a,u as r,t as o,b as n,d as c,e as u,f as d,g as p,r as m,h as f,i as x,j as y}from"./p-1c36f0c7.js";import{d as g,a as b,b as w,c as P,e as M,g as _}from"./p-a5313538.js";import{r as z}from"./p-a7a398d7.js";const v=class{constructor(i){t(this,i)}parseTitleProp(t){this.innerTitle=t||null}parseSubTitleProp(t){this.innerSubTitle=t||null}parseColorProp(t){this.innerColor=t||null}parseXTitleProp(t){this.innerXTitle=t||null}parseYTitleProp(t){this.innerYTitle=t||null}parseDatapointsProp(t){const i=t||null;let s,h;if(this._dataColor=!1,null!=i){let t=JSON.parse(i);if(t.data)if(t.data.length>0){if(s=t.data,s[0].color&&(this._dataColor=!0),null===this.innerColor&&!this._dataColor){let t=Math.floor(360/s.length);for(let i=0;i<s.length;i++){let h=i*t;s[i].color=z(h,h+t)}this._dataColor=!0}s[0].label&&this.axisType.push("label"),s[0].x&&this.axisType.push("x"),s[0].y&&this.axisType.push("y"),h={status:200}}else s=null,h={status:400,message:"Error: data object empty in datapoints property"};else s=null,h={status:400,message:"Error: no data object in datapoints property"}}else s=null,h={status:400,message:"Error: no datapoints property"};this.status=h,this.innerDatapoints=200===this.status.status?[...s]:null}parseStyleProp(t){this.innerStyle=t||null}parseAnimationProp(t){this.innerAnimation=t||!1}parseBorderProp(t){this.innerBorder=t||!1}parseDelayProp(t){this.innerDelay=t?parseFloat(t):100}init(){return this._init(),Promise.resolve()}getStatus(){return Promise.resolve(this.status)}renderChart(){return Promise.resolve(this._renderChart())}async getWindowSize(){return l(this.window)}async getCssProperties(){return this._prop}async componentWillLoad(){this.window=window,this._prop={},await this._init()}componentDidLoad(){this._element=this.el.shadowRoot,200===this.status.status&&this._renderChart()}async _init(){this.document=this.window.document,this.root=this.document.documentElement,this.axisType=[],this.parseTitleProp(this.ctitle?this.ctitle:null),this.parseSubTitleProp(this.subtitle?this.subtitle:null),this.parseXTitleProp(this.xtitle?this.xtitle:null),this.parseYTitleProp(this.ytitle?this.ytitle:null),this.parseColorProp(this.color?this.color:null),this.parseAnimationProp(!!this.animation&&this.animation),this.parseBorderProp(!!this.cborder&&this.cborder),this.parseStyleProp(this.cstyle?this.cstyle:null),this.parseDelayProp(this.delay?this.delay:"100"),this._wSize=await this.getWindowSize(),this._update=!1,this._dataColor=!1,this.parseDatapointsProp(this.datapoints?this.datapoints:null),this._yaxis={};let t=[];if(t=this.axisType.filter(t=>"label"===t),this._label=!1,"label"===t[0]&&(this._label=!0),this._showTarget=0,this.mouseStart=!1,this._xmlns="http://www.w3.org/2000/svg",this.window.addEventListener("resize",g(this,this._windowResize,100,!1),!1),this._prop.bgColor=this._prop.bgColor?this._prop.bgColor:this._setPropertyValue("--chart-background-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-background-color")),this._prop.topPlot=this._prop.topPlot?this._prop.topPlot:this._setPropertyValue("--chart-top",this.window.getComputedStyle(this.root).getPropertyValue("--chart-top")),this._prop.leftPlot=this._prop.leftPlot?this._prop.leftPlot:this._setPropertyValue("--chart-left",this.window.getComputedStyle(this.root).getPropertyValue("--chart-left")),this._prop.widthPlot=this._prop.widthPlot?this._prop.widthPlot:this._setPropertyValue("--chart-width",this.window.getComputedStyle(this.root).getPropertyValue("--chart-width")),this._prop.heightPlot=this._prop.heightPlot?this._prop.heightPlot:this._setPropertyValue("--chart-height",this.window.getComputedStyle(this.root).getPropertyValue("--chart-height")),this._prop.axColor=this._setPropertyValue("--chart-axis-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-color")),this._prop.lnColor=this._setPropertyValue("--chart-line-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-line-color")),this._prop.tiColor=this._setPropertyValue("--chart-title-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-title-color")),this._prop.stColor=this._setPropertyValue("--chart-subtitle-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-subtitle-color")),this._prop.atColor=this._setPropertyValue("--chart-axis-title-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-title-color")),this._prop.lbColor=this._setPropertyValue("--chart-label-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-label-color")),this._prop.ftFamily=this._setPropertyValue("--chart-font-family",this.window.getComputedStyle(this.root).getPropertyValue("--chart-font-family")),this._prop.ftTiSize=this._setPropertyValue("--chart-title-font-size",this.window.getComputedStyle(this.root).getPropertyValue("--chart-title-font-size")),this._prop.ftLbSize=this._setPropertyValue("--chart-label-font-size",this.window.getComputedStyle(this.root).getPropertyValue("--chart-label-font-size")),this._prop.ftATSize=this._setPropertyValue("--chart-axis-title-font-size",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-title-font-size")),this._prop.ftSTSize=this._setPropertyValue("--chart-subtitle-font-size",this.window.getComputedStyle(this.root).getPropertyValue("--chart-subtitle-font-size")),this._prop.tickX=this._setPropertyValue("--chart-tick-x-length",this.window.getComputedStyle(this.root).getPropertyValue("--chart-tick-x-length")),this._prop.tickY=this._setPropertyValue("--chart-tick-y-length",this.window.getComputedStyle(this.root).getPropertyValue("--chart-tick-y-length")),this._prop.gridX=this._setPropertyValue("--chart-grid-x",this.window.getComputedStyle(this.root).getPropertyValue("--chart-grid-x")),this._prop.animDuration=this._setPropertyValue("--chart-animation-duration",this.window.getComputedStyle(this.root).getPropertyValue("--chart-animation-duration")),this._prop.bdColor=this._setPropertyValue("--chart-border-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-border-color")),this._prop.bdWidth=this._setPropertyValue("--chart-border-width",this.window.getComputedStyle(this.root).getPropertyValue("--chart-border-width")),null!=this.innerStyle){const t=await b(this.innerStyle);null!=t&&(this._prop.leftPlot=t.left?t.left:this._prop.leftPlot,this._prop.topPlot=t.top?t.top:this._prop.topPlot,this._prop.widthPlot=t.width?t.width:this._prop.widthPlot,this._prop.heightPlot=t.height?t.height:this._prop.heightPlot,this._prop.bgColor=t.backgroundcolor?t.backgroundcolor:this._prop.bgColor)}this._wSize=await this.getWindowSize(),this._setContainerSize()}_setContainerSize(){this.w_width=w(this._prop.widthPlot,this._wSize.width,this._prop.leftPlot),this.w_height=w(this._prop.heightPlot,this._wSize.height,this._prop.topPlot),this.el.style.setProperty("--top",this._prop.topPlot),this.el.style.setProperty("--left",this._prop.leftPlot),this.el.style.setProperty("--width",`${this.w_width}px`),this.el.style.setProperty("--height",`${this.w_height}px`),this.el.style.setProperty("--backgroundcolor",`${this._prop.bgColor}`),this._titleRect=null,this._chartRect={top:0,left:0,width:this.w_width,height:this.w_height}}async _windowResize(){this._wSize=await this.getWindowSize(),this._setContainerSize(),this._update=!0,this.status&&200===this.status.status&&this._renderChart()}_getDataPoint(t){for(let i=0;i<this.innerDatapoints.length;i++){if(this._label){if(this.innerDatapoints[i].label===t)return{index:i,datapoint:this.innerDatapoints[i]}}else if(this.innerDatapoints[i].x===parseFloat(t))return{index:i,datapoint:this.innerDatapoints[i]};if(i===this.innerDatapoints.length-1)return{index:-1,datapoint:null}}}_setPropertyValue(t,i){return"--chart-background-color"===t?i||"#ffffff":"color"===t.slice(-5)?i||"#000000":"border-width"===t.slice(-12)?i||"1":"font-size"===t.slice(-9)?i||"10px":"font-family"===t.slice(-11)?i||"Verdana":"grid"===t.slice(-6).substring(0,4)?i||"false":"duration"===t.slice(-8)?i||"0.5s":i||"0"}_createTitle(){if(null!=this.innerTitle){let t,i;this._update?(t=this.svg.querySelector("#columnchart-title"),t.removeAttributeNS(null,"transform")):(t=e("g",this.svg),t.setAttributeNS(null,"id","columnchart-title"));let s,h={id:"columnchart-title-text",fontFamily:this._prop.ftFamily,fontSize:this._prop.ftTiSize,fill:this._prop.tiColor,anchor:"middle"},l=parseFloat(this._prop.ftTiSize.split("px")[0]),n={x:Math.round(this.w_width/2),y:l+10};i=this._update?r(this.svg,h.id,h.anchor,n):a(t,this.innerTitle,n,h),null!=this.innerSubTitle&&(s=i.getBoundingClientRect(),h.id="columnchart-subtitle-text",h.fontSize=this._prop.ftSTSize,h.fill=this._prop.stColor,l=Math.ceil(s.bottom-this.borderBB.top)+5,n={x:Math.round(this.w_width/2),y:l+10},this._update?r(this.svg,h.id,h.anchor,n):a(t,this.innerSubTitle,n,h)),s=t.getBoundingClientRect();let c=o(s.width,this.w_width,10),u="translate("+Math.round(10-s.left*c)+",0) scale("+c+","+c+")";1!=c&&t.setAttributeNS(null,"transform",u),s=t.getBoundingClientRect(),this._titleRect={left:s.left-this.borderBB.left,top:s.top-this.borderBB.top,width:s.width,height:s.height}}}_createTitleY(){let t,i={id:"columnchart-ytitle-text",fontFamily:this._prop.ftFamily,fontSize:this._prop.ftATSize,fill:this._prop.atColor,anchor:"middle"};if(null!=this.innerYTitle){let s;this._update?t=this.svg.querySelector("#columnchart-ytitle"):(t=e("g",this.svg),t.setAttributeNS(null,"id","columnchart-ytitle"));let h=this._chartRect.top+Math.round(this._chartRect.height/2),l={x:5+parseFloat(this._prop.ftATSize.split("px")[0]),y:h};s=this._update?r(this.svg,i.id,i.anchor,l):a(t,this.innerYTitle,l,i);let o="rotate(-90 "+l.x.toString()+" "+l.y.toString()+")";s.setAttributeNS(null,"transform",o);let n=t.getBoundingClientRect();return this._chartRect.left=Math.ceil(n.right-this.borderBB.left),this._chartRect.width-=Math.ceil(n.right-this.borderBB.left),t}return null}_createTitleX(){let t={id:"columnchart-xtitle-text",fontFamily:this._prop.ftFamily,fontSize:this._prop.ftATSize,fill:this._prop.atColor,anchor:"middle"};if(null!=this.innerXTitle){let i;this._update?i=this.svg.querySelector("#columnchart-xtitle"):(i=e("g",this.svg),i.setAttributeNS(null,"id","columnchart-xtitle"));let s=this._chartRect.top+this._chartRect.height-10,h={x:Math.round(this._chartRect.left+this._chartRect.width/2),y:s};this._update?r(this.svg,t.id,t.anchor,h):a(i,this.innerXTitle,h,t);let l=i.getBoundingClientRect();return this._chartRect.height-=Math.floor(l.height),i}return null}_labelSize(t,i){let s,h={fontFamily:this._prop.ftFamily,fontSize:this._prop.ftLbSize,fill:this._prop.lbColor,anchor:"start"};if(t.label)s=t.label;else{s=t.top.toString();let i=t.bottom.toString();i.length>s.length&&(s=i)}let l=a(this.svg,s,{x:0,y:0},h);0!=i&&l.setAttributeNS(null,"transform","rotate("+i+",0,0)");let e=l.getBoundingClientRect();return this.svg.removeChild(l),{width:Math.ceil(e.width),height:Math.ceil(e.height)}}_createAxis(){let t,i=P(this._prop.tickX),s=P(this._prop.tickY);this._update?t=this.svg.querySelector("#columnchart-axes"):(t=e("g",this.svg),t.setAttributeNS(this._xmlns,"id","columnchart-axes")),this._initChartRect();let h=this._createTitleY(),l=this._createTitleX();const o={dataPoints:this.innerDatapoints};this._lenY=n([o],"y",0,!0),this._lenX=n([o],this._label?"label":"x");let d=this._labelSize(this._lenY,0);this._x_axy=3+d.width+2+s,this._nXlines=this.innerDatapoints.length,this._xInterval=Math.floor((this._chartRect.width-this._x_axy)/this._nXlines),this._labelRotate=!1;let p=this._labelSize(this._lenX,0);p.width>this._xInterval-10&&(p=this._labelSize(this._lenX,-80),this._labelRotate=!0),this._y_axy=10+p.height+3+i,this._yaxis={},this._yaxis.left=this._chartRect.left+this._x_axy,this._yaxis.width=0,this._yaxis.top=this._chartRect.top,this._yaxis.height=this._chartRect.height-this._y_axy;let m={id:"columnchart-yaxis",stroke:this._prop.axColor,strokeWidth:"1"},f={x:this._yaxis.left,y:this._yaxis.top},x={x:this._yaxis.left+this._yaxis.width,y:this._yaxis.top+this._yaxis.height};if(this._update?u(this.svg,m.id,f,x):c(t,f,x,m),null!=h){let t="translate(0,0)";h.setAttributeNS(null,"transform",t);let i=h.getBoundingClientRect();t="translate(0,"+-Math.round(i.top-this.borderBB.top+i.height/2-(this._yaxis.top+this._yaxis.height/2))+")",h.setAttributeNS(null,"transform",t)}let g={id:"columnchart-ylabel0",stroke:this._prop.lbColor,strokeWidth:"1",fontFamily:this._prop.ftFamily,fontSize:this._prop.ftLbSize,anchor:"end"},b=Math.floor(parseFloat(this._prop.ftLbSize.split("px")[0])/2)-2;this._nYlines=Math.abs(Math.floor(this._lenY.length/this._lenY.interval))+1;for(let e=0;e<this._nYlines;e++){let i=this._lenY.top-e*Math.abs(this._lenY.interval);m.id="columnchart-yLine"+i.toString(),e===this._nYlines-1&&(m.id="columnchart-xaxis"),m.stroke=this._prop.lnColor,g.id="columnchart-ylabel"+i.toString();let h=y(this._yaxis,this._lenY,i),l={x:this._yaxis.left,y:h},o={x:this._chartRect.left+this._chartRect.width,y:h};if(this._update?u(this.svg,m.id,l,o):c(t,l,o,m),s>0){let e={x:this._yaxis.left-s,y:h};m.id="columnchart-ytick"+i.toString(),this._update?u(this.svg,m.id,l,e):c(t,l,e,m)}let n={x:this._yaxis.left-s-2,y:h+b};this._update?r(this.svg,g.id,g.anchor,n):a(t,i.toString(),n,g)}let w=this.svg.querySelector("#columnchart-xaxis"),_=parseFloat(w.getAttribute("y1")),z=Math.floor(this._xInterval/2);g={id:"columnchart-xlabel",stroke:this._prop.lbColor,strokeWidth:"1",fontFamily:this._prop.ftFamily,fontSize:this._prop.ftLbSize,anchor:"middle"},b=Math.floor(parseFloat(this._prop.ftLbSize.split("px")[0]));for(let e=0;e<this._nXlines;e++){let s,h,l,o={x:this._yaxis.left+z,y:_};if(M(this._prop.gridX)){m.id="columnchart-xLine"+e.toString();let i={x:this._yaxis.left+z,y:this._yaxis.top};this._update?u(this.svg,m.id,o,i):c(t,o,i,m)}if(i>0){let s={x:this._yaxis.left+z,y:_+i};m.id="columnchart-xtick"+e.toString(),this._update?u(this.svg,m.id,o,s):c(t,o,s,m)}s=this._label?this.innerDatapoints[e].label:this.innerDatapoints[e].x.toString(),g.id="columnchart-xlabel"+s;let n=null;this._labelRotate?(g.anchor="end",l={x:this._yaxis.left+z,y:_+i+3},n="rotate(-80,"+l.x+","+l.y+")"):(g.anchor="middle",l={x:this._yaxis.left+z,y:_+i+b},n="rotate(0,"+l.x+","+l.y+")"),h=this._update?r(this.svg,g.id,g.anchor,l):a(t,s,l,g),null!=n&&h.setAttributeNS(null,"transform",n),z+=this._xInterval}if(null!=l){l.setAttributeNS(null,"transform","translate(0,0)");let t=w.getBoundingClientRect(),i=l.getBoundingClientRect(),s=-Math.round(i.left+i.width/2-(t.left+t.width/2));Math.abs(s)>0&&l.setAttributeNS(null,"transform","translate("+s+",0)")}}_createColumn(){let t;this._update?t=this.svg.querySelector("#columnchart-data"):(t=e("g",this.svg),t.setAttributeNS(null,"id","columnchart-data"));let i={id:"columnchart-data"};null!=this.innerColor&&(i.fill=this.innerColor);let s,h=Math.floor(this._xInterval/2),l=Math.floor(h-.1*h),a=l>2?l:2,r=y(this._yaxis,this._lenY,0);for(let e=0;e<this._nXlines;e++){let l;this._dataColor&&(i.fill=this.innerDatapoints[e].color),l=this._label?this.innerDatapoints[e].label:this.innerDatapoints[e].x.toString(),i.id="columnchart-data-"+l;let o=!1,n={};n.left=this._yaxis.left+h-a,n.width=2*a;let c=y(this._yaxis,this._lenY,this.innerDatapoints[e].y);c>r?(n.top=r,n.height=c-r):(n.top=c,n.height=r-n.top,o=!0),this._update?(s=p(this.svg,i.id,n),this.innerAnimation&&(m(s),this._setAnimation(s,n,this._prop.animDuration,o))):(s=d(t,n,i),s.addEventListener("touchstart",this._handleTouchDown.bind(this),!1),s.addEventListener("touchend",this._handleTouchUp.bind(this),!1),s.addEventListener("mousedown",this._handleMouseDown.bind(this),!1),s.addEventListener("mouseup",this._handleMouseUp.bind(this),!1),this.innerAnimation&&this._setAnimation(s,n,this._prop.animDuration,o)),h+=this._xInterval}}_setAnimation(t,i,s,h){let l={attributeName:"height",from:"0"};l.to=i.height.toString(),l.dur=s,l.fill="freeze",f(t,l),h&&(l.attributeName="y",l.from=(i.top+i.height).toString(),l.to=i.top.toString(),f(t,l))}_initChartRect(){this._chartRect.top=20,null!=this._titleRect&&(this._chartRect.top+=Math.round(this._titleRect.top+this._titleRect.height)),this._chartRect.left=0,this._chartRect.width=this.w_width-this._chartRect.left-20,this._chartRect.height=this.w_height-this._chartRect.top}_waitRemoveLabel(){this.mouseStart&&setTimeout(()=>{this._removeLabel(this.svg),this.mouseStart=!1,this._showTarget=0},1200)}_removeLabel(t){let i=t.querySelectorAll("#columnchart-label-value");for(let s=0;s<i.length;s++)m(i[s]),t.removeChild(i[s])}_handleTouchDown(t){t.preventDefault(),this.mouseStart=!0,this._handleEventTarget(t,{x:t.touches[0].pageX,y:t.touches[0].pageY})}_handleMouseDown(t){t.preventDefault(),this.mouseStart=!0,this._handleEventTarget(t,{x:t.pageX,y:t.pageY})}_handleEventTarget(t,i){this._showTarget=t.target,i.x-=this.borderBB.left,i.y-=this.borderBB.top;let s=this._showTarget.getBoundingClientRect(),h=this._showTarget.getAttributeNS(null,"fill"),l=this._showTarget.getAttributeNS(null,"id").split("-")[2],e=this._getDataPoint(l);l=l+" : "+e.datapoint.y;let a=e.index,r=1.2*parseFloat(this._prop.ftLbSize.split("px")[0]),o={fontFamily:this._prop.ftFamily,fontSize:r.toString()+"px",fill:this._prop.lbColor,anchor:"middle"};x(this.svg,s,l,a,h,i,this.borderBB,o)}_handleTouchUp(t){t.preventDefault(),this._waitRemoveLabel()}_handleMouseUp(t){t.preventDefault(),this._waitRemoveLabel()}async _renderChart(){this.container=this._element.querySelector("#div-columnchart-container"),this.chart=this._element.querySelector("#div-columnchart-chart"),this.svg=this._element.querySelector("#svg-columnchart"),this.borderEl=this.svg.querySelector("#svg-border-rect"),this.borderBB=await _(this.borderEl,this.innerDelay),0==this.borderBB.top&&0==this.borderBB.left&&0==this.borderBB.width&&0==this.borderBB.height||(this.innerBorder&&this.borderEl.classList.remove("hidden"),null!=this.innerTitle&&this.innerTitle.length>0&&this._createTitle(),this._createAxis(),this._createColumn())}render(){let t=[];if(200===this.status.status){let s=`0 0 ${this.w_width.toString()} ${this.w_height.toString()}`;t=[...t,i("div",{id:"div-columnchart-container"},i("div",{id:"div-columnchart-chart"},i("svg",{id:"svg-columnchart",width:this.w_width.toString(),height:this.w_height.toString(),viewBox:s},i("rect",{id:"svg-border-rect",class:"border-rect hidden",x:"0",y:"0",width:this.w_width.toString(),height:this.w_height.toString(),stroke:this._prop.bdColor,"stroke-width":this._prop.bdWidth,fill:"none","fill-opacity":"0"}))))]}else t=[...t,i("div",{id:"div-error-message"},i("p",{id:"p-error-message"},this.status.message))];return i(h,null,t)}get el(){return s(this)}static get watchers(){return{ctitle:["parseTitleProp"],subtitle:["parseSubTitleProp"],color:["parseColorProp"],xtitle:["parseXTitleProp"],ytitle:["parseYTitleProp"],datapoints:["parseDatapointsProp"],cstyle:["parseStyleProp"],animation:["parseAnimationProp"],cborder:["parseBorderProp"],delay:["parseDelayProp"]}}static get style(){return":host{--height:200px;--width:300px;--top:30px;--left:10px;--backgroundcolor:#fff}#div-columnchart-container{position:relative;left:0;top:0;width:100%;height:calc(var(--height) + var(--top));z-index:1}#div-columnchart-chart{position:relative;left:var(--left);top:var(--top);width:var(--width);height:var(--height);background-color:var(--backgroundcolor);z-index:1}.hidden{visibility:hidden}#div-error-message{background-color:#f89393;position:absolute;top:0;left:0;margin:0 auto;width:100%;height:60px;line-height:60px;text-align:left;padding-left:10px;font-size:15px;font-family:Verdana}#p-error-message{display:inline-block;vertical-align:middle;line-height:normal}"}};export{v as jeep_columnchart};