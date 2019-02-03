#!/usr/bin/env python3

from abc import ABCMeta, abstractmethod
 
 
class IStrategy:
    __metaclass__ = ABCMeta
 
    @abstractmethod
    def algorithm(self):
        pass
 
 
class ConcreteStrategy1(IStrategy):
    def algorithm(self):
        print("Выполняется алгоритм стратегии 1")
 
 
class ConcreteStrategy2(IStrategy):
    def algorithm(self):
        print("Выполняется алгоритм стратегии 2")
 
 
class Context:
    def __init__(self, strategy):
        self.strategy = strategy
 
    def execute_operation(self):
        self.strategy.algorithm()
 
 
if __name__ == '__main__':
    context = Context(ConcreteStrategy1())
    context.execute_operation()
 
    context = Context(ConcreteStrategy2())
    context.execute_operation()