(this["webpackJsonploopup-numbers"]=this["webpackJsonploopup-numbers"]||[]).push([[0],[,function(e,t,r){e.exports={FormatterWrapper:"Formatter_FormatterWrapper__4d9x-",HeaderWrapper:"Formatter_HeaderWrapper__32fIk",InputWrapper:"Formatter_InputWrapper__1YB1L",DisplayWrapper:"Formatter_DisplayWrapper__eHAJB"}},function(e,t,r){e.exports={field:"Input_field__2ispG",label:"Input_label__2uf_I",input:"Input_input__267Jt"}},function(e,t,r){e.exports={error:"Display_error__1Ugao",success:"Display_success__3sqon"}},,,,,,function(e,t,r){e.exports={ButtonWrapper:"Button_ButtonWrapper__1isgn"}},,,,function(e,t,r){e.exports=r(20)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(6),o=r.n(s),i=(r(18),r(19),r(7)),c=r(8),l=r(12),u=r(11),p=r(1),m=r.n(p),d=r(10),h=function(e){var t=e.split("");return"+44"===[t[0],t[1],t[2]].join("")},b=r(9),f=r.n(b),_=function(e){return a.createElement("button",{className:f.a.ButtonWrapper,onClick:e.clicked,disabled:e.disabled},e.children)},E=r(2),v=r.n(E),N=function(e){return n.a.createElement("div",{className:v.a.field},n.a.createElement("input",{type:"text",name:"phonenumber",className:v.a.input,onChange:e.inputChange,placeholder:" "}),n.a.createElement("label",{htmlFor:"phonenumber",className:v.a.label},e.placeholder))},g=r(3),y=r.n(g),W=function(e){return a.createElement("div",{className:[y.a.DisplayWrapper,y.a[e.displayType]].join(" ")},e.children)},F=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={isError:!1,isSuccess:!1,errorMessage:"",successMessage:"",submittedPhoneNumber:"",formattedNumber:""},e.inputHandler=function(t){var r=t.target;e.setState({isError:!1,errorMessage:"",submittedPhoneNumber:r.value})},e.convertNumberFormat=function(){h(e.state.submittedPhoneNumber)?e.formatNumber(e.state.submittedPhoneNumber):e.setState({isError:!0,errorMessage:"".concat(e.state.submittedPhoneNumber," is not a valid UK Phone number \ud83d\ude22")})},e.formatNumber=function(t){if(null!==t){var r=Object(d.a)(t);e.setState({isSuccess:!0,successMessage:"Here's your formatted number: ".concat(null===r||void 0===r?void 0:r.formatNational()," \ud83e\udd73")})}else e.setState({isError:!0,errorMessage:"Error formatting number"})},e}return Object(c.a)(r,[{key:"render",value:function(){var e=this,t=a.createElement("div",{className:m.a.HeaderWrapper},a.createElement("h1",null,this.props.pageTitle)),r=a.createElement("div",{className:m.a.InputWrapper},a.createElement(N,{placeholder:"Phone Number",inputChange:function(t){return e.inputHandler(t)}}),a.createElement(_,{clicked:this.convertNumberFormat,disabled:""===this.state.submittedPhoneNumber},"Check Number")),n=this.state.isError?a.createElement(W,{displayType:"error"},this.state.errorMessage):null,s=this.state.isSuccess?a.createElement(W,{displayType:"success"},this.state.successMessage):null,o=a.createElement("div",{className:m.a.DisplayWrapper},this.state.isError?a.createElement("div",{className:m.a.ErrorDisplay},n):a.createElement("div",{className:m.a.SuccessDisplay},s));return a.createElement("main",{className:m.a.FormatterWrapper},t,r,o)}}]),r}(a.Component);var k=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(F,{pageTitle:"UK Phone Number Formatter"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.7f2025fe.chunk.js.map