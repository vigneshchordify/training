// 24. Write a menu driven program to calculate the area of a given object.Program should contain two classes
// Class 1: MyClass
// Class 2: Area
// Class MyClass should inherit class Area and should contain the following functions
// main()
// circle()
// square()
// rectangle()
// triangle()
// Class Area should contain the following functions to calculate the area of different objects
// circle()
// square()
// rectangle()
// triangle()
// Class MyClass extends Area{
// public static void main(string args[]){
// }
// circle() {
// }
// square() {
// }
// rectangle() {
// }
// triangle() {
// }
// }
// Class Area{
// circle(){
// }
// square(){
// }
// rectangle() {
// }
// trianggle
// 2
// Enter the length
// 2
// Output
// Area of the square is: 4Eg 2:
// Enter your choice
// Circle
// Square
// Rectangle
// Triangle
// 1
// Enter the radius
// 3
// Output
// Area of the circle is: 28.26
// Code of the program & screenshot of the outputle() {
// }
// }
// Eg 1:
// Enter your choice
// Circle
// Square
// Rectangle
// Triang





class area {
    //area of circle
    static circle(radius) {
        return Math.PI * radius * radius
    }

    //area of square
    static square(length) {
        return length * length
    }

    //area of rectangle

    static rectangle(length1, length2) {

        return length1 * length2
    }
    static triangle(base, height) {
        return 0.5 * base * height
    }
}

class firstclass extends area {
    static main() {
        alert('enter choidce, 1.circle,2.square,3.Rectangle,4.Traingle');
       

        const choice = parseInt(prompt('please enter the choice'))

        switch (choice) {
            case 1:
                const r = parseInt(prompt('Enter Radius in m'))
                alert(`The area of Circle is : ${this.circle(r)}`);
                break

            case 2:
                const side = parseInt(prompt('enter side length in m'))
                alert(`the area of Square ${this.square(side)}`);
                break
            case 3:
                const l1 = parseInt(prompt('enter side1 length in m'))
                const l2 = parseInt(prompt('enter side2 length in m'))
                alert(`the area of rectangle ${this.rectangle(l1,l2)}`);
                break
            case 4:
                const b = parseInt(prompt('enter base length in m'))
                const h = parseInt(prompt('enter height length in m'))
                alert(`the area of triangle ${this.triangle(b,h)}`);
                break
                

        }





    }
}


firstclass.main()













