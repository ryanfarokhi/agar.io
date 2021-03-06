//blob function for both your model and the other tiny blobs you'll be eating
function Blob(x,y,r){
  
  this.pos = createVector(x,y);
 //blobs radius
  this.r = r;
  
  this.update = function(){
    //subtract center of the window
    var vel = createVector(mouseX-width/2,mouseY-height/2);
   //takes vector whatever the length and sets it to a certain Magnatiude
    vel.setMag(3);
    this.pos.add(vel);
    
  }
  
  
  this.eats = function (other){
    // vector functons finds the distances between the two blobs
    var d = p5.Vector.dist(this.pos, other.pos);
    //if this d < the two radius then the blob has been eaten
    if(d < this.r + other.r) {
      //other way of adding size for the blob by multipliying and adding the radius's 
      var sum = PI * this.r * this.r + PI * other.r * other.r;
      this.r = sqrt(sum / PI);
      
      //adds radius by a factor of 0.2
      //this.r +=other.r*0.2;
      return true;
    } else{
      return false;
    }
    
  }
  
  
  this.show = function() {
    
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2 )
    
  }
  
}
