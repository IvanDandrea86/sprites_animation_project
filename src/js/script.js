const canvas=document.getElementById("myCanvas")
console.log(canvas)
const ctx =canvas.getContext("2d")
var heroTimer = null;
const row=36
const attack=5
const jump= 2
const run=1
window.addEventListener("load",()=>{
    var hero  = {img:null, x:0, y:0, width:50, height:38, currentframe:0, totalframes:3}
    hero.img = new Image();
    hero.img.src = "./src/img/Fullmain.png";
    hero.img.onload = function(){
     heroTimer = setInterval(animateIdle, 260);
}
function animateIdle(){
ctx.clearRect(0,0,canvas.height,canvas.height)
  hero.currentframe+=1;
  ctx.drawImage(hero.img, hero.currentframe*hero.width, 0, hero.width, hero.height, 50, 50, hero.width, hero.height);
  if(hero.currentframe>=hero.totalframes){
    hero.currentframe = 0;
  }
}
document.getElementById("attack").addEventListener("click",()=>{
    clearInterval(heroTimer)
    var hero  = {img:null, x:0, y:0, width:50, height:36, currentframe:0, totalframes:9}
    hero.img = new Image();
    hero.img.src = "./src/img/Fullmain.png";
    hero.img.onload = function(){
     heroTimer = setInterval(animateIdle, 260);
}
function animateIdle(){
ctx.clearRect(0,0,canvas.height,canvas.height)
  hero.currentframe+=1;
  ctx.drawImage(hero.img, hero.currentframe*hero.width, (38*attack), hero.width, hero.height, 50, 50, hero.width, hero.height);
  if(hero.currentframe>=hero.totalframes){
    hero.currentframe = 0;
  }
}
})
document.getElementById("run").addEventListener("click",()=>{
    clearInterval(heroTimer)
    var hero  = {img:null, x:0, y:0, width:50, height:36, currentframe:0, totalframes:5}
    hero.img = new Image();
    hero.img.src = "./src/img/Fullmain.png";
    hero.img.onload = function(){
     heroTimer = setInterval(animateIdle, 260);
}
function animateIdle(){
ctx.clearRect(0,0,canvas.height,canvas.height)
  hero.currentframe+=1;
  ctx.drawImage(hero.img, hero.currentframe*hero.width, (38*run), hero.width, hero.height, 50, 50, hero.width, hero.height);
  if(hero.currentframe>=hero.totalframes){
    hero.currentframe = 0;
  }
}
})
document.getElementById("jump").addEventListener("click",()=>{
    clearInterval(heroTimer)
    var hero  = {img:null, x:0, y:0, width:50, height:36, currentframe:0, totalframes:9}
    hero.img = new Image();
    hero.img.src = "./src/img/Fullmain.png";
    hero.img.onload = function(){
     heroTimer = setInterval(animateIdle, 260);
}
function animateIdle(){
ctx.clearRect(0,0,canvas.height,canvas.height)
  hero.currentframe+=1;
  ctx.drawImage(hero.img, hero.currentframe*hero.width, (38*jump), hero.width, hero.height, 50, 50, hero.width, hero.height);
  if(hero.currentframe>=hero.totalframes){
    hero.currentframe = 0;
  }
}
})
})