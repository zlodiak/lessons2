class Husband {
    constructor() {
        this.wife = new Wife();
    }

    eat() {
        console.log('Im eat:', this.wife.getFood());
    }
}


class Wife {
    getFood() {
        return 'FOOD';
    }
}


husband = new Husband();
husband.eat();
