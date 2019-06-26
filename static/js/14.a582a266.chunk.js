(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1406:function(e,t,a){e.exports={AccountPage:"AccountPage_AccountPage__1mzOH"}},1407:function(e,t,a){e.exports={AccountEdit:"AccountEdit_AccountEdit__3pL6s",list:"AccountEdit_list__bVZPD"}},1408:function(e,t,a){e.exports={ExternalLink:"ExternalLink_ExternalLink__1c3Tx"}},1417:function(e,t,a){e.exports={DateInputs:"DateInputs_DateInputs__2viC0",warning:"DateInputs_warning__2Bojl"}},1451:function(e,t,a){"use strict";a.r(t);var n=a(44),r=a(48),l=a(47),s=a(45),c=a(46),i=a(12),o=a.n(i),m=a(405),u=a(1406),p=a.n(u),g=a(429),h=a(84),d=a.n(h),v=a(107),f=a(1407),b=a.n(f),E=a(437),_=a(407),N=a(428),y=a.n(N),j=a(1408),O=a.n(j),I=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this))).state={},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return o.a.createElement("a",Object.assign({target:"_blank",rel:"nofollow noopener noreferrer",className:O.a.ExternalLink},this.props),this.props.children)}}]),t}(i.Component),k=(a(1425),a(1416),a(1417)),w=a.n(k),x=a(531),L=a.n(x);var C=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this))).change=function(e){return function(t){var n,r,l=Object.assign({},a.state.value,Object(g.a)({},e,t.target.value.trim())),s={day:!1,month:!1,year:!1};l.month&&"0"!==l.month?l.month=Math.min(12,Math.max(1,+l.month)):s.month=!0,l.year&&l.year>1860?l.year=Math.min((new Date).getFullYear(),l.year):s.year=!0,l.day?l.day=Math.min((n=l.month,r=l.year,new Date(r,n,0).getDate()),Math.max(1,l.day)):s.day=!0,a.setState({value:l,warning:s}),a.props.onChange(new Date(l.year,l.month-1,l.day))}};var r=e.value;return a.state={value:{day:r.getDate(),month:r.getMonth()+1,year:r.getFullYear()},warning:{day:!1,month:!1,year:!1}},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=y()(this,"state.value.day",1),t=y()(this,"state.value.month",1),a=y()(this,"state.value.year",1860);return o.a.createElement("div",{className:w.a.DateInputs},o.a.createElement(m.Input,{className:L()(Object(g.a)({},w.a.warning,this.state.warning.day)),onChange:this.change("day"),type:"number",name:"day",value:""+e}),o.a.createElement(m.Input,{className:L()(Object(g.a)({},w.a.warning,this.state.warning.month)),onChange:this.change("month"),type:"number",name:"month",value:""+t}),o.a.createElement(m.Input,{className:L()(Object(g.a)({},w.a.warning,this.state.warning.year)),onChange:this.change("year"),type:"number",name:"year",value:""+a}))}}]),t}(i.Component),P=(a(439),a(446)),D=a(427),U=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this))).handlePublicUserRefChange=function(e){a.setState({publicData:e.val()||{}})},a.handlePrivateUserRefChange=function(e){a.setState({privateData:e.val()||{}})},a.handleProfilePictureChange=function(){var e=Object(v.a)(d.a.mark(function e(t){var n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=t.target.files[0]){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,Object(D.d)(_.a.user.uid,n,function(e){a.props.onLoadingProgress({value:e})});case 6:r=e.sent,a.setState({profileImage:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),P.notification.alert("Er ging iets verkeerd met uploaden. Probeer een ander bestand of probeer het later nog een keer.");case 13:a.props.onLoadingProgress({});case 14:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}(),a.componentDidMount=Object(v.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return setTimeout(function(){a.publicUserRef.on("value",a.handlePublicUserRefChange),a.privateUserRef.on("value",a.handlePrivateUserRefChange)},0),e.next=3,Object(D.c)(_.a.user.uid);case 3:t=e.sent,a.setState({profileImage:t,loading:!1}),a.props.onLoadingProgress({});case 6:case"end":return e.stop()}},e)})),a.changeInfo=function(e,t,n){a.props.onLoadingProgress({indeterminate:!0}),a.setState(function(a){var r=a.publicData,l=a.privateData;return Object.assign(e?r:l,Object(g.a)({},t,n)),a}),a.props.onLoadingProgress({})},a.updateFirebase=Object(v.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.publicUserRef.set(a.state.publicData);case 2:return e.next=4,a.privateUserRef.set(a.state.privateData);case 4:P.notification.toast("Account informatie is verwerkt.",{timeout:4e3});case 5:case"end":return e.stop()}},e)})),a.state={profileImageProgress:null,profileImage:Object(D.b)(),loading:!0},a.publicUserRef=e.firebase.database().ref("/users/".concat(_.a.user.uid,"/public")),a.privateUserRef=e.firebase.database().ref("/users/".concat(_.a.user.uid,"/private")),e.onLoadingProgress({indeterminate:!0}),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e,t=this,a=this.state,n=a.publicData,r=a.privateData,l=a.loading;return void 0===n||void 0===r?null:o.a.createElement("div",{className:b.a.AccountEdit},o.a.createElement("form",null,o.a.createElement(m.List,{className:L()((e={},Object(g.a)(e,b.a.list,!0),Object(g.a)(e,b.a.loading,l),e))},o.a.createElement(m.ListTitle,null,"Account"),o.a.createElement(m.ListItem,null,o.a.createElement("div",{className:"center"},o.a.createElement("span",{className:"list-item__title"},"Aanhef"),o.a.createElement("span",{className:"list-item__subtitle"},"Openbaar")),o.a.createElement("div",{className:"right"},o.a.createElement(m.Select,{onChange:function(e){return t.changeInfo(!1,"gender",e.target.value)},value:y()(r,"gender")},o.a.createElement("option",{value:"m"},"Man"),o.a.createElement("option",{value:"f"},"Vrouw")))),o.a.createElement(m.ListItem,null,o.a.createElement("div",{className:"center"},o.a.createElement("span",{className:"list-item__title"},"Voornaam"),o.a.createElement("span",{className:"list-item__subtitle"},"Openbaar")),o.a.createElement("div",{className:"right"},o.a.createElement(m.Input,{type:"text",minLength:"2",onChange:function(e){return t.changeInfo(!0,"fName",e.target.value)},value:y()(n,"fName","")}))),o.a.createElement(m.ListItem,null,o.a.createElement("div",{className:"center"},o.a.createElement("span",{className:"list-item__title"},"Achternaam"),o.a.createElement("span",{className:"list-item__subtitle"},"Beschermd")),o.a.createElement("div",{className:"right"},o.a.createElement(m.Input,{type:"text",minLength:"1",onChange:function(e){return t.changeInfo(!1,"lName",e.target.value)},value:y()(r,"lName","")}))),o.a.createElement(m.ListItem,null,o.a.createElement("div",{className:"center"},o.a.createElement("span",{className:"list-item__title"},"Geboortedatum"),o.a.createElement("span",{className:"list-item__subtitle"},"Beschermd")),o.a.createElement("div",{className:"right"},o.a.createElement(C,{onChange:function(e){return t.changeInfo(!1,"birthDate",e.getTime())},value:new Date(y()(r,"birthDate",null))}))),o.a.createElement(m.ListItem,null,o.a.createElement("div",{className:"center"},o.a.createElement("span",{className:"list-item__title"},"Postcode"),o.a.createElement("span",{className:"list-item__subtitle"},"Beschermd")),o.a.createElement("div",{className:"right"},o.a.createElement(m.Input,{type:"text",onChange:function(e){return t.changeInfo(!1,"postalCode",e.target.value)},value:y()(r,"postalCode","")}))),o.a.createElement(m.ListItem,null,o.a.createElement("div",{className:"center"},o.a.createElement("span",{className:"list-item__title"},"Telefoonnummer"),o.a.createElement("span",{className:"list-item__subtitle"},"Beschermd")),o.a.createElement("div",{className:"right"},o.a.createElement(m.Input,{onChange:function(e){return t.changeInfo(!1,"tel",e.target.value)},value:y()(r,"tel",""),type:"text"}))),o.a.createElement(m.ListItem,null,o.a.createElement("div",{className:"left"},o.a.createElement("img",{className:"list-item__thumbnail",alt:"Profiel avatar",src:this.state.profileImage})),o.a.createElement("div",{className:"center"},o.a.createElement("span",{className:"list-item__title"},"Profielfoto"),o.a.createElement("span",{className:"list-item__subtitle"},"Openbaar")),o.a.createElement("div",{className:"right"},o.a.createElement("label",{htmlFor:"profile-pic"},o.a.createElement(m.Button,{modifier:"outline"},"Uploaden")),o.a.createElement(m.Input,{onChange:this.handleProfilePictureChange,inputId:"profile-pic",style:{display:"none"},type:"file",accept:"image/*"}))),o.a.createElement(m.ListItem,null,o.a.createElement("div",{className:"center"},o.a.createElement("span",{className:"list-item__title"},"Vertel iets over jezelf"),o.a.createElement("span",{className:"list-item__subtitle"},"Openbaar")),o.a.createElement("div",{className:"right"},o.a.createElement("textarea",{onChange:function(e){return t.changeInfo(!0,"description",e.target.value)},value:y()(n,"description",""),className:"textarea textarea--transparent",rows:"8",placeholder:"Gebruik dit veld om iets te vertellen over jezelf. Noem bijvoorbeeld je hobby's en waarom je gebruik maakt van deze website. Let op: bescherm je eigen privacy. Vermeld geen achternaam of contactgegevens."}))),o.a.createElement(m.ListItem,null,o.a.createElement("div",{className:"center"},o.a.createElement("span",{className:"list-item__title"},"Ervaring"),o.a.createElement("span",{className:"list-item__subtitle"},"Openbaar")),o.a.createElement("div",{className:"right"},o.a.createElement("textarea",{onChange:function(e){return t.changeInfo(!0,"experience",e.target.value)},value:y()(n,"experience",""),className:"textarea textarea--transparent",rows:"4",placeholder:"Heb je relevante (werk)ervaring die van belang kan zijn, vermeld deze dan hier."}))),o.a.createElement(m.ListItem,null,o.a.createElement("div",{className:"center"},o.a.createElement("span",{className:"list-item__title"},"Ik ben in het bezit van een ",o.a.createElement(I,{href:"https://www.justis.nl/producten/vog/"},"Verklaring Omtrent Gedrag")," en kan deze op verzoek laten zien."),o.a.createElement("span",{className:"list-item__subtitle"},"Openbaar")),o.a.createElement("div",{className:"right"},o.a.createElement(m.Switch,{onChange:function(e){return t.changeInfo(!0,"vog",e.target.checked)},checked:y()(n,"vog",!1)}))),o.a.createElement(m.ListTitle,null,"Gegevens Opslaan"),o.a.createElement(m.ListItem,null,o.a.createElement(m.Button,{onClick:this.updateFirebase,modifier:"large--cta"},"Opslaan")))))}}]),t}(i.Component),A=Object(E.b)(U),M=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this))).renderToolbar=function(){return o.a.createElement(m.Toolbar,null,o.a.createElement("div",{className:"left"},o.a.createElement(m.ToolbarButton,{onClick:window.toggleOnsMenu},o.a.createElement(m.Icon,{icon:"md-menu"}))),o.a.createElement("div",{className:"center"},"Mijn Account"),o.a.createElement("div",{className:"right"}))},a.handleLoadingProgress=function(e){a.setState({progress:e})},a.state={progress:{}},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.state.progress;return o.a.createElement(m.Page,{renderToolbar:this.renderToolbar},o.a.createElement(m.ProgressBar,e),o.a.createElement("div",{className:p.a.AccountPage},o.a.createElement(A,{onLoadingProgress:this.handleLoadingProgress})))}}]),t}(i.Component);t.default=M}}]);
//# sourceMappingURL=14.a582a266.chunk.js.map