class Block{
    constructor(x, y, width, height) {
      this.Visibility = 255
        var options = {
            restitution :0.4,
            friction :0.0,
            isStatic : false
            
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
         this.image= loadImage("block.png")
        World.add(world, this.body);
      }

      display(){
        console.log(this.body.speed);

        var pos= this.body.position;
        imageMode(CENTER);

        

        if(this.body.speed > 3.5){
          World.remove(world, this.body);
          push();
          this.Visibility = this.Visibility - 5
          tint(255, this.Visibility);
          
          image(this.image, pos.x, pos.y)
        pop();
        }
        else{
          image(this.image, pos.x, pos.y)

        }


        }
}