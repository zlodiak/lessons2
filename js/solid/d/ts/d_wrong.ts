class Husband {
    constructor() {
        this.deliver = new Wife();
    }

    eat() {
        console.log('Im eat:', this.deliver.getFood());
    }
}


class Wife {
    getFood() {
        return 'FOOD';
    }
}


husband = new Husband();
husband.eat();                // Im eat: FOOD
