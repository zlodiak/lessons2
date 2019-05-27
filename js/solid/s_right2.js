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
    constructor(objects, outputer) {
        this.objects = objects;
        this.outputer = outputer;
    }

    getSum() {
        let sum = 0;
        this.objects.forEach(obj => {
            sum += obj.calcArea();
        })
        this.outputer.output(sum)
        return sum;
    }
}


class Outputer {
    output(value) {
        console.log('Is calculated:', value);
    }
}


rectangle = new Rectangle(3, 4);
circle = new Circle(5);

outputer = new Outputer();
summator = new Summator([rectangle, circle], outputer);

sum = summator.getSum();