const { View } = Marionette;

const MyView = View.extend({
  el: '#container',   // вьюха привязана к элементу #container 
  events: {
    'click a': 'showModal'    // выполняем метод вьюхи по DOM-событию
  },
  triggers: {
    'keyup input': 'data:entered'   // генерируем событие вьюхи из события DOM(позже отлавливаем его в onDataEntered)
  },

  showModal(event) {
    event.preventDefault();
    console.log('Show the modal', event.target);
  },

  onDataEntered(view, ev) {
    console.log('Data was entered', ev.key);
  }
});

const myView = new MyView();