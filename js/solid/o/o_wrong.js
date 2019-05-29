class PizzaStorage {
  constructor() {
    this.count = 10;
  }

  minus(count) {
    this.count = this.count - count;
  }
}


class Customer {
  constructor(name, storage) {
    this.name = name;
    this.storage = storage;
  }

  eat() {
    this.storage.minus(1);
  }
}


class FatCustomer extends Customer {
  eat(count) {
    this.storage.minus(3);  // its wrong!
    // this.storage.pop()   // its wrong!
  }
}


pizzaStorage = new PizzaStorage();
customer = new Customer('bill', pizzaStorage);
fatCustomer = new FatCustomer('bob', pizzaStorage);

customer.eat();
console.log(pizzaStorage.count);

fatCustomer.eat();
console.log(pizzaStorage.count);