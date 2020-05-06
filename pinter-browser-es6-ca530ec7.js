(()=>{const{assign:t}=Object,{min:e,round:n}=Math,r=t=>t.length,o=t=>t[0],a=t=>t[1],s=t=>t.startTime,i=e=>{const r=e.name.split("@"),i=o(r),c=a(r);return(({value:t,label:e="Mark",params:n}={})=>({category:"Performance",label:e,value:t,customParams:n}))({value:i,params:t({st:n(s(e))},c?{sr:c}:{})})},c=t=>e=>Array.from(t.querySelectorAll(e)),l=t=>t.getEntriesByType,m=(t,e)=>l(t).call(t,e),u=["optimizely:","Zone:"],d=["navigationStart","unloadEventStart","unloadEventEnd","redirectStart","redirectEnd","fetchStart","domainLookupStart","domainLookupEnd","connectStart","connectEnd","secureConnectionStart","requestStart","responseStart","responseEnd","domLoading","domInteractive","domContentLoadedEventStart","domContentLoadedEventEnd","domComplete","loadEventStart","loadEventEnd"];function p(t){const e=(({timing:t})=>d.map(e=>({name:e,value:t[e]})))(t),n=o(e).value;return e.slice(1).map(t=>((t,e)=>{const n=e-t;return!e||e<0||t<0||n<0?-1:n})(n,t.value))}const f="script[src]",y='link[rel="stylesheet"]',v="img",g=t=>t.join(",");function S(t){return"number"==typeof t&&t>=0?e(n(1e3*t),1e6):-1}const E=["allegro.pl","assets.allegrostatic.pl","cdn.allegrostatic.com","assets.allegrostatic.com"],h=((e,d)=>{const{performance:h,document:T}=e,b=t=>((t,e)=>{null!==t&&"function"==typeof e.cm?e.cm("send","event",t):console.log("Cannot send performance data",t)})(t,e),k=(e=>{const n=e,i=new Set;let c;const d=t=>{i.add(p(t))},p=t=>[t.name,t.entryType,s(t),t.duration].join("###"),f=t=>({duration:t.duration,entryType:t.entryType,name:t.name,startTime:s(t)});return()=>{if(!l(n))return[];const e=m(n,"mark").filter(t=>!(t=>u.some(e=>t.name.substring(0,r(e))===e))(t)&&!(t=>i.has(p(t)))(t)).sort((t,e)=>s(t)-s(e));if(0===r(e))return e;const y=(v=({name:t})=>"clientSideNavigationStart"===t,e.reduce(([t,e],n)=>v(n)?[t.concat([n]),e]:[t,e.concat([n])],[[],[]]));var v;const g=o(y),S=a(y);return e.forEach(d),r(g)>0?(c=s((t=>t[r(t)-1])(g)),S.map(e=>{const n=((t,n)=>{for(let o=r(n)-1;o>=0;o--){const t=n[o];if(s(t)<s(e))return t}return null})(0,g);return n?t(f(e),{startTime:s(e)-s(n)}):f(e)})):c?e.map(e=>t(f(e),{startTime:s(e)-c})):e.map(f)}})(h),w=()=>k().map(i).forEach(b),z=()=>{b((t=>({category:"Performance",label:"NavigationTiming",customParams:{m:p(t),v:1}}))(h)),b(((t,e,i)=>{if(!l(i))return null;const u=((t,e)=>{const n=c(t),a=c(t.body),s=o(m(e,"navigation"))||{},i=r(n("script:not([src])")),l=r(n("script"))-i;return[n("*"),t.documentElement.innerHTML,s.encodedBodySize||-1,s.transferSize||-1,n("style"),n(y),i,l,n(g([v,"image"])),n("video"),n("iframe"),n(g(["meta","noscript","head","base","title","script","link","style"])),r(a("*"))-r(a(g(["link","style","script","noscript"])))].map(t=>{const e=r(t);return void 0===e?t:e})})(t,i),d=(t=>{if("object"!=typeof t.connection)return[,,,,,].fill(null);const{type:e="",effectiveType:n="",downlinkMax:r=-1,downlink:o=-1,rtt:a=-1}=t.connection;return[e,n,S(r),S(o),a]})(e),p=(t=>{const e=e=>{const r=o(t.getEntriesByName(e,"paint"));return r?n(s(r)):-1};return[e("first-paint"),e("first-contentful-paint")]})(i),h=((t,e)=>{const n=m(e,"resource"),s=c(t),i=t=>e=>e.initiatorType===t,l=i(v),u=i("image"),d=n.filter(i("link")),p=(t=>{const e=[],n=[];return t.forEach(t=>{let o=0;for(;o<r(E);o++){const n=E[o];if(t.name.startsWith(`https://${n}/`)){e.push(t);break}}o===r(E)&&n.push(t)}),[e,n]})(n.filter(i("script"))),g=n.filter(t=>l(t)||u(t));return[[d,y],[o(p),f],[a(p),f],[g,v]].map(t=>((t,e)=>{const n=((t,e)=>{const n=e.reduce((t,e)=>(t[e.href||e.src]=!0,t),{});return t.filter(t=>!0===n[t.name])})(t,e),r=(t=>t.reduce(([t,e],n)=>[t+(n.encodedBodySize||0),e+(n.transferSize||0)],[0,0]))(n);return(t=>{let e=0,n=0,r=0;return t.forEach(t=>{t.transferSize>0?n++:t.encodedBodySize>0?e++:r++}),[e,n,r]})(n).concat(r)})(o(t),s(a(t))))})(t,i);return{category:"Performance",label:"ResourceInformation",customParams:{v:1,bs:[0],ds:u,nct:o(d),net:a(d),ns:d.slice(2),ps:p,tst:o(h),tis:a(1),tes:h[2],tim:h[3]}}})(T,e.navigator,h))};return"complete"===T.readyState?z():e.addEventListener("load",()=>{e.setTimeout(z,0)}),e.setInterval(()=>{w()},500),w(),w})(window);window.pinter={sendUserTimings:h}})();
