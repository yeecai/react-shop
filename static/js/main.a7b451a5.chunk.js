(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(t,e,n){t.exports=n(267)},112:function(t,e,n){},251:function(t,e,n){t.exports=n.p+"static/media/00.2285f4ee.jpg"},252:function(t,e,n){t.exports=n.p+"static/media/01.e4838948.jpg"},253:function(t,e,n){t.exports=n.p+"static/media/02.4d247813.jpg"},254:function(t,e,n){t.exports=n.p+"static/media/IMG_20190215_152601.6841decc.jpg"},255:function(t,e,n){t.exports=n.p+"static/media/00.1b0baa76.jpg"},256:function(t,e,n){t.exports=n.p+"static/media/01.719c7857.jpg"},257:function(t,e,n){t.exports=n.p+"static/media/02.86b98dff.jpg"},258:function(t,e,n){t.exports=n.p+"static/media/03.84180bb9.jpg"},259:function(t,e,n){t.exports=n.p+"static/media/00.4e34cd2c.jpg"},26:function(t){t.exports={store_name:"@Reaction",store_slug:"react-shop",productsinfo:[{name:"The first fake product",url:"p1",price:"$9999",description:"database is a question",photos:["00.jpg","01.jpg"]},{name:"The second product",url:"p2",price:"$9999",description:"database is a question",photos:["00.jpg","01.jpg","02.jpg"]},{name:"The third product",url:"p3",price:"$9999",description:"database is a question",photos:["00.jpg","01.jpg","02.jpg"]}]}},260:function(t,e,n){t.exports=n.p+"static/media/01.de51027b.jpg"},261:function(t,e,n){t.exports=n.p+"static/media/00.4dfcfc71.jpg"},262:function(t,e,n){t.exports=n.p+"static/media/01.5440a660.jpg"},263:function(t,e,n){t.exports=n.p+"static/media/02.2d99869d.jpg"},264:function(t,e,n){t.exports=n.p+"static/media/00.12762163.jpg"},265:function(t,e,n){t.exports=n.p+"static/media/01.8e7e68d1.jpg"},266:function(t,e,n){t.exports=n.p+"static/media/02.20dd21fb.jpg"},267:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(24),i=n.n(c),o=(n(112),n(7)),u=n(8),l=n(10),p=n(9),s=n(11),m=n(3),d=n(20),g=n(30),f=n(2),h=n(37),b=n.n(h),j=n(103),x=n.n(j),v=n(104),O=n.n(v),E=n(98),w=n.n(E),y=n(99),k=n.n(y),C=n(53),_=n.n(C),I=n(96),T=n.n(I),S=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(l.a)(this,Object(p.a)(e).call(this,t))).toggleMenu=function(t){n.setState({open:t})},n.state={open:!1},n}return Object(s.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this,e=this.props.config;return r.a.createElement("span",{style:{position:"absolute",right:"5%"}},r.a.createElement(T.a,{onClick:function(){return t.toggleMenu(!0)}}),r.a.createElement(w.a,{anchor:"right",open:this.state.open,onClick:function(){return t.toggleMenu(!1)}},r.a.createElement(k.a,{onClick:function(){return t.toggleMenu(!1)}},r.a.createElement(_.a,null,r.a.createElement(d.b,{to:"/".concat(e.store_slug)},"Home")),r.a.createElement(_.a,null,"Product"),r.a.createElement(_.a,null,r.a.createElement(d.b,{to:"/".concat(e.store_slug,"/cart")},"Cart")))))}}]),e}(a.Component);function q(){var t=Object(m.a)(["\n    background:white;\n    /*@media (max-width: 650px) {\n        background:  #347a6d;\n    }*/\n"]);return q=function(){return t},t}function A(){var t=Object(m.a)(["\n    color: black;\n    {/*@media (max-width: 650px) {\n    }*/}\n    text-decoration: 'none',\n"]);return A=function(){return t},t}function D(){var t=Object(m.a)(["\n    >a{\n        text-decoration: none;\n    }\n"]);return D=function(){return t},t}var M=f.a.div(D()),z=f.a.h3(A()),J=f.a.div(q()),N=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t,e=this.props.config,n=r.a.createElement(d.b,{to:"/".concat(e.store_slug,"/product"),style:{position:"absolute",right:"35%"}},"Shop"),a=r.a.createElement(d.b,{to:"/".concat(e.store_slug,"/cart"),style:{position:"absolute",right:"5%"}},"Cart");return t=Object(h.isWidthDown)("xs",this.props.width)?r.a.createElement(S,{config:e}):r.a.createElement(M,null,n,a),r.a.createElement("div",null,r.a.createElement(x.a,{color:"white"},r.a.createElement(J,null,r.a.createElement(O.a,null,r.a.createElement(d.b,{to:"/".concat(e.store_slug),style:{textDecoration:"none",position:"absolute",left:"5%"}},r.a.createElement(z,null,"@\u56cd")),t))))}}]),e}(r.a.Component),F=b()()(N),H=n(52),P=n.n(H);function $(){var t=Object(m.a)(["\n    padding:0;\n    width:100%;\n    height:100%;\n}\n"]);return $=function(){return t},t}var B=f.a.img($()),G=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.photos,a=t.url,c={padding:15,minHeight:100,color:"#fff"},i={background:"#FEA900"},o={background:"#B3DC4A"},u={background:"#6AC0FF"};return r.a.createElement("div",null,r.a.createElement("p",null,"I'm a mobile carousel"),r.a.createElement(P.a,null,r.a.createElement("div",{style:Object.assign({},c,i)},"slide n\xb01"),r.a.createElement("div",{style:Object.assign({},c,o)},"slide n\xb02"),r.a.createElement("div",{style:Object.assign({},c,u)},"slide n\xb03")),r.a.createElement(P.a,null,e.map(function(t,e){return r.a.createElement("div",null,r.a.createElement(B,{src:n(34)("./".concat(a,"/").concat(t))}))})))}}]),e}(a.Component);function U(){var t=Object(m.a)([""]);return U=function(){return t},t}function W(){var t=Object(m.a)(["\n    height:100%;\n    width:100%;\n"]);return W=function(){return t},t}function L(){var t=Object(m.a)(["\nwidth:10%;\nheight:10%;\n"]);return L=function(){return t},t}function R(){var t=Object(m.a)(["\n    padding:0;\n    width:10%;\n    height:10%;\n"]);return R=function(){return t},t}var K=f.a.img(R()),Q=f.a.div(L()),V=f.a.img(W()),X=(f.a.div(U()),function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).state={biggest:n.props.photos[0]},n.pickImage=function(t){n.setState({biggest:t}),console.log(t),console.log(n.state.biggest)},n}return Object(s.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this,e=this.props,a=e.photos,c=e.url;return r.a.createElement("together",null,r.a.createElement(Q,null,a.map(function(e){return r.a.createElement(V,{onClick:function(){return t.pickImage(e)},src:n(34)("./".concat(c,"/").concat(e))})})),r.a.createElement(K,{src:n(34)("./".concat(c,"/").concat(this.state.biggest))}))}}]),e}(a.Component));function Y(){var t=Object(m.a)(["\n  color: rgba(0, 0, 0, 0.87);\n  font-size: 16px;\n"]);return Y=function(){return t},t}var Z=f.a.div(Y()),tt=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(l.a)(this,Object(p.a)(e).call(this,t))).state={quantity:n.props.quantity},n}return Object(s.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this,e=this.props.me;return r.a.createElement("div",{style:{gridColumn:"span 2"}},r.a.createElement(d.b,{to:"#"},"I'm ",e.name),r.a.createElement(Z,null,e.description),r.a.createElement("button",{onClick:function(){return t.props.addToCart(t.state)}},"Add To Cart"))}}]),e}(a.Component),et=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).state={quantity:1},n.addToCart=function(t){var e=n.props,a=e.me,r=e.config,c="".concat(r.store_slug),i=JSON.parse(localStorage.getItem(c));i=Array.isArray(i)?i:[];var o={pic:a.photos[0],url:a.url,name:a.name,price:a.price,quantity:t.quantity};i.push(o),localStorage.setItem(c,JSON.stringify(i))},n}return Object(s.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t,e=this.props.me,a=e.photos;a.map(function(t,a){return r.a.createElement("li",null,r.a.createElement("img",{src:n(34)("./".concat(e.url,"/").concat(t))}))});return t=Object(h.isWidthDown)("xs",this.props.width)?r.a.createElement(G,{photos:a,url:e.url}):r.a.createElement(X,{photos:a,url:e.url}),r.a.createElement("div",null,t,r.a.createElement(tt,{me:e,addToCart:this.addToCart}))}}]),e}(a.Component),nt=b()()(et);function at(){var t=Object(m.a)(["\n    max-width: 1100px;\n    margin: 20px auto 50px;\n    > a {\n        text-decoration: none;\n    }\n"]);return at=function(){return t},t}function rt(){var t=Object(m.a)(["\n    padding:0;\n    width:100%;\n    height:100%;\n    @media (min-width: 650px) {\n      filter: grayscale(70%);\n      transition: filter .5s;\n      &:hover {\n        filter: grayscale(0.1);\n      }\n}\n"]);return rt=function(){return t},t}function ct(){var t=Object(m.a)(["\n    color:black\n    @media (max-width: 650px) {\n        font-size: 10px;\n    }\n"]);return ct=function(){return t},t}function it(){var t=Object(m.a)(["\n    font-size: 15px;\n    color:black\n    @media (max-width: 650px) {\n        font-size: 12px;\n    }\n"]);return it=function(){return t},t}function ot(){var t=Object(m.a)(["\n    margin: 40px;\n    display:grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-gap: 40px;\n\n    @media (max-width: 1024px)\n    {\n        grid-template-columns: repeat(2, 1fr);\n        grid-gap: 20px;\n    }\n    @media (max-width: 650px) {\n      grid-template-columns: repeat(1, 1fr);\n      grid-gap: 20px;\n    }\n\n"]);return ot=function(){return t},t}var ut=f.a.div(ot()),lt=f.a.div(it()),pt=f.a.div(ct()),st=f.a.img(rt()),mt=f.a.div(at()),dt=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props.config,e=t.productsinfo.map(function(e,a){return r.a.createElement(mt,null,r.a.createElement(d.b,{to:"/".concat(t.store_slug,"/product/").concat(e.url)},r.a.createElement(st,{src:n(34)("./".concat(e.url,"/").concat(e.photos[0]))}),r.a.createElement(lt,null,e.name),r.a.createElement(pt,null,e.price)))});return r.a.createElement(ut,null,e)}}]),e}(a.Component),gt=n(105);function ft(){var t=Object(m.a)(["\n    //padding:10px;\n    margin: 0 30px 0 30px;\n    @media (max-width: 650px) {\n        margin:0;\n    }\n\n"]);return ft=function(){return t},t}function ht(){var t=Object(m.a)(["\n    justify-content: center;\n    margin-left: 30px;\n    margin-bottom: 10px;\n    @media (max-width: 650px) {\n        margin-left: 10px;\n    }\n\n"]);return ht=function(){return t},t}function bt(){var t=Object(m.a)(["\n  display: flex;\n  align-items: center;\n"]);return bt=function(){return t},t}function jt(){var t=Object(m.a)(["\n    width:100%;\n    border-collapse: collapse;\n    thead > tr > th{\n        font-weight: normal;\n        text-align: left;\n        border-bottom: 1px solid grey;\n        padding:10px;\n    }\n\n    tbody > tr > td {\n        padding: 10px;\n        margin-left: px;\n        border-bottom: 1px solid #afb1a3;\n    }\n    padding:10px;\n"]);return jt=function(){return t},t}function xt(){var t=Object(m.a)(['\n    // background-image: url("https://www.insidescience.org/sites/default/files/sites/default/files/images/articles/top-images/2018/5_heic1808a_crop.jpg");\n     // This one works!!\n    // background:url("/static/media/00.4e34cd2c.jpg"); // This one works!!\n    // background-image: url(',')\n    // background:url("/home/lilian/react/react-shop/src/assets/p1/00.jpg");\n    // background-image: url("../../assets/p1/00.jpg");\n    // background-image: url(00.jpg);\n\n    // why those not working except https!!!\n    // never mind, url() never work for me - - !\n\n    padding:0;\n    width:125px;\n    height:125px;\n    object-fit: cover; // same square effect!\n    @media (max-width: 650px) {\n        width:65px;\n        height:80px;\n        object-fit: cover;\n    }\n}\n']);return xt=function(){return t},t}var vt=f.a.img(xt(),function(t){return t.img}),Ot=f.a.table(jt()),Et=f.a.div(bt()),wt=f.a.div(ht()),yt=f.a.div(ft()),kt=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement(yt,null,r.a.createElement("h1",null,"Cart"),r.a.createElement(Ot,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Product"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Total"),r.a.createElement("th",null))),r.a.createElement("tbody",null,this.props.items.map(function(e,a){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(Et,null,r.a.createElement(vt,{src:n(34)("./".concat(e.url,"/").concat(e.pic))}),r.a.createElement(wt,null,e.name))),r.a.createElement("td",null,"1"),r.a.createElement("td",null,e.price),r.a.createElement("td",null,r.a.createElement("span",{onClick:function(){return t.props.removeItem(a)}},"x")))}))))}}]),e}(a.Component);function Ct(){var t=Object(m.a)(["\n    //padding:10px;\n    margin: 0 30px 0 30px;\n    @media (max-width: 650px) {\n        margin:0;\n    }\n\n"]);return Ct=function(){return t},t}function _t(){var t=Object(m.a)(["\n    justify-content: center;\n    margin-left: 30px;\n    margin-bottom: 10px;\n    @media (max-width: 650px) {\n        margin-left: 10px;\n    }\n\n"]);return _t=function(){return t},t}function It(){var t=Object(m.a)(["\n  display: flex;\n  align-items: center;\n"]);return It=function(){return t},t}function Tt(){var t=Object(m.a)(["\n    width:100%;\n    border-collapse: collapse;\n    thead > tr > th{\n        font-weight: normal;\n        text-align: left;\n        border-bottom: 1px solid grey;\n        padding:10px;\n    }\n\n    tbody > tr > td {\n        padding: 10px;\n        margin-left: px;\n        border-bottom: 1px solid #afb1a3;\n    }\n    padding:10px;\n"]);return Tt=function(){return t},t}function St(){var t=Object(m.a)(['\n    // background-image: url("https://www.insidescience.org/sites/default/files/sites/default/files/images/articles/top-images/2018/5_heic1808a_crop.jpg");\n     // This one works!!\n    // background:url("/static/media/00.4e34cd2c.jpg"); // This one works!!\n    // background-image: url(',')\n    // background:url("/home/lilian/react/react-shop/src/assets/p1/00.jpg");\n    // background-image: url("../../assets/p1/00.jpg");\n    // background-image: url(00.jpg);\n\n    // why those not working except https!!!\n    // never mind, url() never work for me - - !\n\n    padding:0;\n    width:125px;\n    height:125px;\n    object-fit: cover; // same square effect!\n    @media (max-width: 650px) {\n        width:65px;\n        height:80px;\n        object-fit: cover;\n    }\n}\n']);return St=function(){return t},t}f.a.img(St(),function(t){return t.img}),f.a.table(Tt()),f.a.div(It()),f.a.div(_t()),f.a.div(Ct());var qt=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(l.a)(this,Object(p.a)(e).call(this,t))).updateItems=function(t){var e="".concat(n.props.config.store_slug);n.setState({items:t}),localStorage.setItem(e,JSON.stringify(t))},n.removeItem=function(t){var e=Object(gt.a)(n.state.items);e.splice(t,1),n.updateItems(e)},n.state={items:[]},n}return Object(s.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t="".concat(this.props.config.store_slug),e=JSON.parse(localStorage.getItem(t));this.setState({items:e||[]})}},{key:"render",value:function(){return r.a.createElement(kt,{items:this.state.items,removeItem:this.removeItem})}}]),e}(a.Component);function At(){var t=Object(m.a)(["\n    height:200px;\n    font-size:20px;\n    background: #346a5d;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    padding:40px;\n    @media (min-width: 650px) {\n      filter: grayscale(100%);\n      transition: filter .5s;\n      &:hover {\n        filter: grayscale(0.1);\n      }\n    @media (max-width: 650px) {\n        background: white ;\n        font-size:20px;\n\n    }\n    >p{\n        text-decoration:none\n    }\n"]);return At=function(){return t},t}var Dt=f.a.ul(At()),Mt=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props.config;return r.a.createElement("div",null,r.a.createElement(Dt,null,r.a.createElement("ul",{style:{listSylte:"none"}},r.a.createElement("li",null,"\u56fe\u7247\u51fa\u81ea ",r.a.createElement("a",{href:"https://www.dpm.org.cn/Home.html",style:{textDecoration:"none"}},"\u6545\u5bab\u535a\u7269\u9986")),r.a.createElement("li",null,"Photos by ",r.a.createElement("a",{href:"https://www.dpm.org.cn/Home.html",style:{textDecoration:"none"}},"The Palace Museum ")," ",r.a.createElement("br",null)))),r.a.createElement(g.a,{exact:!0,path:"/react-shop",render:function(e){return r.a.createElement(dt,{config:t})}}))}}]),e}(a.Component),zt=n(26),Jt=n(29),Nt=n.n(Jt);function Ft(){var t=Object(m.a)(["\n    margin: 100px 100px 0px 100px;\n    @media (max-width: 1024px) {\n        margin: 100px 0 0 0;\n    }\n    @media (max-width: 650px) {\n        margin: 100px 0 0 0;;\n    },\n\n"]);return Ft=function(){return t},t}var Ht=f.a.div(Ft()),Pt=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).state={},n}return Object(s.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(F,{config:zt}),r.a.createElement(Ht,null,r.a.createElement(Nt.a,null,zt.productsinfo.map(function(t){return r.a.createElement(g.a,{exact:!0,path:"/".concat(zt.store_slug,"/product/").concat(t.url),render:function(e){return r.a.createElement(nt,{me:t,config:zt})}})}),r.a.createElement(g.a,{exact:!0,path:"/".concat(zt.store_slug),render:function(t){return r.a.createElement(Mt,{config:zt})}}),r.a.createElement(g.a,{exact:!0,path:"/".concat(zt.store_slug,"/cart"),render:function(t){return r.a.createElement(qt,{config:zt})}})))))}}]),e}(r.a.Component);i.a.render(r.a.createElement(Pt,null),document.getElementById("root"))},34:function(t,e,n){var a={"./9999p1/00.jpg":251,"./9999p1/01.jpg":252,"./9999p1/02.jpg":253,"./9999p1/IMG_20190215_152601.jpg":254,"./9999p2/00.jpg":255,"./9999p2/01.jpg":256,"./9999p2/02.jpg":257,"./9999p2/03.jpg":258,"./p1/00.jpg":259,"./p1/01.jpg":260,"./p2/00.jpg":261,"./p2/01.jpg":262,"./p2/02.jpg":263,"./p3/00.jpg":264,"./p3/01.jpg":265,"./p3/02.jpg":266,"./store_config":26,"./store_config.json":26};function r(t){var e=c(t);return n(e)}function c(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(a)},r.resolve=c,t.exports=r,r.id=34}},[[107,1,2]]]);
//# sourceMappingURL=main.a7b451a5.chunk.js.map