class Circle{   
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    setRadius(radius){
        this.radius = radius;
    }
    getRadius(){
        return this.radius;
    }
    setColor(color){
        this.color = color;
    }
    getColor(){
        return this.color;
    }
    toString(){
        return `Circle[radius=${this.radius},color=${this.color}]`
    }
    getArea(){
        let pi = 3.14159265358979323846;
        return (pi * this.radius * this.radius);
    }
    getCircumference(){
        let pi = 3.14159265358979323846;
        return (2 * pi * this.radius).toFixed(3);
    }
    
}

let circle1 = new Circle(3.2,"red");

let area = circle1.getArea();
console.log("Area of the Circle ",area);

let circumference = circle1.getCircumference();
console.log("Circumference of the Circle ",circumference);

let circleDetails = circle1.toString();
console.log(circleDetails);

circle1.setColor("Green");
circleColor=circle1.getColor();
console.log(circleColor);
console.log("New Circle Color : ",circleColor);


circle1.setRadius(5.34);
circleRadius=circle1.getRadius();
console.log("New Circle Radius : ",circleRadius);

area = circle1.getArea();
console.log("New Area of the Circle ",area);

circumference = circle1.getCircumference();
console.log("New Circumference of the Circle ",circumference);
