interface Shape1 {
    drawCircle();
}

interface Shape2 {
    drawSquare();
}


class Circle implements Shape1 {
    drawCircle(){
        console.log('circle');
    }  
}


class Square implements Shape2 {   
    drawSquare(){
        console.log('square');
    }  
}


c = new Circle()
c.drawCircle()

s = new Square()
s.drawSquare()

// circle
// square