(window.webpackJsonp=window.webpackJsonp||[]).push([[12,13],{1418:function(e,t,a){e.exports={PersonalProfilePage:"PersonalProfilePage_PersonalProfilePage__1kx_7"}},1441:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a.n(n),l=(a(405),a(1418),a(853)),i=(a(592),a(407));t.default=function(){return r.a.createElement(l.default,{uid:i.a.user.uid})}},473:function(e,t,a){e.exports={primary:"#00F38D",secondary:"#009EFF"}},592:function(e,t,a){"use strict";var n=a(84),r=a.n(n),l=a(107),i=a(44),c=a(48),o=a(47),s=a(45),u=a(46),m=a(12),d=a.n(m),p=a(405),f=a(686),b=a.n(f),g=a(687),v=a.n(g),E=a(688),h=a.n(E),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this))).state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.image,a=e.avatar,n=e.colors,r=e.renderFab,l=e.title,i=e.height;return d.a.createElement("div",{className:h.a.PageBanner,style:{backgroundImage:"url(".concat(t,")"),height:i}},"\\",d.a.createElement("div",{className:h.a.PageBannerColorOverlay,style:{backgroundColor:n.secondary}}),d.a.createElement("div",{className:h.a.bannerContent},d.a.createElement("div",{className:h.a.title},d.a.createElement("h5",null,l||d.a.createElement("span",null,"\xa0"))),a?d.a.createElement("div",null,d.a.createElement("img",{className:h.a.avatar,src:a,alt:"Avatar",height:100,width:100})):null,r()))}}]),t}(m.Component),P=a(473),y=a.n(P),O=a(427),j=a(437),k=a(428),C=a.n(k),I=a(407),N=a(1455),B=a(465),w=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this))).componentDidMount=Object(l.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return setTimeout(function(){a.publicDataRef.on("value",a.handleData)},0),t=a.props.uid,e.next=4,Object(O.c)(t);case 4:n=e.sent,a.setState({profileImage:n});case 6:case"end":return e.stop()}},e)})),a.handleData=function(e){a.setState({data:e.val()})},a.openUrl=function(e){return function(){a.props.history.push(e)}},a.renderFab=function(){var e=a.props.uid,t=C()(I.a,"user.uid");return d.a.createElement(p.SpeedDial,{disabled:!1,direction:"up",onClick:function(){return console.log("test1")},style:{position:"absolute",right:20,bottom:-25}},d.a.createElement(p.Fab,{style:{backgroundColor:y.a.primary}},d.a.createElement(p.Icon,{icon:"md-more-vert",size:26,fixedWidth:!1,style:{verticalAlign:"middle"}})),e===t?d.a.createElement(p.SpeedDialItem,{onClick:a.openUrl(B.b)}," ",d.a.createElement(p.Icon,{icon:"md-edit"}),"  "):null,d.a.createElement(p.SpeedDialItem,{onClick:function(){return console.log("speed A")}}," ",d.a.createElement(p.Icon,{icon:"md-share"})," "),d.a.createElement(p.SpeedDialItem,{onClick:function(){return console.log("speed C")}}," ",d.a.createElement(p.Icon,{icon:"md-twitter"})," "),d.a.createElement(p.SpeedDialItem,{onClick:function(){return console.log("speed D")}}," ",d.a.createElement(p.Icon,{icon:"md-youtube"}),"  "))},a.state={data:null,profileImage:Object(O.b)()};var n=e.uid,c=e.firebase;return a.publicDataRef=c.database().ref("/users/".concat(n,"/public")),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){this.props.uid;var e=this.state,t=e.profileImage,a=e.data;return d.a.createElement("div",{className:b.a.UserProfile},d.a.createElement(_,{colors:y.a,image:v.a,avatar:t,title:C()(a,"displayName",""),height:300,renderFab:this.renderFab}),d.a.createElement(p.List,null,d.a.createElement(p.ListTitle,null,C()(a,"fName","")),d.a.createElement(p.ListItem,null,d.a.createElement("div",{className:"center"},d.a.createElement("span",{className:"list-item__title"},"Omschrijving"),d.a.createElement("span",{className:"list-item__subtitle"},C()(a,"description","")))),d.a.createElement(p.ListItem,null,d.a.createElement("div",{className:"center"},d.a.createElement("span",{className:"list-item__title"},"Ervaring"),d.a.createElement("span",{className:"list-item__subtitle"},C()(a,"experience",""))))))}}]),t}(m.Component);t.a=Object(N.a)(Object(j.b)(w))},685:function(e,t,a){e.exports={ProfilePage:"ProfilePage_ProfilePage__2XsRi"}},686:function(e,t,a){e.exports={UserProfile:"UserProfile_UserProfile__1CzjS"}},687:function(e,t,a){e.exports=a.p+"static/media/panoramic.9081f424.jpg"},688:function(e,t,a){e.exports={PageBanner:"PageBanner_PageBanner__2EMdy",zoomIn:"PageBanner_zoomIn__teZSt",bannerContent:"PageBanner_bannerContent__3WyZx",PageBannerColorOverlay:"PageBanner_PageBannerColorOverlay__3PyUC",title:"PageBanner_title__W3cWf",avatar:"PageBanner_avatar__2iV_M"}},853:function(e,t,a){"use strict";a.r(t);var n=a(44),r=a(48),l=a(47),i=a(45),c=a(46),o=a(12),s=a.n(o),u=a(405),m=a(685),d=a.n(m),p=a(592),f=(a(407),a(428)),b=a.n(f),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).renderToolbar=function(){return s.a.createElement(u.Toolbar,null,s.a.createElement("div",{className:"left"},s.a.createElement(u.ToolbarButton,{onClick:window.toggleOnsMenu},s.a.createElement(u.Icon,{icon:"md-menu"}))),s.a.createElement("div",{className:"center"},"Profiel"),s.a.createElement("div",{className:"right"}))},a.state={},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:d.a.ProfilePage},s.a.createElement(u.Page,{renderToolbar:this.renderToolbar},s.a.createElement(p.a,{uid:b()(this,"props.match.params.uid",this.props.uid)})))}}]),t}(o.Component);t.default=g}}]);
//# sourceMappingURL=12.a02741f8.chunk.js.map