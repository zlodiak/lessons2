const { View } = Marionette; 

const MyView = View.extend({
  callMethod(myString) {
    console.log(myString + ' was passed');
  },
  initialize() {
    this.on('something:happened', this.callMethod);		// то же самое, что и в примере ниже
  },
  onMyEvent(myVal) {	// слушаемсобытие, имя обработчик формируется из имени события
    console.log(myVal + ' was passed');
  }
});

const myView = new MyView();

// слушаем событие и отправляем аргумент foo в вызванный метод
myView.on('something:happened', myView.callMethod);

// генерируем событие и передаём аргумент foo
myView.triggerMethod('something:happened', 'foo');

// генерируем событие и передаём аргумент foo
myView.triggerMethod('my:event', 'baz');