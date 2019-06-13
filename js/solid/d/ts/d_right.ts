interface Deliver { 
    getFood(): string;
}


class Husband {
    constructor(D: Deliver) {
        this.deliver = new D();
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


class GrandMother {
    getFood() {
        return 'a lot of FOOD';
    }
}


husband = new Husband(Wife);
husband.eat();

husband = new Husband(GrandMother);
husband.eat();


// Im eat: FOOD
// Im eat: a lot of FOOD