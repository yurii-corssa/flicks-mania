"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,t,n){n.r(t);var r=n(439),c=n(791),a=n(689),i=n(390),o=n(184);t.default=function(){var e=(0,a.UO)().movieId,t=(0,c.useState)([]),n=(0,r.Z)(t,2),u=n[0],s=n[1];return(0,c.useEffect)((function(){(0,i.I)("/movie/".concat(e,"/reviews")).then((function(e){return s(e.results)})).catch((function(e){return console.log(e)}))}),[e]),u.length?u.map((function(e){var t=e.author,n=e.content,r=e.id;return(0,o.jsxs)("li",{children:[(0,o.jsx)("p",{children:t}),(0,o.jsx)("p",{children:n})]},r)})):(0,o.jsx)("p",{children:"We don't have any reviews for this movie"})}},390:function(e,t,n){n.d(t,{I:function(){return i}});var r=n(165),c=n(861),a=n(243),i=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(t){var n,c,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzM1MGM0MTU3NGU3ZjU1MTk1MzAwZGY3MDI3NmU5YSIsInN1YiI6IjY0ZGNhZmUwYjc3ZDRiMTE0MDE5MDI4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.buWnv8_WQ7RAZysPNmdWAinzf7Gie3uZSaU1x0l5eDE"}},e.prev=1,e.next=4,a.Z.get("".concat("https://api.themoviedb.org/3").concat(t),n);case 4:return c=e.sent,i=c.data,e.abrupt("return",i);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.0a001d78.chunk.js.map