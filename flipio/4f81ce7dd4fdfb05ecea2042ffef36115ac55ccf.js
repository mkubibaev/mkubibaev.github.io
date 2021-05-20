const showToggle=(content,arrow)=>{arrow.style.transform="rotateZ(180deg)";content.style.display="block";};const hideToggle=(content,arrow)=>{arrow.style.transform="rotateZ(90deg)";content.style.display="none";};const toggleButtons=document.getElementsByClassName("loconotion-toggle-button");for(let i=0;i<toggleButtons.length;i++){const toggleButton=toggleButtons.item(i);const toggleId=toggleButton.getAttribute("loconotion-toggle-id");const toggleContent=document.querySelector(`.loconotion-toggle-content[loconotion-toggle-id='${toggleId}']`);const toggleArrow=toggleButton.querySelector("svg");if(toggleButton&&toggleContent){hideToggle(toggleContent,toggleArrow);toggleButton.addEventListener("click",()=>{if(toggleContent.style.display=="none"){showToggle(toggleContent,toggleArrow);}else{hideToggle(toggleContent,toggleArrow);}});}}
const pendingIframes=document.getElementsByTagName("iframe");for(let i=0;i<pendingIframes.length;i++){pendingIframes.item(i).parentElement.style.opacity=1;}
const collectionSearchBoxes=document.getElementsByClassName("collectionSearch");for(let i=0;i<collectionSearchBoxes.length;i++){const collectionSearchBox=collectionSearchBoxes.item(i).parentElement;collectionSearchBox.style.display="none";}
const anchorLinks=document.querySelectorAll("a.loconotion-anchor-link");for(let i=0;i<anchorLinks.length;i++){const anchorLink=anchorLinks.item(i);const id=anchorLink.getAttribute("href").replace("#","");const targetBlockId=id.slice(0,8)+"-"+id.slice(8,12)+"-"+id.slice(12,16)+"-"+id.slice(16,20)+"-"+id.slice(20);anchorLink.addEventListener("click",(e)=>{e.preventDefault();console.log(targetBlockId);document.querySelector(`div[data-block-id='${targetBlockId}']`).scrollIntoView({behavior:"smooth",block:"start",});});}