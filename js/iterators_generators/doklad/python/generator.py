import random

def gen_func():
  while True:
    yield random.random()

generator = gen_func()

print('generator function', gen_func) # генераторная функция
print('generator', generator)     # генератор

print('value: ', generator.__next__())
print('value: ', generator.__next__())
print('value: ', generator.__next__())

# OUTPUT:
# generator function <function gen_func at 0x7fe71d848c80>
# generator <generator object gen_func at 0x7fe71d7732d0>
# value:  0.5982845385357144
# value:  0.3308434359315522
# value:  0.3165169253705432