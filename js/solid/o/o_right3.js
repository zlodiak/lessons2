class PizzaStorage {
  constructor() {
    this.count = 10;
  }

  minus(count) {
    this.count = this.count - count;
  }
}


class Customer {
  constructor(storage) {
    this.storage = storage;
  }

  eat() {
    this.storage.minus(1);
  }
}


class Batman {
  constructor(storage) {
    this.storage = storage;
  }

  eat() {
    this.storage.minus(1);
  }

  useBumerang() {
    console.log('бдыщь!')
  }
}


class Main {
  action(eater) {
    eater.eat();
  }
}

pizzaStorage = new PizzaStorage();
customer = new Customer(pizzaStorage);
batman = new Batman(pizzaStorage);

main = new Main;
main.action(customer);
console.log(pizzaStorage.count);

main = new Main;
main.action(batman);
console.log(pizzaStorage.count);


