var driftSpeed = 0.05;
var avoidSpeed = 0.7;
var mouseX = 0;
var mouseY = 0;
var bgCurrentColor = "#ECD078";
var bgNextColor = "#D95B43";
var bgChanging = false;

$(document).ready(function(){
    $('.innerRight').css("background-color",bgCurrentColor);
    $('.innerLeft').css("background-color",bgCurrentColor);
    clearScreen();
    colorChange();
    startSpawning();
});

$(document).click(function() { 
    if(!bgChanging){
         bgChanging = true;
    
        var back = ["#ECD078","#D95B43","#C02942","#542437","#53777A"];
        var rand = bgNextColor;
        while(rand == bgNextColor) {
            rand = back[Math.floor(Math.random() * back.length)];
        }
  
  $('.outer-wrapper').css("background-color",bgNextColor);
  $('.innerRight').css("background-color",bgCurrentColor);
  $('.innerLeft').css("background-color",bgCurrentColor);
  $('.innerTop').css("background-color",bgCurrentColor);
  $('.innerBot').css("background-color",bgCurrentColor);
  
  wipe_right('.innerRight','.innerRight', bgNextColor);
  wipe_left('.innerLeft','.innerLeft', bgNextColor);
  wipe_top('.innerTop','.innerTop', bgNextColor);
  wipe_bot('.innerBot','.innerBot', bgNextColor);

  bgCurrentColor = bgNextColor;
  bgNextColor = rand;
  
    }
   
});

function wipe_left (object, width, rand) {
            $(object).css('width', '50vw');
            $(object).css("left", width);
            $(object).animate({
                width: width,
                right: '101vw'
            }, 4000);
            
           $(object).animate({
                width: width,
                right: '50vw'
            }, 0);
            
            setTimeout(colorChange, 4000); 
            
        }

function wipe_right (object, width, rand) {
            $(object).css('width', '50vw');
            $(object).css("right", width);
            $(object).animate({
                width: width,
                left: '101vw'
            }, 4000);
            
            $(object).animate({
                width: width,
                left: '50vw'
            }, 0);
        }
        
function wipe_top (object, width, rand) {
            $(object).css('height', '50vh');
            $(object).css("top", width);
            $(object).animate({
                width: width,
                top: '-51vh'
            }, 4000);
            
            $(object).animate({
                width: width,
                top: '0vh'
            }, 0);
        }  
        
function wipe_bot (object, width, rand) {
            $(object).css('height', '50vh');
            $(object).css("bot", width);
            $(object).animate({
                width: width,
                top: '101vh'
            }, 4000);
            
            $(object).animate({
                width: width,
                top: '50vh'
            }, 0);
        }         

function colorChange(){
    $('.innerRight').css("background-color",bgCurrentColor);
    $('.innerLeft').css("background-color",bgCurrentColor);
    bgChanging = false;
    
    var squares = $('.Square');
    for(var i = 0; i < squares.length; i++){
        var randomSize = Math.random()*100;
        jQuery(squares.eq(i)).css('opacity', '0.0');
        $(squares.eq(i)).css("background-color",bgNextColor);
        $(squares.eq(i)).css("width",randomSize);
        $(squares.eq(i)).css("height",randomSize);
    }
    
    var circles = $('.Circle');
    for(var i = 0; i < circles.length; i++){
        var randomSize = Math.random()*100;
        jQuery(circles.eq(i)).css('opacity', '0.0');
        $(circles.eq(i)).css("background-color",bgNextColor);
        $(circles.eq(i)).css("width",randomSize);
        $(circles.eq(i)).css("height",randomSize);
    }
    
    var triangles = $('.Triangle');
    for(var i = 0; i < triangles.length; i++){
        var randomSize = Math.random()*80;
        jQuery(triangles.eq(i)).css('opacity', '0.0');
        $(triangles.eq(i)).css("background-color",bgCurrentColor);
        $(triangles.eq(i)).css("border-bottom-color",bgNextColor);
        $(triangles.eq(i)).css("borderHeight",randomSize);
        $(triangles.eq(i)).css("borderWidth",randomSize);
    }
    
    var crescents = $('.Crescent');
    for(var i = 0; i < crescents.length; i++){
        var randomSize = Math.random()*100;
        jQuery(crescents.eq(i)).css('opacity', '0.0');
        $(crescents.eq(i)).css("width",randomSize);
        $(crescents.eq(i)).css("height",randomSize);
        $(crescents.eq(i)).css("box-shadow", "15px 15px 0 0  " + bgNextColor);
    }
    
    startSpawning();
}

