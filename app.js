(function(){
var WA="https://wa.me/50663026080?text=",$=function(s,c){return(c||document).querySelector(s)},$$=function(s,c){return[].slice.call((c||document).querySelectorAll(s))};
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
var mb=$("#mb"),mn=$("#mn");if(mb)mb.onclick=function(){var o=mn.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});$$(".rv").forEach(function(e){io.observe(e)})}else $$(".rv").forEach(function(e){e.classList.add("in")});
var ring=$("#ring");
if(ring){var faces=$$(".face"),sc=$("#sc"),a=0,v=0,drag=false,lx=0,hov=false;
var R=function(){return Math.max(210,Math.min(300,sc.clientWidth*.55))};
function lay(){faces.forEach(function(f,i){f.style.transform="rotateY("+i*120+"deg) translateZ("+R()+"px)"})}lay();addEventListener("resize",lay);
sc.addEventListener("pointerdown",function(e){drag=true;lx=e.clientX});addEventListener("pointerup",function(){drag=false});
addEventListener("pointermove",function(e){if(drag){v=(e.clientX-lx)*.25;lx=e.clientX}});
sc.addEventListener("pointerenter",function(){hov=true});sc.addEventListener("pointerleave",function(){hov=false});
(function t(){a+=v+(drag||rm||hov?0:.22);if(!drag)v*=.94;else v=0;ring.style.transform="translateZ(-"+R()+"px) rotateY("+a+"deg)";requestAnimationFrame(t)})()}
$$(".vs").forEach(function(s){var i=$(".vi",s);if(!i||!matchMedia("(pointer:fine)").matches)return;s.addEventListener("pointermove",function(e){var r=s.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;i.style.transform="rotateY("+x*22+"deg) rotateX("+-y*18+"deg)"});s.addEventListener("pointerleave",function(){i.style.transform=""})});
function setWa(p,d){return WA+encodeURIComponent("Hola, quiero información de "+p+", presentación "+d+".")}
$$(".prod").forEach(function(s){var n=s.dataset.n,a=$("[data-wa]",s),ch=$$(".dz button",s);function u(){var c=ch.filter(function(b){return b.getAttribute("aria-checked")==="true"})[0];a.href=setWa(n,c.dataset.d)}
ch.forEach(function(b){b.onclick=function(){ch.forEach(function(x){x.setAttribute("aria-checked",x===b)});u()}});u()});
if($("#sp")){var C={"Wolverine BPC-157 + TB-500":["10 mg","20 mg"],"Retatrutide":["10 mg","15 mg","20 mg"],"Tirzepatide":["10 mg","15 mg","20 mg"]},cp="Wolverine BPC-157 + TB-500",cd="10 mg";
function seg(el,items,cur,fn){el.innerHTML="";items.forEach(function(t){var b=document.createElement("button");b.type="button";b.setAttribute("role","radio");b.setAttribute("aria-checked",t===cur);b.textContent=t;b.onclick=function(){fn(t)};el.appendChild(b)})}
function draw(){seg($("#sp"),Object.keys(C),cp,function(t){cp=t;if(C[t].indexOf(cd)<0)cd=C[t][0];draw()});seg($("#sd"),C[cp],cd,function(t){cd=t;draw()});
$("#so").textContent=cp;$("#ss").textContent="Vial multidosis · "+cd+(cp==="Tirzepatide"?" · requiere receta":"");$("#sw").href=setWa(cp,cd)}draw()}
})();
