(this.webpackJsonpmovieapp=this.webpackJsonpmovieapp||[]).push([[0],{20:function(e,t,a){e.exports=a(49)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(19),r=a.n(l),o=a(9),i=a(3),u=a(7),s=a.n(u),p=(a(42),function(e){var t=e.handleInput,a=e.search;return c.a.createElement("section",{className:"searchbox-wrap"},c.a.createElement("input",{type:"text",className:"searchbox",placeholder:"szukaj filmu...",onChange:t,onKeyPress:a}))});a(43);var m=function(e){var t=e.title,a=e.image,n=e.popularity,l=e.vote_count,r=e.openPopup,o=e.result;return c.a.createElement("div",{className:"result",onClick:function(){return r(o.id)}},c.a.createElement("section",{className:"poster"},c.a.createElement("img",{classNme:"img",src:"https://image.tmdb.org/t/p/w300/".concat(a),alt:"ten film nie posiada plakatu"}),c.a.createElement("h3",null,t)),c.a.createElement("section",{className:"info"},c.a.createElement("p",null,"popularno\u015b\u0107: ",Math.round(n)," %"),c.a.createElement("p",null,"liczba g\u0142os\xf3w: ",l)))};a(44);var E=function(e){var t=e.results,a=e.openPopup;return c.a.createElement("section",{className:"results"},t.map((function(e){return c.a.createElement(m,{title:e.title,key:e.id,image:e.poster_path,popularity:e.popularity,vote_count:e.vote_count,result:e,openPopup:a})})))};a(45);var f=function(e){var t=e.selected,a=e.closePopup,n=t.production_countries.map((function(e){return e.name})),l=t.genres.map((function(e){return e.name}));return c.a.createElement("section",{className:"popup"},c.a.createElement("div",{className:"content"},c.a.createElement("section",{className:"name"},c.a.createElement("h1",null,t.title),c.a.createElement("p",null,"Kraj produkcji:"),c.a.createElement("span",{className:"info"},n),c.a.createElement("p",null,"Rodzaj:"),c.a.createElement("span",{className:"info"},l.join(" "))),c.a.createElement("div",{className:"plot"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200/".concat(t.poster_path),alt:"poster"}),c.a.createElement("p",null,t.overview),c.a.createElement("br",null)),c.a.createElement("a",{href:"https://www.imdb.com/title/".concat(t.imdb_id,"/"),target:"blank"},"Zobacz na IMDB"),c.a.createElement("button",{className:"close",onClick:a},"Zamknij")))},v=a(51);a(46);var h=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([]),u=Object(i.a)(r,2),m=u[0],h=u[1],d=Object(n.useState)(null),b=Object(i.a)(d,2),g=b[0],j=b[1],y=Object(n.useState)(1),k=Object(i.a)(y,2),N=k[0],w=k[1],O=Object(n.useState)(1),_=Object(i.a)(O,2),P=_[0],S=_[1],z="".concat("59b3036760639d53bfc449c761da9443");return c.a.createElement("div",{className:"App"},c.a.createElement("header",null,c.a.createElement("h1",null,"Szukajka film\xf3w z ",c.a.createElement("span",null,"IMDb"))),c.a.createElement("main",null,m.length>0&&c.a.createElement("section",{className:"sort"},c.a.createElement("span",null,"Sortuj wg: "),c.a.createElement("br",null),c.a.createElement(v.a,{className:"popularity",variant:"out-line-primary",onClick:function(){if(m&&m.length>0)if(P){var e=m.reverse();h(e),S({sort:-1})}else{var t=m.sort((function(e,t){return e.popularity<t.popularity?-1:e.popularity>t.popularity?1:0}));h(t),S(P)}}},"Popularno\u015b\u0107"),c.a.createElement(v.a,{className:"title",variant:"out-line-promary",onClick:function(){if(m&&m.length>0)if(P){var e=m.reverse();h(e),S({sort:-1})}else{var t=m.sort((function(e,t){return e.title<t.title?-1:e.title>t.title?1:0}));h(t),S(P)}}},"Tytu\u0142")),c.a.createElement(p,{handleInput:function(e){var t=e.target.value;l(t)},search:function(e){"Enter"===e.key&&s()("https://api.themoviedb.org/3/search/movie?api_key=".concat(z,"&query=").concat(a)).then((function(e){var t=e.data;h(t.results)}))}}),c.a.createElement(E,{results:m,openPopup:function(e){s()("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(z,"&language=pl")).then((function(e){var t=e.data;j(t)}))}}),g&&c.a.createElement(f,{selected:g,closePopup:function(){j(null)}}),m.length>0&&c.a.createElement("button",{className:"next",onClick:function(){var e=N+1;s()("https://api.themoviedb.org/3/search/movie?api_key=".concat(z,"&query=").concat(a,"&page=").concat(e)).then((function(t){var a=t.data,n=[].concat(Object(o.a)(m),Object(o.a)(a.results));h(n),w(e)}))}},"Poka\u017c wi\u0119cej")))};a(47),a(48);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.94abaab1.chunk.js.map