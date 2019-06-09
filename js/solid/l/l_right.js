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
  sayThanks() {
    console.log('thanks!')
  }
}


pizzaStorage = new PizzaStorage();
customer = new Customer('bill', pizzaStorage);
fatCustomer = new FatCustomer('bob', pizzaStorage);

customer.eat();
console.log(pizzaStorage.count);  // 9

fatCustomer.eat();
console.log(pizzaStorage.count);    // 8
