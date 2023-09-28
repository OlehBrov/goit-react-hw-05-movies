"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[588],{588:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var i=s(439),r=s(317),a=s(791),n=s(331),c=s(689),o=s(566),l=s(184),d=function(e){var t=e.movies,s=(0,c.TH)();return(0,a.useLayoutEffect)((function(){if(t){n.ZP.set(".poster-descr",{yPercent:100,opacity:0});var e=n.ZP.utils.toArray(".movie-gallery-item");n.ZP.from(e,{yPercent:-100,opacity:0,scale:.7,stagger:{amount:2,grid:"auto",ease:"power2.inOut"}}),e.forEach((function(e){var t=e.children[0].children[0].children[1];e.addEventListener("mouseenter",(function(){return n.ZP.to(t,{yPercent:0,opacity:1})})),e.addEventListener("mouseleave",(function(){return n.ZP.to(t,{yPercent:100,opacity:0})}))}))}})),(0,l.jsxs)("div",{className:"container home-section",children:[(0,l.jsx)("h1",{className:"home-section-header",children:"Today trending movies"}),(0,l.jsx)("div",{className:"movie-gallery-list",children:t.map((function(e){return(0,l.jsx)(o.Z,{movie:e,location:{from:s}},e.id)}))})]})},u="idle",m="pending",h="rejected",v="resolved",p=function(){var e=(0,a.useState)(),t=(0,i.Z)(e,2),s=t[0],n=t[1],c=(0,a.useState)(u),o=(0,i.Z)(c,2),p=o[0],f=o[1],x=(0,a.useState)(""),g=(0,i.Z)(x,2),j=g[0],N=g[1];return(0,a.useEffect)((function(){f(m),(0,r.Z)().then((function(e){console.log("data",e),n(e.data.results),f(v)})).catch((function(e){f(h),N(e)}))}),[]),p===u?(0,l.jsx)("h1",{children:"LOADING TRENDING MOVIES"}):p===v?(0,l.jsx)(d,{movies:s}):p===h?(0,l.jsxs)("h1",{children:["There is error: ",j.message]}):void 0}},566:function(e,t,s){s.d(t,{Z:function(){return n}});var i=s(689),r=s(87),a=s(184),n=function(e){var t=e.movie,s=(0,i.TH)();return(0,a.jsx)("div",{className:"movie-gallery-item",children:(0,a.jsxs)(r.Link,{className:"movie-card-link",to:"/movieDetails/".concat(t.id),state:{from:s},children:[(0,a.jsxs)("div",{className:"poster-wrap",children:[(0,a.jsx)("img",{className:"poster",src:null!==t.poster_path?"https://image.tmdb.org/t/p/w342".concat(t.poster_path):"https://placehold.co/400x600?text=No%20image",alt:""}),(0,a.jsxs)("div",{className:"poster-descr",children:[(0,a.jsx)("h4",{className:"text-2xl",children:"Movie overview"})," ",(0,a.jsx)("span",{className:"block"}),(0,a.jsxs)("p",{className:"pt-2 line-clamp-6",children:[t.overview," "]})," "]})]})," ",(0,a.jsxs)("p",{className:"movie-link-title",children:[t.title,""!==t.release_date&&", "+t.release_date.substring(0,4)]})]})},t.id)}}}]);
//# sourceMappingURL=588.073ab230.chunk.js.map