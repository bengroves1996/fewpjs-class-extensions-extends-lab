// Your code here
// class Pet {
//     constructor(name, sound) {
//       this.name = name;
//       this.sound = sound;
//     }
  
//     speak() {
//       return `${this.name} says ${this.sound}!`
//     }
//   }
  
//   class Dog extends Pet {
//     // inherits constructor from Pet
//   }


class Polygon {
    constructor(sides){
        this.sides = sides
    }
    get countSides() {
        return this.sides.length 
    }

    get perimeter() {
       return this.sides.reduce((a, b) => a + b, 0)
    }

}

  class Triangle extends Polygon {
    get isValid (){
        let x = this.sides[0]
        let y = this.sides[1]
        let z = this.sides[2]
        if  ((x+z < y ) || (z+y < x ) || (x+y) < z){
            return  false
        }
        return true
    }
  }


  class Square extends Polygon{

    get isValid(){
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        let d = this.sides[3]
        if (a === b && a === c && a === d){
            return true
        }
        return false
    }

    get area(){
        return this.sides[0] * this.sides[1]
        }
  }