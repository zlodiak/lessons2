class PizzaStorage:
    def __init__(self):
        self.count = 10

    def minus(self, count):
        self.count = self.count - count


class Customer:
    def __init__(self, name, storage):
        self.name = name
        self.storage = storage

    def eat(self):
        self.storage.minus(1)


class FatCustomer(Customer):
    def __init__(self, name, storage, logger):
        super().__init__(name, storage)
        self.logger = logger

    def eat(self):
        self.storage.minus(1)
        self.logger.write_to_log('fat eat')

    def sayThanks(self):
        print('thanks!')


class Logger:
    def write_to_log(self, text):
        print('LOG: ', text)


pizzaStorage = PizzaStorage()
customer = Customer('bill', pizzaStorage)
fatCustomer = FatCustomer('bob', pizzaStorage,  Logger())

customer.eat()
print(pizzaStorage.count)

fatCustomer.eat()
print(pizzaStorage.count)