(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1386:function(e,t,r){e.exports={RoutesOffersOverview:"RoutesOffersOverview_RoutesOffersOverview__352s4"}},1437:function(e,t,r){"use strict";r.r(t);var n=r(84),a=r.n(n),o=r(107),s=r(44),c=r(48),i=r(47),u=r(45),l=r(46),f=r(12),p=r.n(f),v=(r(1386),r(530)),w=r(405),d=r(455),h=r(573),m=r(437),b=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(i.a)(this,Object(u.a)(t).call(this))).getRouteOrdersInArea=function(){var e=Object(o.a)(a.a.mark(function e(t){var n,o,s,c,i,u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=v.a(t.center,t.radius),o=new r.props.firebase.firestore.GeoPoint(n.swCorner.latitude,n.swCorner.longitude),s=new r.props.firebase.firestore.GeoPoint(n.neCorner.latitude,n.neCorner.longitude),c=r.props.firebase.firestore().collection("routeorders").where("start_location",">",o).where("start_location","<",s).orderBy("timestamp"),e.prev=4,e.next=7,c.get();case 7:return i=e.sent,u=[],i.forEach(function(e){var r=e.data();r.distanceFromCenter=v.b(t.center,r.location),u.push(r)}),e.abrupt("return",u);case 13:throw e.prev=13,e.t0=e.catch(4),console.error(e.t0),new Error("Error while retrieving events");case 17:case 18:case"end":return e.stop()}},e,null,[[4,13]])}));return function(t){return e.apply(this,arguments)}}(),r.componentWillMount=Object(o.a)(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getRouteOrders();case 2:t=e.sent,r.setState({routesList:t});case 4:case"end":return e.stop()}},e)})),r.getRouteOrders=Object(o.a)(a.a.mark(function e(){var t,n,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props.firebase.firestore().collection("routeorders").orderBy("timestamp"),e.prev=1,e.next=4,t.get();case 4:return n=e.sent,o=[],n.forEach(function(e){var t=e.data();t.objectID=e.id,o.push(t)}),e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(1),console.error(e.t0),new Error("Error while retrieving events");case 14:case 15:case"end":return e.stop()}},e,null,[[1,10]])})),r.state={},r}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return p.a.createElement(w.Page,{className:"RoutesOffersOverview",renderToolbar:function(){return p.a.createElement(d.a,{name:"Route lijst"})}},p.a.createElement("h5",{style:{margin:10}},"Laatste routes"),p.a.createElement(w.Card,{style:{padding:0}},p.a.createElement(w.List,null,p.a.createElement(h.a,{routesList:this.state.routesList||[]}))))}}]),t}(f.Component);t.default=Object(m.b)(b)}}]);
//# sourceMappingURL=25.857d3231.chunk.js.map