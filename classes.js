
class Rectangle {
    constructor (_width, _height, _color) {
      console.log('the rectangle is created')
  
      this.width = _width
    this.height = _height
    this.color = _color
    }
  
    getArea (){
      return this.width * this.height
    }
    
  }
  let myRectangle1 = new Rectangle(3,5,"blue");
  let myRectangle2 = new Rectangle(10,5,"red");
  
  console.log(myRectangle2.getArea())