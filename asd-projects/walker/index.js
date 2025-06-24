/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const KEY = {
    LEFT: 37,
    RIGHT:39,
    UP:38,
    DOWN: 40,
  }
  var walker = {
    coordinateX: 0,
    coordinateY: 0,
    speedX: 0,
    speedY: 0,
  }
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);  
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    redrawGameItem();
    repositionGameItem();
    wallCollison();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event){
    if (event.which === KEY.LEFT){  
    walker.speedX = -5
    console.log("left pressed");
   }  
    else if (event.which === KEY.RIGHT){ 
    walker.speedX = 5 
    console.log("right pressed"); 
   }
    else if (event.which === KEY.UP){
    walker.speedY = -5  
    console.log("up pressed"); 
    }
    else if (event.which === KEY.DOWN){
    walker.speedY = 5   
    console.log("down pressed"); 
    }
  }
   function handleKeyUp(event){
    if (event.which === KEY.LEFT){  
    walker.speedX = 0
    console.log("left pressed");
   }  
    else if (event.which === KEY.RIGHT){ 
    walker.speedX = 0 
    console.log("right pressed"); 
   }
    else if (event.which === KEY.UP){
    walker.speedY = 0  
    console.log("up pressed"); 
    }
    else if (event.which === KEY.DOWN){
    walker.speedY = 0   
    console.log("down pressed"); 
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function repositionGameItem(){
  walker.coordinateX += walker.speedX; 
  walker.coordinateY += walker.speedY; 
}
function redrawGameItem(){
  $("#walker").css("top", walker.coordinateY)
  $("#walker").css("left", walker.coordinateX)
}
function wallCollison(){
  if (walker.coordinateX > $("#board").width()  || walker.coordinateX === 0){
    walker.coordinateX = walker.coordinateX - walker.speedX
  }
  else if (walker.coordinateY > $("#board").height()  || walker.coordinateY === 0){
    walker.coordinateY = walker.coordinateY - walker.speedY
  } 
}
}
