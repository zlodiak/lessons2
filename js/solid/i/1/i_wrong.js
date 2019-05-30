interface Shape {
    drawCircle();
    drawSquare();
}


class Circle implements Shape {
    drawCircle(){
        console.log('circle');
    }
    
    drawSquare(){
        console.log('square');
    }  
}


class Square implements Shape {
    drawCircle(){
        console.log('circle');
    }
    
    drawSquare(){
        console.log('square');
    }  
}


c = new Circle()
c.drawCircle()
c.drawSquare()

s = new Square()
s.drawCircle()
s.drawSquare()


// circle
// square
// circle
// square