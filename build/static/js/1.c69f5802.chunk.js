webpackJsonp([1],{192:function(e,n,t){"use strict";function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function r(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var l=t(0),u=t.n(l),s=t(7),c=t(10),d=t(193),A=t(57),p=t(58),b=t(205),h=t.n(b),g=t(13),f=t(15),m=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),C=function(e){function n(){var e,t,r,l;i(this,n);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return t=r=a(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(s))),r.state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},r.inputChangedHandler=function(e,n){var t=Object(f.b)(r.state.controls,o({},n,Object(f.b)(r.state.controls[n],{value:e.target.value,valid:Object(f.a)(e.target.value,r.state.controls[n].validation),touched:!0})));r.setState({controls:t})},r.submitHandler=function(e){e.preventDefault(),r.props.onAuth(r.state.controls.email.value,r.state.controls.password.value,r.state.isSignup)},r.switchAuthModeHandler=function(){r.setState(function(e){return{isSignup:!e.isSignup}})},l=t,a(r,l)}return r(n,e),m(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,n=[];for(var t in this.state.controls)n.push({id:t,config:this.state.controls[t]});var o=n.map(function(n){return u.a.createElement(d.a,{key:n.id,elementType:n.config.elementType,elementConfig:n.config.elementConfig,value:n.config.value,invalid:!n.config.valid,shouldValidate:n.config.validation,touched:n.config.touched,changed:function(t){return e.inputChangedHandler(t,n.id)}})});this.props.loading&&(o=u.a.createElement(p.a,null));var i=null;this.props.error&&(i=u.a.createElement("p",null,this.props.error.message));var a=null;return this.props.isAuthenticated&&(a=u.a.createElement(c.c,{to:this.props.authRedirectPath})),u.a.createElement("div",{className:h.a.Auth},a,i,u.a.createElement("form",{onSubmit:this.submitHandler},o,u.a.createElement(A.a,{btnType:"Success"},"SUBMIT")),u.a.createElement(A.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignup?"SIGNIN":"SIGNUP"))}}]),n}(l.Component),v=function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},x=function(e){return{onAuth:function(n,t,o){return e(g.b(n,t,o))},onSetAuthRedirectPath:function(){return e(g.j("/"))}}};n.default=Object(s.b)(v,x)(C)},193:function(e,n,t){"use strict";var o=t(0),i=t.n(o),a=t(194),r=t.n(a),l=function(e){var n=null,t=[r.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&t.push(r.a.Invalid),e.elementType){case"input":n=i.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":n=i.a.createElement("textarea",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":n=i.a.createElement("select",{className:t.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:n=i.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return i.a.createElement("div",{className:r.a.Input},i.a.createElement("label",{className:r.a.Label},e.label),n)};n.a=l},194:function(e,n,t){var o=t(195);"string"===typeof o&&(o=[[e.i,o,""]]);var i={};i.transform=void 0;t(189)(o,i);o.locals&&(e.exports=o.locals)},195:function(e,n,t){n=e.exports=t(188)(!0),n.push([e.i,".Input__Input__1VROp{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__Label__1tOSX{font-weight:700;display:block;margin-bottom:8px}.Input__InputElement__3TB0k{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__InputElement__3TB0k:focus{outline:none;background-color:#ccc}.Input__Invalid__38X2d{border:1px solid red;background-color:#fda49a}","",{version:3,sources:["E:/[FreeTutorials.Us] Udemy - react-the-complete-guide-incl-redux/20 Testing/343 testing-01-finished/testing--01-finished/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,qBACI,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,qBACI,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACtB,AAED,4BACI,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAClC,AAED,kCACI,aAAc,AACd,qBAAuB,CAC1B,AAED,uBACI,qBAAsB,AACtB,wBAA0B,CAC7B",file:"Input.css",sourcesContent:[".Input {\n    width: 100%;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.Label {\n    font-weight: bold;\n    display: block;\n    margin-bottom: 8px;\n}\n\n.InputElement {\n    outline: none;\n    border: 1px solid #ccc;\n    background-color: white;\n    font: inherit;\n    padding: 6px 10px;\n    display: block;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.InputElement:focus {\n    outline: none;\n    background-color: #ccc;\n}\n\n.Invalid {\n    border: 1px solid red;\n    background-color: #FDA49A;\n}"],sourceRoot:""}]),n.locals={Input:"Input__Input__1VROp",Label:"Input__Label__1tOSX",InputElement:"Input__InputElement__3TB0k",Invalid:"Input__Invalid__38X2d"}},205:function(e,n,t){var o=t(206);"string"===typeof o&&(o=[[e.i,o,""]]);var i={};i.transform=void 0;t(189)(o,i);o.locals&&(e.exports=o.locals)},206:function(e,n,t){n=e.exports=t(188)(!0),n.push([e.i,".Auth__Auth__1TInt{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width:600px){.Auth__Auth__1TInt{width:500px}}","",{version:3,sources:["E:/[FreeTutorials.Us] Udemy - react-the-complete-guide-incl-redux/20 Testing/343 testing-01-finished/testing--01-finished/src/containers/Auth/Auth.css"],names:[],mappings:"AAAA,mBACI,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,yBACI,mBACI,WAAa,CAChB,CACJ",file:"Auth.css",sourcesContent:[".Auth {\n    margin: 20px auto;\n    width: 80%;\n    text-align: center;\n    -webkit-box-shadow: 0 2px 3px #ccc;\n            box-shadow: 0 2px 3px #ccc;\n    border: 1px solid #eee;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n@media (min-width: 600px) {\n    .Auth {\n        width: 500px;\n    }\n}"],sourceRoot:""}]),n.locals={Auth:"Auth__Auth__1TInt"}}});
//# sourceMappingURL=1.c69f5802.chunk.js.map