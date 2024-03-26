var b=Object.defineProperty;var w=(d,e,t)=>e in d?b(d,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[e]=t;var o=(d,e,t)=>(w(d,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const y=document.querySelector('meta[name="viewport"]'),x=document.getElementById("loading-page"),I=document.getElementById("homescreen"),L=document.getElementById("desktop");document.getElementById("taskbar");document.getElementById("clock");document.getElementById("widgets");document.getElementById("narrator-visibility-text");document.getElementById("narrator-visibility-icon");document.getElementById("menu-button");document.getElementById("menu");const m="./webp/mag-fumo-vinyl-rotating.webp",R="./webp/desktop-item-teaser.webp",T="./webp/desktop-menu-teaser.webp",O="./webp/narrator-teaser.webp",A="./webp/move-panel-teaser.webp",M="./webp/not-a-troll-face.webp";let p=0;function W(){document.body.style.overflow="",y.content="width=device-width, initial-scale=1.0, user-scalable=yes",++p}function C(){--p==0&&(document.body.style.overflow="hidden",y.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no")}const n=class n{constructor(e,t=null,r=!1){o(this,"div");o(this,"header");o(this,"body");o(this,"xCurrent");o(this,"yCurrent");o(this,"xInitial");o(this,"yInitial");o(this,"xOffset");o(this,"yOffset");o(this,"name");o(this,"iconURL");this.xOffset=0,this.yOffset=0,this.div=document.createElement("div"),this.div.classList.add("panel"),this.header=document.createElement("div"),this.header.classList.add("panel-header"),this.header.innerHTML=`
        <div class="panel-header-left">
            <img src="${m}" draggable="false">
            ${e}
        </div>
        <div class="panel-header-right"></div>
        `,this.name=e,this.iconURL=m;const i=document.createElement("div");i.classList.add("panel-body"),this.body=i;const s=document.createElement("div");s.classList.add("panel-content"),t!==null&&s.appendChild(t),i.appendChild(s),this.div.append(this.header,i),r&&this.hide(),L.appendChild(this.div),n.EveryPanel.push(this),this.move(0,0),this.div.style.zIndex=`${++n.zIndex}`;const l=h=>{var u;C(),(u=n.selected)==null||u.deselect(),n.active&&(n.active.move(n.active.xCurrent,n.active.yCurrent),n.active.div.style.cursor="grab"),this.header.style.cursor="grabbing",n.active=this,this.select(),h instanceof TouchEvent?(this.xInitial=h.touches[0].clientX-this.xOffset,this.yInitial=h.touches[0].clientY-this.yOffset):(this.xInitial=h.clientX-this.xOffset,this.yInitial=h.clientY-this.yOffset)};this.header.addEventListener("touchstart",l),this.header.addEventListener("mousedown",l);const c=h=>{var u;(u=n.selected)==null||u.deselect(),n.selected=this,this.select()};this.div.addEventListener("touchstart",c),this.div.addEventListener("mousedown",c)}select(){n.selected=this,this.div.style.background=`linear-gradient(
            #c93232 1px,
            #ce5858 2px,
            #bc2828 4px,
            #b51e1e 5px,
            #b41919 7px,
            #b51414 10px,
            #bb1e1e 14px,
            #c12828 24px,
            #be2323)`,this.header.style.background=`linear-gradient(
            to right,
            #be2323,
            transparent 10px calc(100% - 10px),
            #be2323
          )`,this.body.style.border="1px solid #961919",this.div.style.zIndex=`${++n.zIndex}`}deselect(){n.selected=null,this.div.style.background="",this.header.style.background="",this.body.style.border=""}hide(){this.div.style.visibility="hidden"}show(){this.div.style.visibility="visible"}move(e,t,r=!1){let i=window.innerHeight-this.div.clientHeight*.2,s=window.innerWidth-this.div.clientWidth*.2;t>i&&t!==0?t=i:t<0&&(t=0),e>s&&e!==0?e=s:e<-(this.div.clientWidth*.8)&&(e=-(this.div.clientWidth*.8)),this.xCurrent=this.xOffset=e,this.yCurrent=this.yOffset=t,this.div.style.left=`${e}px`,this.div.style.top=`${t}px`,r&&(this.div.style.zIndex=`${++n.zIndex}`)}static dragMove(e){if(n.active!==null){let t=0,r=0;e instanceof TouchEvent?(t=e.touches[0].clientX-n.active.xInitial,r=e.touches[0].clientY-n.active.yInitial):(t=e.clientX-n.active.xInitial,r=e.clientY-n.active.yInitial),n.active.move(t,r)}}static dragEnd(e){var t;n.active!==null?(n.active.header.style.cursor="grab",n.active=null,W()):e.target.closest(".panel")||(t=n.selected)==null||t.deselect()}};o(n,"active",null),o(n,"selected",null),o(n,"zIndex",100),o(n,"EveryPanel",[]);let a=n;addEventListener("touchend",a.dragEnd);addEventListener("touchmove",a.dragMove);addEventListener("mouseup",a.dragEnd);addEventListener("mousemove",a.dragMove);addEventListener("resize",d=>{for(const e of a.EveryPanel)e.move(e.xCurrent,e.yCurrent)});x.style.display="none";I.style.display="block";console.log(`
                   ###                               
                  ###                                
                  ##           ##########            
                ############# ############           
              ##############################         
            #############################            
          ################################           
         ##################################          
        ###################################          
      ##########+###########+##############          
     ##########+-###########-+#############          
   ############---+########---+############
##############-----+######-----+#############        
     #########++++++-+####+++++++###########         
     #########++++++--+++++++++--###########         
      ########-++++--------++++-+###--######         
       #######------------------+############        
         ######----------------+#############        
           #####--------------+###############       
            ######+--------+##+###############       
          ##########++---++#++#################      
          +################+#######-###########      
       ----+###########++#########--+#########       
     --------########+++#########---###+-+##         
    -------- #####+############# #####+--+           
     +--+ +++++################# #####               
         #+++++++#############++#                    
         ++++++++++++++++++++++++                    
         +++++++++++++++++++++++++                   
          ######+++++++++++++######                  
         ########+#+++++++++########                 
          ########          #######                  
           ######            #####                                                

What brings you to the console, Magma Muncher?`);function f(d,e){return Math.random()*(e-d)+d}const g=[1,2,3,4];g.sort(()=>Math.random()-.5);function E(d,e){const t=g.pop();let r=0,i=0,s=window.innerWidth*.5-d,l=window.innerHeight*.5-e;switch(t){case 2:r=window.innerWidth*.5,s=window.innerWidth-d;break;case 3:i=window.innerHeight*.5,l=window.innerHeight-e;break;case 4:r=window.innerWidth*.5,s=window.innerWidth-d,i=window.innerHeight*.5,l=window.innerHeight-e;break}return[f(r,s),f(i,l)]}function v(d,e,t=null,r=null){const i=document.createElement("div");i.id=`teaser${d}`;const s=document.createElement("img");s.src=e,i.appendChild(s),s.draggable=!1;const l=new a(r??`Teaser ${d}`,i,!0);return t===null&&(t=c=>{c.move(...E(c.div.clientWidth,c.div.clientHeight)),c.show()}),s.onload=()=>{t(l)},l}v(1,R);v(2,T);v(3,O);v(4,A,d=>{const e=E(d.div.clientWidth,d.div.clientHeight);v(5,M,t=>{t.move(e[0]+(d.div.clientWidth-t.div.clientWidth)*.5,e[1]+(d.div.clientHeight-t.div.clientHeight)*.5),t.show(),d.move(...e,!0),d.show(),d.select()},"Trolled!")});
