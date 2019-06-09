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


class FatCustomer extends Customer{
  eat() {
    this.storage.minus(1);
    // this.storage.minus(3);   // wrong!
  }
}


class Main {
  action(eater) {
    eater.eat();
  }
}

pizzaStorage = new PizzaStorage();
customer = new Customer(pizzaStorage);
FatCustomer = new FatCustomer(pizzaStorage);

main = new Main;
main.action(customer);  // если аргумент заменить на FatCustomer, то результат не изменится
console.log(pizzaStorage.count); // минус 1 пицца

main = new Main;
main.action(FatCustomer);    // если аргумент заменить на Customer, то результат не изменится
console.log(pizzaStorage.count);  // минус 1 пицца


