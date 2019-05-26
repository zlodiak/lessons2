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
summator = new Summator([rectangle, circle]);

sum = summator.getSum();

outputer = new Outputer();
outputer.output(sum);


// когда приложение начнёт расти, то класс Outputer может иметь 3 способа вывода:
// в консоль, во внешний сервис, в текстовый файл. если бы этот функционал по-прежнему содержался в Summator(), то сложность бы было контролировать сложнее 
// и кроме того может так случиться, что над способом вывода работает одна команда, а над вычислением суммы - другая. в этом случае Summator() мог бы иметь 2 причины для изменения, что противоречит принципу единой ответственности
// потому что в пределах одного класса функционалы вычисления суммы и вывода могут иметь общие процедуры, которые одна команда может изменить, не зная, что она используется в другой командой.
// однако 
//
//
//
//
//
//
//
//
//
//
//