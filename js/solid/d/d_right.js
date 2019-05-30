class Husband {
    constructor(provider) {
        this.provider = provider;
    }

    eat() {
        console.log('Im eat:', this.provider.getFood());
    }
}


class Wife {
    getFood() { return 'FOOD' }
}

class Restaurant {
    getFood() { return 'FOOD' }
}

class Grandmother {
    getFood() { return 'FOOD' }
}


wife = new Wife();
husband = new Husband(wife);
husband.eat();

restaurant = new Restaurant();
husband = new Husband(restaurant);
husband.eat();

grandmother = new Grandmother();
husband = new Husband(grandmother);
husband.eat();
