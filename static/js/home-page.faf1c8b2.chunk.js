(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{39:function(e,t,i){e.exports={MovieList:"Movies_MovieList__1zVTD",MovieDetails:"Movies_MovieDetails__1Qp2v",MoviePageBlock:"Movies_MoviePageBlock__3-a_q",MoviePageImg:"Movies_MoviePageImg__20tDx",MoviePageImgBlock:"Movies_MoviePageImgBlock__3pjrM",MoviePageNoimg:"Movies_MoviePageNoimg__2kWAw",MoviePageMenu:"Movies_MoviePageMenu__1AxmP",MovieTitle:"Movies_MovieTitle__3f1H-",DetailsItem:"Movies_DetailsItem__2Iw9m",Details:"Movies_Details__17IpM"}},40:function(e,t,i){"use strict";i(0);var o=i(9),s=i(2),a=i(41),n=i.n(a),c=i(1);t.a=Object(s.f)((function(e){var t=e.movies,i=e.match,s=i.url.includes("movies")?"":"movies";return t.map((function(e){return Object(c.jsx)("li",{className:n.a.MovieItem,children:Object(c.jsxs)(o.b,{to:{pathname:"".concat(i.url).concat(s,"/").concat(e.id)},className:n.a.MovieListItem,children:[Object(c.jsx)("img",{className:n.a.MovieListImg,src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.original_title}),Object(c.jsx)("p",{className:n.a.MovieListTitle,children:e.title})]})},e.id)}))}))},41:function(e,t,i){e.exports={MovieItem:"MovieList_MovieItem__IFE0U",MovieListItem:"MovieList_MovieListItem__Uyyl2",MovieListTitle:"MovieList_MovieListTitle__2ujCw",MovieListImg:"MovieList_MovieListImg__o9Zrk"}},73:function(e,t,i){"use strict";i.r(t);var o=i(36),s=i.n(o),a=i(37),n=i(32),c=i(33),v=i(35),r=i(34),M=i(0),_=i(38),m=i.n(_),l=i(40),u=i(39),f=i.n(u),g=i(1),p=function(e){Object(v.a)(i,e);var t=Object(r.a)(i);function i(){var e;Object(n.a)(this,i);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={movies:[]},e}return Object(c.a)(i,[{key:"componentDidMount",value:function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"4f82ed1427d5ffdf5673256bc4f7ef74",e.next=3,m.a.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat("4f82ed1427d5ffdf5673256bc4f7ef74"));case 3:t=e.sent,this.setState({movies:t.data.results});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("ul",{className:f.a.MovieList,children:Object(g.jsx)(l.a,{movies:this.state.movies})})})}}]),i}(M.Component);t.default=p}}]);
//# sourceMappingURL=home-page.faf1c8b2.chunk.js.map