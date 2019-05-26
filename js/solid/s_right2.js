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
    constructor(objects, logger) {
        this.objects = objects;
        this.logger = logger;
    }

    getSum() {
        let sum = 0;
        this.objects.forEach(obj => {
            sum += obj.calcArea();
        })
        this.logger.write_in_log('sum is calculated') 
        return sum;
    }
}


class Outputer {
    output(value) {
        console.log('Is calculated:', value);
    }
}


class Logger {
    write_in_log(text) {
        console.log('LOG:', text)
    }
}


rectangle = new Rectangle(3, 4);
circle = new Circle(5);
logger = new Logger()
summator = new Summator([rectangle, circle], logger);

sum = summator.getSum();

outputer = new Outputer();
outputer.output(sum);