(this["webpackJsonplearn-react"]=this["webpackJsonplearn-react"]||[]).push([[0],{22:function(e,t,n){e.exports=n(36)},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(19),l=n.n(s),c=(n(27),n(7)),i=n(8),o=n(10),u=n(9),m=n(11),h=n(5),p=(n(28),n(12)),d=function(e){var t=e.series;return r.a.createElement("li",null,r.a.createElement(p.b,{to:"/series/".concat(t.show.id)},t.show.name))},g=function(e){return r.a.createElement("div",null,"Web-Series Names:",r.a.createElement("ul",null,e.list.map((function(e){return r.a.createElement("li",{key:e.show.id,className:"listNames"},r.a.createElement(d,{series:e,key:e.show.id}))}))))},f=function(e){return r.a.createElement("p",null,e.message," ",e.flag)},E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={series:[],employeeId:"",isFetching:!1},n.onSeriesIdInputChanges=function(e){console.log("entered..."+e.target.value),n.setState({employeeId:e.target.value,isFetching:!0}),""!==e.target.value?(console.log("http://api.tvmaze.com/search/shows?q=".concat(e.target.value)),fetch("http://api.tvmaze.com/search/shows?q=".concat(e.target.value)).then((function(e){return e.json()})).then((function(e){return n.setState({series:e,isFetching:!1})}))):n.setState({isFetching:!1,series:[]})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.series,n=e.employeeId,a=e.isFetching;return r.a.createElement("div",null,r.a.createElement("p",null,"Learning ReactJS..."),r.a.createElement(f,{message:"Here you can find interesting web-series details..."}),r.a.createElement("div",null,r.a.createElement("input",{value:n,type:"text",onChange:this.onSeriesIdInputChanges})),!a&&""===n.trim()&&r.a.createElement("p",null,"No web-series has been found"),a&&r.a.createElement("p",null,"Loading...."),!a&&0!==t.length&&r.a.createElement(g,{list:this.state.series}))}}]),t}(a.Component),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={singleSeriesJson:null},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;console.log("http://api.tvmaze.com/shows/".concat(t).concat("?embed=episodes")),fetch("http://api.tvmaze.com/shows/".concat(t,"?embed=episodes")).then((function(e){return e.json()})).then((function(t){return e.setState({singleSeriesJson:t})})),console.log(this.state.singleSeriesJson)}},{key:"render",value:function(){var e=this.state.singleSeriesJson;return r.a.createElement("div",null,r.a.createElement("a",{href:"/"},"search more"),null!==e&&r.a.createElement("div",null,r.a.createElement("h1",null,e.name),r.a.createElement("p",null,"Premiered : ",e.premiered),r.a.createElement("p",null,"Ratings : ",e.rating.average),r.a.createElement("p",null,"Episodes : ",e._embedded.episodes.length),r.a.createElement("p",null,r.a.createElement("img",{alt:"shosingleSeriesJsonw",src:e.image.medium}))))}}]),t}(a.Component),b=function(e){return r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:E}),r.a.createElement(h.a,{path:"/series/:id",component:v}))},w=(n(34),n(35),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"ReactJS Application for searching Web-Series details.."),r.a.createElement(b,null)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(p.a,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.4e95ff09.chunk.js.map