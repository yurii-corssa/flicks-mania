"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(t,e,n){n.r(e);var r=n(439),a=n(791),c=n(689),i=n(390),o=n(184);e.default=function(){var t=(0,c.UO)().movieId,e=(0,a.useState)([]),n=(0,r.Z)(e,2),u=n[0],s=n[1];(0,a.useEffect)((function(){(0,i.I)("/movie/".concat(t,"/credits")).then((function(t){return s(t.cast)})).catch((function(t){return console.log(t)}))}),[t]);return u.map((function(t){var e=t.profile_path,n=t.name,r=t.character,a=t.id;return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):"",width:100,alt:"avatar"}),(0,o.jsx)("p",{children:n}),(0,o.jsxs)("p",{children:["Character: ",r]})]},a)}))}},390:function(t,e,n){n.d(e,{I:function(){return i}});var r=n(165),a=n(861),c=n(243),i=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={params:{},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzM1MGM0MTU3NGU3ZjU1MTk1MzAwZGY3MDI3NmU5YSIsInN1YiI6IjY0ZGNhZmUwYjc3ZDRiMTE0MDE5MDI4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.buWnv8_WQ7RAZysPNmdWAinzf7Gie3uZSaU1x0l5eDE"}},t.prev=1,t.next=4,c.Z.get("".concat("https://api.themoviedb.org/3").concat(e),n);case 4:return a=t.sent,i=a.data,t.abrupt("return",i);case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.ab52252b.chunk.js.map