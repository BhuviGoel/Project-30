class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.Visiblity=225;
    }
display(){
   if (this.body.speed<3){
    super.display();
    fill (255)
    stroke ("blue")
    rect (this.body.position.x, this.body.position.y, 30, 40);
  }else{
    World.remove(world,this.body);
  }
}
};
