const button=document.querySelector("button");
const body=document.querySelector("body");
const color=["red","blue","yellow","green","orange","white","purple","pink","black","gold","aqua","LightSalmon","Magenta","BlueViolet","Indigo","Lime","DodgerBlue","Maroon"];
document.addEventListener('click',function(){
    body.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
});