(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{158:function(e,t,a){e.exports=a.p+"static/media/pokeball.f10bf078.png"},170:function(e,t,a){e.exports=a(415)},355:function(e,t,a){},413:function(e,t,a){},414:function(e,t,a){},415:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(20),c=a.n(l),o=a(12),u=a(40),i=(a(82),a(71)),s=a.n(i),m=function(e){var t=["violet","indigo","blue","green","yellow","orange","red"][Math.floor(6*Math.random())]+"-text";return function(a){return r.a.createElement("div",{className:t},r.a.createElement(e,a))}}((function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo",width:"280"}),r.a.createElement("h1",null,"Welcome To The Project World"))})),p=Object(u.f)((function(e){return r.a.createElement("nav",{className:"nav-wrapper red darken-3"},r.a.createElement("div",{className:"conatiner"},r.a.createElement("span",null,"Project World"),r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(o.c,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/Icons"},"Icons")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/Toastify"},"Toastify")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/Modals"},"Modal")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/ToolTip"},"Tool Tip")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/CountUp"},"Count Up")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/IdleTimer"},"Idle Timer")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/ColorPicker"},"Color Picker")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/CreditCard"},"Credit Card")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/DatePickerd"},"Date Picker")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/AgeCal"},"Age Calculate")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/MultipleRedux"},"Multiple Redux")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/Hoc"},"Hoc Redux")))))})),d=a(21),E=a(22),h=a(24),b=a(23),f=a(25),v=a(0),O=a(159),g=a(160),y=a(33),j=a(158),C=a.n(j),N=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){console.log("icon props->",this.props);var e=this.props.posts,t=e.length?e.map((function(e){return r.a.createElement("div",{className:"post card",key:e.id},r.a.createElement("img",{src:C.a,alt:"Pokeball"}),r.a.createElement("div",{className:"card-content blue-text"},e.id,r.a.createElement(o.b,{to:"/"+e.id},r.a.createElement("span",{className:"card-title red-text"},r.a.createElement("h5",null,e.title))),r.a.createElement("p",null,e.body)))})):r.a.createElement("div",{className:"center"},"No posts yet");return r.a.createElement(v.b.Provider,{value:{color:"blue",size:"5rem"}},r.a.createElement("div",{className:"icon"},r.a.createElement("header",{className:"container"},"Hello",r.a.createElement(O.a,null),r.a.createElement(g.a,{color:"purple",size:"5rem"}))),r.a.createElement("div",{className:"container"},r.a.createElement("h3",{style:{color:"red"}},"Fetching data using Axios"),t))}}]),t}(n.Component),T=Object(y.b)((function(e){return{posts:e.rootReducer.posts}}))(N),k=a(15),A=(a(180),function(e){var t=e.closeToast;return r.a.createElement(r.a.Fragment,null,"Something Went Wrong",r.a.createElement("button",{onClick:t},"X"))});k.a.configure();var P=function(){return r.a.createElement("div",{className:"toastify"},r.a.createElement("button",{onClick:function(){Object(k.a)("TOP_LEFT Notification!",{position:k.a.POSITION.TOP_LEFT}),k.a.success("TOP_CENTER success!",{position:k.a.POSITION.TOP_CENTER,autoClose:8e3}),k.a.info("TOP_RIGHT info!",{position:k.a.POSITION.TOP_RIGHT,autoClose:!1}),k.a.warn(r.a.createElement(A,null),{position:k.a.POSITION.BOTTOM_LEFT,autoClose:!1}),k.a.error("BOTTOM_CENTER error!",{position:k.a.POSITION.BOTTOM_CENTER}),Object(k.a)("BOTTOM_RIGHT Notification!",{position:k.a.POSITION.BOTTOM_RIGHT})}},"Notify !"))},I=a(14),D=a(113),M=a.n(D);M.a.setAppElement("#root");var x=function(){var e=r.a.useState(!1),t=Object(I.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement("button",{onClick:function(){return n(!0)}},"Open Modal"),r.a.createElement(M.a,{isOpen:a,shouldCloseOnOverlayClick:!1,onRequestClose:function(){return n(!1)}},r.a.createElement("h2",null,"Modal Title"),r.a.createElement("p",null,"Modal Body"),r.a.createElement("button",{onClick:function(){return n(!1)}},"Close")))},S=a(161),w=(a(189),function(){return r.a.createElement("div",{className:"tooltip"},r.a.createElement(S.Tooltip,{title:"Basic Tooltip",position:"left-start",theme:"dark",arrow:!0,delay:1e3},r.a.createElement("button",null,"Hover")))}),_=a(162),R=function(){var e=Object(n.useState)(0),t=Object(I.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Count - ",a),r.a.createElement("button",{onClick:function(){return l((function(e){return e+1}))}},"Increment"))};var U=function(){var e=Object(_.useCountUp)({duration:5,end:1e4,startOnMount:!1}),t=e.countUp,a=e.start,n=e.pauseResume,l=e.reset,c=e.update;return r.a.createElement("div",{className:"countup"},r.a.createElement("h1",null,t,r.a.createElement("br",null),r.a.createElement("button",{onClick:a},"Start"),r.a.createElement("button",{onClick:l},"Reset"),r.a.createElement("button",{onClick:n},"Pause/Resume"),r.a.createElement("button",{onClick:function(){return c(2e3)}},"Update")),r.a.createElement(R,null))},B=a(163),H=function(){var e=Object(n.useRef)(null);return r.a.createElement("div",{className:"idletimer"},r.a.createElement(B.a,{ref:e,timeout:5e3,onIdle:function(){console.log("User Is Idle")}}),r.a.createElement("h2",null,"Hello Admin"))},L=a(164),q=function(){var e=Object(n.useState)("#fff"),t=Object(I.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),o=Object(I.a)(c,2),u=o[0],i=o[1];return r.a.createElement("div",{className:"colorpicker"},r.a.createElement("button",{onClick:function(){return i((function(e){return!e}))}},u?"Close":"Pick"),u&&r.a.createElement(L.ChromePicker,{color:a,onChange:function(e){return l(e.hex)}}),r.a.createElement("h2",null,"You Picked ",a))},F=a(165),G=(a(354),a(355),function(){var e=Object(n.useState)(""),t=Object(I.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(I.a)(c,2),u=o[0],i=o[1],s=Object(n.useState)(""),m=Object(I.a)(s,2),p=m[0],d=m[1],E=Object(n.useState)(""),h=Object(I.a)(E,2),b=h[0],f=h[1],v=Object(n.useState)(""),O=Object(I.a)(v,2),g=O[0],y=O[1];return r.a.createElement("div",{className:"CreditCards"},r.a.createElement(F.a,{number:a,name:u,expiry:p,cvc:b,focused:g}),r.a.createElement("center",null,r.a.createElement("form",null,r.a.createElement("input",{type:"tel",name:"number",placeholder:"Card Number",value:a,className:"creditCard",onChange:function(e){return l(e.target.value)},onFocus:function(e){return y(e.target.name)}}),r.a.createElement("input",{type:"text",name:"name",placeholder:"Name",value:u,className:"creditCard",onChange:function(e){return i(e.target.value)},onFocus:function(e){return y(e.target.name)}}),r.a.createElement("input",{type:"text",name:"expiry",placeholder:"MM/YY Expiry",value:p,className:"creditCard inp2",onChange:function(e){return d(e.target.value)},onFocus:function(e){return y(e.target.name)}}),r.a.createElement("input",{type:"tel",name:"cvc",placeholder:"CVC",value:b,className:"creditCard inp2",onChange:function(e){return f(e.target.value)},onFocus:function(e){return y(e.target.name)}}))),r.a.createElement("div",{className:"container"},r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Card"),r.a.createElement("th",null,"Demo Number")),r.a.createElement("tr",null,r.a.createElement("td",null,"Visa"),r.a.createElement("td",null,"4111 1111 1111 1111")),r.a.createElement("tr",null,r.a.createElement("td",null,"MasterCard"),r.a.createElement("td",null,"5500 0000 0000 0004")),r.a.createElement("tr",null,r.a.createElement("td",null,"American Express"),r.a.createElement("td",null,"3400 0000 0000 009")),r.a.createElement("tr",null,r.a.createElement("td",null,"Diner's Club"),r.a.createElement("td",null,"3000 0000 0000 04")),r.a.createElement("tr",null,r.a.createElement("td",null,"Union Pay"),r.a.createElement("td",null,"6200 0000 0000 0004")),r.a.createElement("tr",null,r.a.createElement("td",null,"HiperCard"),r.a.createElement("td",null,"6010 0000 0000 0004")),r.a.createElement("tr",null,r.a.createElement("td",null,"Discover"),r.a.createElement("td",null,"6500 0000 0000 0000")),r.a.createElement("tr",null,r.a.createElement("td",null,"JCB"),r.a.createElement("td",null,"3500 0000 0000 0009")))))}),W=a(166),Y=a.n(W),J=(a(356),function(){var e=Object(n.useState)(null),t=Object(I.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:"Datepicker"},r.a.createElement(Y.a,{selected:a,onChange:function(e){return l(e)},dateFormat:"dd/MM/yyyy",filterDate:function(e){return 6!==e.getDay()&&0!==e.getDay()},isClearable:!0,showMonthDropdown:!0,showYearDropdown:!0,scrollableMonthYearDropdown:!0,placeholderText:"Please Enter Date"}))}),z=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){a.props.deletePost(a.props.posts.id),a.props.history.push("/Icons")},a}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props.posts?r.a.createElement("div",{className:"post"},r.a.createElement("h4",{className:"red-text"},"".concat(this.props.posts.id,") "),this.props.posts.title),r.a.createElement("h5",{className:"blue-text"},this.props.posts.body),r.a.createElement("div",{className:"center"},r.a.createElement("button",{className:"btn grey",onClick:this.handleClick},"Delete Post"))):r.a.createElement("div",{className:"center"},"Loading post...");return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Route param"),e)}}]),t}(n.Component),V=Object(y.b)((function(e,t){console.log("post ownProps",t.match),console.log("id",typeof t.match.params.postId);var a=parseInt(t.match.params.postId);return{posts:e.rootReducer.posts.find((function(e){return e.id===a}))}}),(function(e){return{deletePost:function(t){e({type:"DELETE_POST",id:t})}}}))(z),Q=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,"Age: ",r.a.createElement("span",null,this.props.age)),r.a.createElement("button",{onClick:this.props.onAgeUp},"Age Up"),r.a.createElement("button",{onClick:this.props.onAgeDown},"Age Down"),r.a.createElement("hr",null),r.a.createElement("div",null,"History"),r.a.createElement("p",null,"Click on the number you want to DELETE from the list below"),this.props.loading&&r.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo",width:"280"}),r.a.createElement("div",null,r.a.createElement("ul",null,this.props.history.map((function(t){return r.a.createElement("li",{key:t.id,className:"historyItem",onClick:function(){return e.props.onDelete(t.id)}},t.age)})))))}}]),t}(n.Component),X=Object(y.b)((function(e){return{age:e.reducerAge.age,history:e.reducerAge.history,loading:e.reducerAge.loading}}),(function(e){return{onAgeUp:function(){return e((t=1,function(e){e({type:"LOADING"}),setTimeout((function(){t++,e(function(e){return{type:"AGE_UP",value:e}}(t))}),5e3)}));var t},onAgeDown:function(){return e({type:"AGE_DOWN",value:1})},onDelete:function(t){return e({type:"DEL_ITEM",key:t})}}}))(Q),K=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col"},r.a.createElement("div",null,r.a.createElement("span",null,"A:"),r.a.createElement("span",null,this.props.a),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e.props.updateA(e.props.b)}},"Update A"))),r.a.createElement("div",{className:"col"},r.a.createElement("div",null,r.a.createElement("span",null,"B:"),r.a.createElement("span",null,this.props.b),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e.props.updateB(e.props.a)}},"Update B"))))}}]),t}(n.Component),Z=Object(y.b)((function(e){return{a:e.rA.a,b:e.rB.b}}),(function(e){return{updateA:function(t){return e({type:"UPDATE_A",b:t})},updateB:function(t){return e({type:"UPDATE_B",a:t})}}}))(K),$=function(e){return function(t){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(b.a)(a).call(this,e))).state={data:[]},t}return Object(f.a)(a,t),Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.dataSource).then((function(e){return e.json()})).then((function(t){return e.setState({data:t.slice(0,4)})}))}},{key:"render",value:function(){var t=Object.assign({},this.props);return r.a.createElement(e,Object.assign({data:this.state.data},t))}}]),a}(n.Component)}((function(e){var t=e.data,a=e.name,n=e.email;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,a),r.a.createElement("h2",null,n),"Posts:",t.map((function(e){return r.a.createElement("div",{className:"post",key:e.id},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.body))})))})),ee=(a(413),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={users:[]},a}return Object(f.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({users:t.slice(0,3)})}))}),1500)}},{key:"render",value:function(){return this.state.users.length<1?r.a.createElement("h1",null,"Loading..."):r.a.createElement("div",{className:"container user-list"},r.a.createElement("h1",null," Users List "),this.state.users.map((function(e){return r.a.createElement("div",{className:"post",key:e.id},r.a.createElement("h1",null,e.name),r.a.createElement("p",null,e.email))})))}}]),t}(n.Component));var te=function(){return r.a.createElement("div",{className:"Hoc"},r.a.createElement(ee,null),r.a.createElement($,{name:"Qwerty",email:"qwerty@gmail.com",dataSource:"https://jsonplaceholder.typicode.com/posts"}))};var ae=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement("br",null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:m}),r.a.createElement(u.a,{path:"/Icons",component:T}),r.a.createElement(u.a,{path:"/Toastify",component:P}),r.a.createElement(u.a,{path:"/Modals",component:x}),r.a.createElement(u.a,{path:"/ToolTip",component:w}),r.a.createElement(u.a,{path:"/CountUp",component:U}),r.a.createElement(u.a,{path:"/IdleTimer",component:H}),r.a.createElement(u.a,{path:"/ColorPicker",component:q}),r.a.createElement(u.a,{path:"/CreditCard",component:G}),r.a.createElement(u.a,{path:"/DatePickerd",component:J}),r.a.createElement(u.a,{path:"/AgeCal",component:X}),r.a.createElement(u.a,{path:"/MultipleRedux",component:Z}),r.a.createElement(u.a,{path:"/Hoc",component:te}),r.a.createElement(u.a,{path:"/:postId",component:V}))))},ne=(a(414),a(39)),re=a(169),le=a(26),ce={posts:[{id:1,title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",body:"quia et suscipit\u21b5suscipit recusandae consequuntur \u2026strum rerum est autem sunt rem eveniet architecto"},{id:2,title:"qui est esse",body:"est rerum tempore vitae\u21b5sequi sint nihil reprehend\u2026aperiam non debitis possimus qui neque nisi nulla"},{id:3,title:"ea molestias quasi exercitationem repellat qui ipsa sit aut",body:"et iusto sed quo iure\u21b5voluptatem occaecati omnis e\u2026\u21b5molestiae porro eius odio et labore et velit aut"}]},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;if(console.log(t),"DELETE_POST"===t.type){var a=e.posts.filter((function(e){return t.id!==e.id}));return Object(le.a)({},e,{posts:a})}return e},ue={age:21,history:[]},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0,a=Object(le.a)({},e);switch(t.type){case"AGE_UP":return Object(le.a)({},e,{age:e.age+t.value,history:e.history.concat({id:Math.random(),age:e.age+t.value}),loading:!1});case"AGE_DOWN":return Object(le.a)({},e,{age:e.age-t.value,history:e.history.concat({id:Math.random(),age:e.age-t.value})});case"DEL_ITEM":return Object(le.a)({},e,{history:e.history.filter((function(e){return e.id!==t.key}))});case"LOADING":return Object(le.a)({},e,{loading:!0});default:return a}},se={a:1},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;return"UPDATE_A"===t.type?Object(le.a)({},e,{a:e.a+t.b}):e},pe={b:1},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;return"UPDATE_B"===t.type?Object(le.a)({},e,{b:e.b+t.a}):e},Ee=Object(ne.c)({rA:me,rB:de,reducerAge:ie,rootReducer:oe}),he=Object(ne.d)(Ee,Object(ne.a)(re.a));c.a.render(r.a.createElement(y.a,{store:he},r.a.createElement(ae,null)),document.getElementById("root"))},71:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},82:function(e,t,a){}},[[170,1,2]]]);
//# sourceMappingURL=main.eadacfeb.chunk.js.map