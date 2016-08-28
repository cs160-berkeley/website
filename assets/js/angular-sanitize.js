!function(a,b){"use strict";function l(){function B(a,b){var e,c={},d=a.split(",");for(e=0;e<d.length;e++)c[b?h(d[e]):d[e]]=!0;return c}function D(b,d){null===b||void 0===b?b="":"string"!=typeof b&&(b=""+b),C.innerHTML=b;var e=5;do{if(0===e)throw c("uinput","Failed to sanitize html because the input is unstable");e--,a.document.documentMode&&H(C),b=C.innerHTML,C.innerHTML=b}while(b!==C.innerHTML);for(var f=C.firstChild;f;){switch(f.nodeType){case 1:d.start(f.nodeName.toLowerCase(),E(f.attributes));break;case 3:d.chars(f.textContent)}var g;if(!(g=f.firstChild)&&(1==f.nodeType&&d.end(f.nodeName.toLowerCase()),g=f.nextSibling,!g))for(;null==g&&(f=f.parentNode,f!==C);)g=f.nextSibling,1==f.nodeType&&d.end(f.nodeName.toLowerCase());f=g}for(;f=C.firstChild;)C.removeChild(f)}function E(a){for(var b={},c=0,d=a.length;c<d;c++){var e=a[c];b[e.name]=e.value}return b}function F(a){return a.replace(/&/g,"&amp;").replace(m,function(a){var b=a.charCodeAt(0),c=a.charCodeAt(1);return"&#"+(1024*(b-55296)+(c-56320)+65536)+";"}).replace(n,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function G(a,b){var c=!1,e=d(a,a.push);return{start:function(a,d){a=h(a),!c&&v[a]&&(c=a),c||w[a]!==!0||(e("<"),e(a),f(d,function(c,d){var f=h(d),g="img"===a&&"src"===f||"background"===f;A[f]!==!0||x[f]===!0&&!b(c,g)||(e(" "),e(d),e('="'),e(F(c)),e('"'))}),e(">"))},end:function(a){a=h(a),c||w[a]!==!0||o[a]===!0||(e("</"),e(a),e(">")),a==c&&(c=!1)},chars:function(a){c||e(F(a))}}}function H(b){if(b.nodeType===a.Node.ELEMENT_NODE)for(var c=b.attributes,d=0,e=c.length;d<e;d++){var f=c[d],g=f.name.toLowerCase();"xmlns:ns1"!==g&&0!==g.lastIndexOf("ns1:",0)||(b.removeAttributeNode(f),d--,e--)}var h=b.firstChild;h&&H(h),h=b.nextSibling,h&&H(h)}var l=!1;this.$get=["$$sanitizeUri",function(a){return l&&e(w,u),function(b){var c=[];return j(b,k(c,function(b,c){return!/^unsafe:/.test(a(b,c))})),c.join("")}}],this.enableSvg=function(a){return g(a)?(l=a,this):l},d=b.bind,e=b.extend,f=b.forEach,g=b.isDefined,h=b.lowercase,i=b.noop,j=D,k=G;var C,m=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,n=/([^\#-~ |!])/g,o=B("area,br,col,hr,img,wbr"),p=B("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),q=B("rp,rt"),r=e({},q,p),s=e({},p,B("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),t=e({},q,B("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),u=B("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),v=B("script,style"),w=e({},o,s,t,r),x=B("background,cite,href,longdesc,src,xlink:href"),y=B("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),z=B("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",!0),A=e({},x,z,y);!function(a){var b;if(!a.document||!a.document.implementation)throw c("noinert","Can't create an inert html document");b=a.document.implementation.createHTMLDocument("inert");var d=b.documentElement||b.getDocumentElement(),e=d.getElementsByTagName("body");if(1===e.length)C=e[0];else{var f=b.createElement("html");C=b.createElement("body"),f.appendChild(C),b.appendChild(f)}}(a)}function m(a){var b=[],c=k(b,i);return c.chars(a),b.join("")}var d,e,f,g,h,i,j,k,c=b.$$minErr("$sanitize");b.module("ngSanitize",[]).provider("$sanitize",l),b.module("ngSanitize").filter("linky",["$sanitize",function(a){var c=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,d=/^mailto:/i,e=b.$$minErr("linky"),f=b.isDefined,g=b.isFunction,h=b.isObject,i=b.isString;return function(b,j,k){function s(a){a&&p.push(m(a))}function t(a,b){var c,d=l(a);p.push("<a ");for(c in d)p.push(c+'="'+d[c]+'" ');!f(j)||"target"in d||p.push('target="',j,'" '),p.push('href="',a.replace(/"/g,"&quot;"),'">'),s(b),p.push("</a>")}if(null==b||""===b)return b;if(!i(b))throw e("notstring","Expected string but received: {0}",b);for(var n,q,r,l=g(k)?k:h(k)?function(){return k}:function(){return{}},o=b,p=[];n=o.match(c);)q=n[0],n[2]||n[4]||(q=(n[3]?"http://":"mailto:")+q),r=n.index,s(o.substr(0,r)),t(q,n[0].replace(d,"")),o=o.substring(r+n[0].length);return s(o),a(p.join(""))}}])}(window,window.angular);
