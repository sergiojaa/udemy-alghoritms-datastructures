// class Rectangle {
//     constructor (_width, _height, _color) {
//       console.log('the rectangle is created')
  
//       this.width = _width
//     this.height = _height
//     this.color = _color
//     }
  
//     getArea (){
//       return this.width * this.height
//     }
//     printDescription(){
//         console.log(`I am a rectangle of ${this.width} * ${this.height} and I am ${this.color}`)
//     }
    
//   }
//   let myRectangle1 = new Rectangle(3,5,"blue");
//   let myRectangle2 = new Rectangle(10,5,"red");
//   myRectangle1.printDescription()

  //getters setters gamoikeneba:
  //განსაზღვრეთ მეთოდები კლასზე, რომლებიც შემდეგ გამოიყენება, 
  //თითქოს ისინი თვისებებია, ისინი ჰგვანან თვისებებს, მაგრამ 
  //ისინი კლასის მეთოდებია

  class Square {
    constructor (_width){
        this.width = _width 
        this.height = _width 
    }

    get area (){
        return this.width + this.height;
    }
  }
  let square1 = new Square(25)
  console.log(square1.area)    // () agaraa sachirp
  


