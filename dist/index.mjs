import "./index.css";import p from"react";var m=({width:o,height:i,image:l,variant:t="classic",alt:a="",className:n="",intensity:c=5,direction:e="horizontal"})=>{let h=typeof l=="string"?l:l.src,g=["glitch",`glitch-style-${t}`,e==="vertical"&&"glitch--vertical",n].filter(Boolean).join(" ");return p.createElement("div",{className:g,style:{"--time-anim":`${c}s`,width:o,height:i},role:"img","aria-label":a},Array.from({length:5},(s,r)=>p.createElement("div",{key:r,"aria-hidden":"true",className:"glitch-img",style:{backgroundImage:`url(${h})`}})))},d=m;export{d as GlitchImage};
