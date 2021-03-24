var blob;
var song;

var blobs = [];

function setup(){
    createCanvas(600,600);
  
  blob = new Blob(0,0, 64);
  for (var i = 0; i<50; i++) {
    
    //larger space for in between the small blobs 
    var x = random(-width, width);
    var y = random(-height, height);

    
    //sets the blobs in a random location
    //16 is just the constructor giving it the size of 16 px
    //setting up a random location for the blobs
     
    blobs[i] = new Blob(x, y, 16);
  }     
  
  
}



function draw(){
  background(0);
   //function translate shifts the origin 
  //translate(width/2-blob.pos.x, height/2-blob.pos.y);
  translate(width/2, height/2);
  //world zooms out making you look the same size but others are becoming smaller
  //scale function works upon translate by adjusting the frame size scale
  scale(64/blob.r);
  translate(-blob.pos.x, -blob.pos.y);
  
  // if blob eats another blod then it removes it from the array 
  //this just loops the array backwards rather than forwards to make sure not to miss anything
  for (var i = blobs.length - 1; i>= 0; i--)
  {
  blobs[i].show();
    if(blob.eats(blobs[i])) {
      //removes 1 element at index i 
      blobs.splice(i ,1);
    }
      
  }
  blob.show();
  blob.update();
  
  
}
