(this["webpackJsonpemail-app"]=this["webpackJsonpemail-app"]||[]).push([[0],{47:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(39),i=n.n(s),o=(n(46),n(17)),r=n(3),l=n(11),m=n(12),d=n(14),j=n(13),p=n(23),b=(n(47),n(20)),h=n.n(b),u=n(6),x=n(7),f=n(21),O=n.n(f),v=n(0),N=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).appearance={theme:"dark",panels:{tools:{dock:"left"}}},e.state={htmlData:null},e.onClickSave=function(){var t=e.props.match.params.id;e.editor.exportHtml((function(n){var a=n.design,c=n.html,s={templateId:t,templateJson:JSON.stringify(a)};console.log(a),h.a.post("/template",s),e.setState({htmlData:c})})),alert("saved data and html")},e.onClickHome=function(){e.props.history.replace("/")},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{className:"nt-container",children:[Object(v.jsx)(p.a,{ref:function(t){return e.editor=t},minHeight:"85vh",appearance:this.appearance}),Object(v.jsx)("div",{className:"save-section-container d-flex justify-content-center",children:Object(v.jsxs)("div",{className:"w-85 d-flex align-items-center",children:[Object(v.jsxs)("div",{className:"mx-2 d-flex flex-grow-1",children:[Object(v.jsx)("input",{type:"text",className:"form-control w-50 mr-2",placeholder:"type your message"}),Object(v.jsx)("button",{className:"btn btn-secondary save-btn mx-3",onClick:this.onClickSave,children:"Save"}),Object(v.jsx)("button",{className:"btn home-btn",onClick:this.onClickHome,children:Object(v.jsx)(u.a,{icon:x.e})}),Object(v.jsx)(O.a,{tagName:"button",label:Object(v.jsx)(u.a,{icon:x.b}),filename:"myTemplate.html",exportFile:function(){return e.state.htmlData},className:"btn download-btn",style:{color:"#ffffff"}})]}),Object(v.jsx)("div",{className:"ml-auto",children:Object(v.jsx)("a",{className:"link",href:"https://unlayer.com/?utm_medium=web-editor&utm_campaign=editor-referral",children:"by Unlayer..."})})]})})]})}}]),n}(a.Component),y=n(16),g=n.n(y),w=n(22),k=(n(71),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).appearance={theme:"dark",panels:{tools:{dock:"left"}}},e.state={htmlData:null},e.onClickSave=function(){var t=e.props.match.params.id;e.editor.exportHtml((function(n){var a=n.design,c=n.html,s={templateJson:JSON.stringify(a)};console.log(a),h.a.put("/template/".concat(t),s),console.log(s),e.setState({htmlData:c})})),alert("saved data and html")},e.getJsonTemplate=Object(w.a)(g.a.mark((function t(){var n,a,c,s,i,o;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.match,a=n.params.id,c="/template/".concat(a),t.next=5,fetch(c);case 5:return s=t.sent,t.next=8,s.json();case 8:i=t.sent,o=i[0],e.editor.loadDesign(JSON.parse(o.templateJson)),console.log(o);case 12:case"end":return t.stop()}}),t)}))),e.onClickHome=function(){e.props.history.push("/")},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{className:"et-container",children:[Object(v.jsx)(p.a,{ref:function(t){return e.editor=t},minHeight:"85vh",onLoad:this.getJsonTemplate,appearance:this.appearance}),Object(v.jsx)("div",{className:"save-section-container d-flex justify-content-center",children:Object(v.jsxs)("div",{className:"w-85 d-flex align-items-center",children:[Object(v.jsxs)("div",{className:"mx-2 d-flex flex-grow-1",children:[Object(v.jsx)("input",{type:"text",className:"form-control w-50 mr-2",placeholder:"type your message"}),Object(v.jsx)("button",{className:"btn btn-secondary save-btn mx-3",onClick:this.onClickSave,children:"Save"}),Object(v.jsx)("button",{className:"btn home-btn",onClick:this.onClickHome,children:Object(v.jsx)(u.a,{icon:x.e})}),Object(v.jsx)(O.a,{tagName:"button",label:Object(v.jsx)(u.a,{icon:x.b}),filename:"myTemplate.html",exportFile:function(){return e.state.htmlData},className:"btn download-btn",style:{color:"#ffffff"}})]}),Object(v.jsx)("div",{className:"ml-auto",children:Object(v.jsx)("a",{className:"link",href:"https://unlayer.com/?utm_medium=web-editor&utm_campaign=editor-referral",children:"by Unlayer..."})})]})})]})}}]),n}(a.Component)),C=(n(72),function(){return Object(v.jsx)("div",{className:"not-found-container",children:Object(v.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png",alt:"not found",className:"not-found-img"})})}),T=(n(73),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={myTemplates:[]},e.getTemplatesFromDb=Object(w.a)(g.a.mark((function t(){var n,a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/templates");case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,e.setState({myTemplates:a});case 7:case"end":return t.stop()}}),t)}))),e.addNewTemplate=function(){var t=e.state.myTemplates.length+1;e.props.history.push("/template/".concat(t)),console.log("redirected")},e.renderTemplate=function(e){var t=Math.floor(5*Math.random()+1);return Object(v.jsx)("div",{className:"template-card shadow-sm card-".concat(t),children:Object(v.jsxs)("div",{className:"template-details",children:[Object(v.jsxs)("h1",{className:"template-title",children:["Template-",e]}),Object(v.jsx)(o.b,{to:"/edit-template/".concat(e),children:Object(v.jsx)("button",{className:"btn edit-btn",children:Object(v.jsx)(u.a,{icon:x.c})})})]})},e)},e.renderSideBar=function(){return Object(v.jsxs)("div",{className:"side-bar",children:[Object(v.jsx)("h1",{className:"side-bar-title mb-3",children:"Email Editor"}),Object(v.jsx)("div",{className:"options-container",children:Object(v.jsxs)("div",{className:"options-section",children:[Object(v.jsxs)("div",{className:"option-container active-option",children:[Object(v.jsx)(u.a,{icon:x.d,className:"option-icon"}),Object(v.jsx)("p",{className:"option-text",children:"Home"})]}),Object(v.jsxs)("div",{className:"option-container",children:[Object(v.jsx)(u.a,{icon:x.b,className:"option-icon"}),Object(v.jsx)("h1",{className:"option-text",children:"Downloads"})]}),Object(v.jsxs)("div",{className:"option-container",children:[Object(v.jsx)(u.a,{icon:x.g,className:"option-icon"}),Object(v.jsx)("p",{className:"option-text",children:"Favorites"})]}),Object(v.jsxs)("div",{className:"option-container",children:[Object(v.jsx)(u.a,{icon:x.a,className:"option-icon"}),Object(v.jsx)("p",{className:"option-text",children:"Settings"})]})]})}),Object(v.jsxs)("div",{className:"info-container",children:[Object(v.jsxs)("div",{className:"info-details",children:[Object(v.jsx)(u.a,{icon:x.f,className:"info-icon"}),Object(v.jsx)("p",{className:"about-text",children:"About"})]}),Object(v.jsx)("hr",{className:"info-hr"}),Object(v.jsx)("p",{className:"info",children:"A user-friendly Email Editor. Just drag-n-drop and you get beautiful styles in minutes."})]}),Object(v.jsxs)("div",{className:"profile-container",children:[Object(v.jsx)("img",{src:"https://res.cloudinary.com/dl3nzdely/image/upload/v1622794226/avatar_f5onvo.png",className:"profile-image",alt:"profile"}),Object(v.jsx)("p",{className:"profile-name",children:"Hello there!"})]})]})},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getTemplatesFromDb()}},{key:"render",value:function(){var e=this,t=this.state.myTemplates;return Object(v.jsxs)("div",{className:"bg-container",children:[this.renderSideBar(),Object(v.jsxs)("div",{className:"content",children:[Object(v.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(v.jsx)("h1",{className:"section-title",children:"Templates"}),Object(v.jsx)("button",{className:"btn-primary new-btn",onClick:this.addNewTemplate,children:"New Template"})]}),Object(v.jsx)("hr",{className:"hr-line"}),Object(v.jsx)("div",{className:"templates-container",children:t.map((function(t){return e.renderTemplate(t)}))})]})]})}}]),n}(a.Component)),S=n(41),D=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={windowWidth:window.innerWidth},e.onResize=function(t){e.setState({windowWidth:window.innerWidth})},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.addEventListener("resize",this.onResize)}},{key:"render",value:function(){return this.state.windowWidth<=1100?Object(v.jsx)(r.a,{to:"/size-error"}):Object(v.jsx)(r.b,Object(S.a)({},this.props))}}]),n}(a.Component),J=(n(76),function(e){return Object(v.jsxs)("div",{className:"laptop-container",children:[Object(v.jsx)("h1",{className:"laptop-heading",children:"This App can be viewed only on Desktop"}),Object(v.jsx)("img",{src:"https://cdn.dribbble.com/users/788099/screenshots/10905791/media/a68e61df6a99b1813cf5010c79d51eee.png",alt:"laptop",className:"laptop-img"}),Object(v.jsxs)("div",{className:"d-flex justify-content-center align-items-center w-25",children:[Object(v.jsx)("p",{className:"mr-3 p-2 mt-2 text-secondary",children:"On a Desktop?"}),Object(v.jsx)("button",{onClick:function(){e.history.replace("/")},className:"btn btn-warning btn-sm ml-3",children:"Click here"})]})]})}),H=function(){return Object(v.jsx)(o.a,{children:Object(v.jsxs)(r.d,{children:[Object(v.jsx)(D,{exact:!0,path:"/",component:T}),Object(v.jsx)(D,{exact:!0,path:"/template/:id",component:N}),Object(v.jsx)(D,{exact:!0,path:"/edit-template/:id",component:k}),Object(v.jsx)(r.b,{exact:!0,path:"/size-error",component:J}),Object(v.jsx)(r.b,{component:C})]})})};i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(H,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.2b13b18b.chunk.js.map