$(document).mousemove(function(event) { 
    mouseX = event.pageX;
    mouseY = event.pageY;
    
    var squares = $('.Square');
    for(var i = 0; i < squares.length; i++){
        moveAwayFromMouse(squares.eq(i), event);
    }
    
    var circles = $('.Circle');
    for(var i = 0; i < circles.length; i++){
        moveAwayFromMouse(circles.eq(i), event);
    }
    
    var triangles = $('.Triangle');
    for(var i = 0; i < triangles.length; i++){
        moveAwayFromMouse(triangles.eq(i), event);
    }
    
    var crescents = $('.Crescent');
    for(var i = 0; i < crescents.length; i++){
        moveAwayFromMouse(crescents.eq(i), event);
    }
});

function clearScreen(){
    
    var squares = $('.Square');
    for(var i = 0; i < squares.length; i++){
         jQuery(squares.eq(i)).css('opacity', '0.0');
    }
    
   var circles = $('.Circle');
   for(var i = 0; i < circles.length; i++){
         jQuery(circles.eq(i)).css('opacity', '0.0');
    }
    
    var triangles = $('.Triangle');
   for(var i = 0; i < triangles.length; i++){
         jQuery(triangles.eq(i)).css('opacity', '0.0');
    }
    
    var crescents = $('.Crescent');
   for(var i = 0; i < crescents.length; i++){
         jQuery(crescents.eq(i)).css('opacity', '0.0');
    }
}


function startSpawning(){
    
    var squares = $('.Square');
    for(var i = 0; i < squares.length; i++){
        var random = Math.random()*20000; 
        setTimeout(setInitPosition, random, $(squares.eq(i))); 
    }
    var circles = $('.Circle');
    for(var i = 0; i < circles.length; i++){
        var random = Math.random()*20000; 
        setTimeout(setInitPosition, random, $(circles.eq(i))); 
    }
    
    var triangles = $('.Triangle');
    for(var i = 0; i < triangles.length; i++){
        var random = Math.random()*20000; 
        setTimeout(setInitPosition, random, $(triangles.eq(i)), true); 
    }
    
    var crescents = $('.Crescent');
    for(var i = 0; i < crescents.length; i++){
        var random = Math.random()*20000; 
        setTimeout(setInitPosition, random, $(crescents.eq(i)), true); 
    }
}

function moveAwayFromMouse(object, event){ 
    var pos = $(object).offset();
    var width = $(object).outerWidth();
    var height = $(object).outerHeight();
    
    var objectWidth = $(object).width();
    
    if(objectWidth < 5) objectWidth = 30;
    
    if(Math.abs((pos.top+height) - mouseY) < $(object).height()
        && Math.abs((pos.left+width) - mouseX) < objectWidth){
        $(object).stop();
        animateObject(object, avoidSpeed);
    }
}


function makeNewPosition(object){
    
    var oldPos = $(object).offset();
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function setInitPosition(object, borders){
    
    if(bgChanging){
        return;
    }else{
        //jQuery(object).css('opacity', '0.0');
    
    var newPos = makeNewPosition(object);
    
    if(!borders){
        $(object).css("background-color",bgNextColor);
    } 
    else {
        $(object).css("background-color",'transparent');
        $(object).css("border-bottom-color",bgNextColor);
    }
    
    $(object).offset({ top: newPos[0], left: newPos[1]})
    object.animate({ opacity: 1}, { duration: 'slow', queue: false });
    animateObject(object, driftSpeed);  
    
    }
}

function animateObject(object, speedMod){
    var newPos = makeNewPosition(object);
    var oldPos = $(object).offset();
    var speed = calcSpeed([oldPos.top, oldPos.left], newPos, speedMod);
    
    $(object).animate({ top: newPos[0], left: newPos[1] }, speed, function(){
      animateObject(object, driftSpeed);        
    });
    
};

function calcSpeed(prev, next, speedMod) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;

    var speed = Math.ceil(greatest/speedMod);

    return speed;

}