class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
    }
  
  };
  display(){
      console.log(this.body.speed);
      if(this.body.speed<3){
         super.display(); 
      }
      else{
          //do nothing
      }
  }
  tint(255,this.visibility):
  image(this.image.this.body.posisition.x.. this.body.position.y,50,50):
  