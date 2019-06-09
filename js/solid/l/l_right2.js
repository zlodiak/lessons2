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
  constructor(name, storage, logger) {
    super(name, storage);
    this.logger = logger;
  }

  eat() {
    this.storage.minus(1);
    this.logger.write_to_log('fat eat');
  }

  sayThanks() {
    console.log('thanks!')
  }
}


class Logger {
  write_to_log(text) {
    console.log('LOG: ', text);
  }
}


pizzaStorage = new PizzaStorage();
customer = new Customer('bill', pizzaStorage);
fatCustomer = new FatCustomer('bob', pizzaStorage, new Logger());

customer.eat();                         
console.log(pizzaStorage.count);      // 9

fatCustomer.eat();
console.log(pizzaStorage.count);      // 8
