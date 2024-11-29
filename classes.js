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

//   class Square {
//     constructor (_width){
//         this.width = _width 
//         this.height = _width 
//         this.numOFRequestForArea = 0
//     }

//     get area (){
//         this.numOFRequestForArea++
//         return this.width * this.height;
//     }

//     set area(area){
//         this.width = Math.sqrt(area)   //kvadratul fesvs abtunebs
//         this.height = this.width
       
//     }
//   }
//   let square1 = new Square(4)
//   console.log(square1.area)    // () agaraa sachirp
//   square1.area = 25
//   console.log(square1.area)
//  console.log(square1.numOFRequestForArea)

// classes static methods 
//ის რეალურად არ ვარ ინსტანციირებული ობიექტის ნაწილი, ის
// შეიქმნა, ამიტომ სტატიკური მეთოდი არ საჭიროებს კლასის 
//ინსტანციის შექმნას გამოსაყენებლად

// class Square {
//     constructor(_width){
//         this.width = _width 
//         this.height = _width 
//     }
//     static equals (a, b){
//         return a.width + a.height === b.width + b.height
//     }

//     static isValidimensions (width,height){
//         return width === height;
//     }

// }
// let square1 = new Square(8)
// let square2 = new Square(8)

// console.log(Square.equals(square1,square2))
// console.log(Square.isValidimensions(6,6))


// classes inheritance & extends

// class Person {
//     constructor(_name, _age){
//         this.name = _name 
//         this.age = _age;
//     }
//     describe(){
//         console.log(`I am ${this.name} and I am ${this.age} years`)
//     }
// }
// class Programmer extends Person {
//     constructor(_name,_age, _yearsOfExperience) {
//         super(_name,_age) 
//         //custom behaviour
//         this.yearsOfExperience = _yearsOfExperience
//     }
//     code(){
//         console.log(`${this.name} is coding`)
//     }
// }
// const programmers = [
//     new Programmer ('Dom',56,12),
//     new Programmer('jeff',24,3)
// ]
// // let person1 = new Person('jeff', 45)
// // let programmer1 = new Programmer("dom",42,12)

// // programmer1.code()

// // console.log(programmers)
// function developSoftware(programmers){
//     // develo software
//     for(let programmer of programmers){
//         programmer.code()
//     }
// }
// developSoftware(programmers)

// //class polymorphism
//პოლიმორფიზმი არის მეთოდის ხელახალი განსაზღვრის აქტი 
//მშობლის შვილობილი კლასის შიგნით
// class Animal {
//     constructor (name){
//         this.name = name
//     }
//     makeSound () {
//         console.log(` generic animal sound!`)
//     }
// }
// class Dog extends Animal {
//     constructor (name) {
//         super(name)
//     }
//     makeSound(){
//         super.makeSound()
//         console.log(`woof! woof!`)
//     }
// }
// const a1 = new Animal('animal ')
// const a2 = new Dog('jeff')
// a1.makeSound()
// a2.makeSound()

// classesin practise

