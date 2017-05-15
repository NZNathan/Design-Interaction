var TimeVar = 2000;

$(document).ready(function(){
    $('body').css("background-color","#D95B43");
    
    moveBarsOut();
    
});

$(document).click(function() { 
    $('.innerTop').stop();
    $('.innerBot').stop();
    $('.innerLeft').stop();
    $('.innerRight').stop();
});

function moveBarsOut(){
            
    var randomTiming = Math.random()*1;
    
    setTimeout(moveTopBarOut, randomTiming); 
    
    randomTiming = Math.random()*1;
    setTimeout(moveBotBarOut, randomTiming); 
    
    randomTiming = Math.random()*1;        
    setTimeout(moveLeftBarOut, randomTiming); 
    
    randomTiming = Math.random()*1;
    setTimeout(moveRightBarOut, randomTiming); 
}

function moveTopBarOut(){
    
    var randomTiming = Math.random()*TimeVar+ 1000;
    var movement = $( document ).height()*0.1;
    
    $('.innerTop').animate({
        top: -movement
    }, randomTiming); 
    
    setTimeout(moveTopBarIn, randomTiming);
}

function moveTopBarIn(){
    
    var randomTiming = Math.random()*TimeVar+ 1000;
    
    $('.innerTop').animate({
        top: '0vh'
    }, randomTiming);
    
    setTimeout(moveTopBarOut, randomTiming);
}

function moveBotBarOut(){
    
    var randomTiming = Math.random()*TimeVar+ 1000;
    var movement = $( document ).height()*0.1;
    
    $('.innerBot').animate({
        top: $( document ).height()*0.6+ (Math.random()*movement)
    }, randomTiming);
    
    setTimeout(moveBotBarIn, randomTiming);
}

function moveBotBarIn(){
    var randomTiming = Math.random()*TimeVar+ 1000;
    
    $('.innerBot').animate({
        top: '60vh'
    }, randomTiming);
    
    setTimeout(moveBotBarOut, randomTiming);
}

function moveLeftBarOut(){
    
    var randomTiming = Math.random()*TimeVar+ 1000;
    var movement = $( document ).width()*0.1;
    
    $('.innerLeft').animate({
                right: $( document ).width()*0.6+ (Math.random()*movement)
            }, randomTiming);
            
    setTimeout(moveLeftBarIn, randomTiming);        
}

function moveLeftBarIn(){
    var randomTiming = Math.random()*TimeVar+ 1000;
    $('.innerLeft').animate({
        right: '60vw'
    }, randomTiming);
    
    setTimeout(moveLeftBarOut, randomTiming);
}

function moveRightBarOut(){
    
    var randomTiming = Math.random()*TimeVar + 1000;
    var movement = $( document ).width()*0.1;
    
    $('.innerRight').animate({
        right: -movement
    }, randomTiming); 
    
    setTimeout(moveRightBarIn, randomTiming);
}

function moveRightBarIn(){
    var randomTiming = Math.random()*TimeVar+ 1000;
    $('.innerRight').animate({
        right: '0vw'
    }, randomTiming);
    
    setTimeout(moveRightBarOut, randomTiming);
}