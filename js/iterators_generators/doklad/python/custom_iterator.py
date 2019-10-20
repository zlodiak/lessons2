class Obj():  # Итерируемый объект
  def __init__(self, word):
    self.word = word
 
  def __iter__(self):
    return Iterator(self.word)
 
class Iterator:   # Итератор
  def __init__(self, word):
    self.word = word
    self.index = 0
 
  def __next__(self):
    try:
      letter = self.word[self.index]
      self.index += 1
      return letter  
    except IndexError:
      raise StopIteration()    
 
  def __iter__(self):
    return self
 
 
obj = Obj('sergey')
it = iter(obj)
 
print(it.__next__())
print(it.__next__())
print(it.__next__())
print(it.__next__())
print(it.__next__())
print(it.__next__())
 
print(it.__iter__())