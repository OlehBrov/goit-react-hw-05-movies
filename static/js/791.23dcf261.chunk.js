"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[791],{734:function(e,t,i){i.r(t),i.d(t,{default:function(){return h}});var a=i(439),s=i(861),n=i(757),r=i.n(n),o=i(243),c=i(317),l=function(){var e=(0,s.Z)(r().mark((function e(t){var i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c.$)),e.abrupt("return",i);case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),d=l,u=i(331),p=i(791),v=i(87),m=i(689),f=i(184),h=function(){var e,t,i=(0,p.useState)(""),s=(0,a.Z)(i,2),n=s[0],r=s[1],o=(0,p.useState)(""),c=(0,a.Z)(o,2),l=c[0],h=c[1],w=(0,p.useState)(""),Z=(0,a.Z)(w,2),x=Z[0],y=Z[1],j=(0,p.useState)(""),P=(0,a.Z)(j,2),g=P[0],N=P[1],C=(0,p.useState)(""),S=(0,a.Z)(C,2),_=S[0],b=S[1],k=(0,p.useState)([]),R=(0,a.Z)(k,2),A=R[0],O=R[1],T=(0,p.useState)(!1),U=(0,a.Z)(T,2),B=U[0],E=U[1],G=(0,m.TH)(),H=(0,p.useRef)(null!==(e=null===(t=G.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),I=(0,p.useState)(!1),L=(0,a.Z)(I,2),$=L[0],q=L[1],z=(0,p.useState)(!1),D=(0,a.Z)(z,2),F=D[0],J=D[1],K=(0,p.useState)(!1),M=(0,a.Z)(K,2),Q=M[0],V=M[1],W=(0,p.useState)(!1),X=(0,a.Z)(W,2),Y=X[0],ee=X[1],te=(0,m.s0)(),ie=(0,p.useRef)(G),ae=(0,m.UO)().id;d(ae).then((function(e){r(e.data.title),h(e.data.release_date.slice(0,4)),y(e.data.vote_average),N("https://image.tmdb.org/t/p/w500"+e.data.poster_path),b(e.data.overview),function(e){var t=e.reduce((function(e,t){return e.push(t.name),e}),[]);O(t.join(", "))}(e.data.genres),E(!0)})),(0,p.useEffect)((function(){var e=u.ZP.timeline();B&&e.from(".details-poster",{xPercent:-100,opacity:0,duration:.5,ease:"power.out"}).from(".details-movie-info",{xPercent:100,opacity:0,duration:1,ease:"power.out"},"<")}),[B]);return(0,f.jsxs)("div",{className:"container",children:[(0,f.jsx)(v.Link,{className:"back-btn",to:H.current,children:"Back"}),(0,f.jsxs)("div",{className:"details-wrap",children:[(0,f.jsx)("img",{className:"details-poster",src:g,alt:n}),(0,f.jsxs)("div",{className:"details-movie-info",children:[(0,f.jsxs)("h1",{className:"details-movie-name",children:[n,", (",l,")"]}),(0,f.jsxs)("p",{className:"details-movie-score",children:["User score: ",x]}),(0,f.jsx)("h2",{className:"details-movie-header",children:"Overview"}),(0,f.jsx)("p",{className:"details-movie-overview",children:_}),(0,f.jsx)("h2",{className:"details-movie-header",children:"Genres"}),(0,f.jsx)("p",{className:"details-movie-genre",children:A})]})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{className:"details-movie-header",children:"Additional Information"}),(0,f.jsxs)("ul",{className:"additional-info-list",children:[(0,f.jsx)("li",{children:(0,f.jsx)("button",{className:"additional-info-btn",onClick:function(){return $?(Y&&u.ZP.to(".review-list-wrap",{yPercent:100,opacity:0,onComplete:function(){ee(!1),u.ZP.set(".review-list-wrap",{display:"none"}),te(ie),te("Cast"),q(!0),J(!0)}}),F?void u.ZP.to(".casting-list-wrap",{yPercent:100,opacity:0,onComplete:function(){J(!1),ee(!1),u.ZP.set(".casting-list-wrap",{display:"none"}),te(ie.current)}}):F?void 0:(te("Cast"),q(!0),ee(!1),u.ZP.set(".casting-list-wrap",{display:"flex"}),void u.ZP.to(".casting-list-wrap",{yPercent:0,opacity:1,onComplete:function(){return J(!0)}}))):(te("Cast"),q(!0),J(!0),void ee(!1))},children:"CAST"})}),(0,f.jsx)("li",{children:(0,f.jsx)("button",{className:"additional-info-btn",onClick:function(){return Q?(F&&u.ZP.to(".casting-list-wrap",{yPercent:100,opacity:0,onComplete:function(){J(!1),u.ZP.set(".casting-list-wrap",{display:"none"}),te(ie),te("Reviews"),V(!0),ee(!0)}}),Y?void u.ZP.to(".review-list-wrap",{yPercent:100,opacity:0,onComplete:function(){ee(!1),J(!1),u.ZP.set(".review-list-wrap",{display:"none"}),te(ie.current)}}):Y?void 0:(te("Reviews"),V(!0),J(!1),u.ZP.set(".review-list-wrap",{display:"flex"}),void u.ZP.to(".review-list-wrap",{yPercent:0,opacity:1,onComplete:function(){return ee(!0)}}))):(te("Reviews"),V(!0),ee(!0),void J(!1))},children:"Reviews"})})]}),(0,f.jsx)(m.j3,{})]})]})}}}]);
//# sourceMappingURL=791.23dcf261.chunk.js.map