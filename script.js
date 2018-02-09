var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var height = 0
var width = 0
var plrX = 0
var plrY = 0
var AK = false
var DK = false
var WK = false
var time = 0
var animationFrameNo = 0
var mapX = 0
var mapY = 0
var dir = "down"
var linkUp1 = document.getElementById("linkUp1")
var linkUp2 = document.getElementById("linkUp2")
var linkDown1 = document.getElementById("linkDown1")
var linkDown2 = document.getElementById("linkDown2")
var linkLeft1 = document.getElementById("linkLeft1")
var linkLeft2 = document.getElementById("linkLeft2")
var linkRight1 = document.getElementById("linkRight1")
var linkRight2 = document.getElementById("linkRight2")
var SK = false
var sizingVar;
var walking = false
setInterval(function(){
  time++
  height = window.innerHeight
  width = window.innerWidth
  if(width<height){
    sizingVar = width/500
  }else{
    sizingVar = height/500
  }
  if(AK == true){
    plrX -= 2.5
    dir = "left"
  }
  if(DK == true){
    plrX += 2.5
    dir = "right"
  }
  if(WK == true){
    plrY -= 2.5
    dir = "up"
  }
  if(SK == true){
    plrY += 2.5
    dir = "down"
  }
  if(plrX < 0){
    plrX = 0
  }
  if(plrX > 490){
    plrX = 490
  }
  if(plrY < 0){
    plrY = 0
  }
  if(plrY > 490){
    plrY = 490
  }
  if(time%10 == 0 && walking == true){
  if(animationFrameNo == 0){
    animationFrameNo = 1
  }else{
    animationFrameNo = 0
  }
  }
  //Sizing var would be for scaling on a 500x500 canvas, with it being the number to multiply by for pixels
  ctx.clearRect(0,0,width,height)
  canvas.width = sizingVar*500
  canvas.height = sizingVar*500
  for(var i = 0; i<50;i++){
    for(var v = 0; i<50;v++){
      if(map1[i][v]==1){
      ctx.fillRect(v*10*sizingVar,i*10*sizingVar,10*sizingVar,10*sizingVar)
      }
    }
  }
  //ctx.fillRect(plrX*sizingVar, plrY*sizingVar, 10*sizingVar, 10*sizingVar)
  if(dir == "up" && animationFrameNo == 0 ){
  ctx.drawImage(linkUp1,plrX*sizingVar,plrY*sizingVar,10*sizingVar,10*sizingVar)
  }
  if(dir == "up" && animationFrameNo == 1 ){
  ctx.drawImage(linkUp2,plrX*sizingVar,plrY*sizingVar,10*sizingVar,10*sizingVar)
  }
  if(dir == "down" && animationFrameNo == 0 ){
  ctx.drawImage(linkDown1,plrX*sizingVar,plrY*sizingVar,10*sizingVar,10*sizingVar)
  }
  if(dir == "down" && animationFrameNo == 1 ){
  ctx.drawImage(linkDown2,plrX*sizingVar,plrY*sizingVar,10*sizingVar,10*sizingVar)
  }
  if(dir == "left" && animationFrameNo == 0 ){
    ctx.drawImage(linkLeft1,plrX*sizingVar,plrY*sizingVar,10*sizingVar,10*sizingVar)
  }
  if(dir == "left" && animationFrameNo == 1 ){
    ctx.drawImage(linkLeft2,plrX*sizingVar,plrY*sizingVar,10*sizingVar,10*sizingVar)
  }
  if(dir == "right" && animationFrameNo == 0 ){
    ctx.drawImage(linkRight1,plrX*sizingVar,plrY*sizingVar,10*sizingVar,10*sizingVar)
  }
  if(dir == "right" && animationFrameNo == 1 ){
  ctx.drawImage(linkRight2,plrX*sizingVar,plrY*sizingVar,10*sizingVar,10*sizingVar)
  }
},1000/60)
document.onkeydown = function(e){
  e=e||window.Event
  var res = String.fromCharCode(e.keyCode)
  if(res =="S"||e.keyCode == 40){
    SK = true
    walking = true
  }
  if(res =="W"||e.keyCode == 38){
    WK = true
    walking = true
  }
  if(res =="A"||e.keyCode==37){
    AK = true
    walking = true
  }
  if(res =="D"||e.keyCode==39){
    DK = true
    walking = true
  }
}
document.onkeyup = function(e){
  e=e||window.Event
  var res = String.fromCharCode(e.keyCode)
  if(res =="S"||e.keyCode==40){
    SK = false
    walking = false
  }
  if(res =="W"||e.keyCode==38){
    WK = false
    walking = false
  }
  if(res =="A"||e.keyCode==37){
    AK = false
    walking = false
  }
  if(res =="D"||e.keyCode==39){
    DK = false
    walking = false
  }
}
