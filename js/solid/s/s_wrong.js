class Rectangle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }    

  calcArea() {
    return this.x * this.y;
  }
}


class Circle {
  constructor(r) {
    this.r = r;
  }    

  calcArea() {
    return Math.pow(this.r, 2) * Math.PI;
  }
}


class Summator {
    constructor(objects) {
        this.objects = objects;
    }

    getSum() {
        let sum = 0;
        this.objects.forEach(obj => {
            sum += obj.calcArea();
        })
        this.sum = sum;
    }

    outputSum() {
        console.log('Is calculated:', this.sum);
    }
}


rectangle = new Rectangle(3, 4);
circle = new Circle(5);
summator = new Summator([rectangle, circle]);

summator.getSum();
summator.outputSum();