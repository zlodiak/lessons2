class Husband {
    constructor(D) {
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
    _getFood() {
        return 'a lot of FOOD';
    }
}


husband = new Husband(Wife);
husband.eat();                    // Im eat: FOOD


husband = new Husband(GrandMother);
husband.eat();                    // error
