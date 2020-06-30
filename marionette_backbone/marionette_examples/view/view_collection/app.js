const { View, Application } = Marionette;


const Model = Backbone.Model.extend({
  defaults: {
    isFoo: false    // значение по умолчанию
  }
});

const FooView = Mn.View.extend({
  template: _.template('foo')
});

const BarView = Mn.View.extend({
  template: _.template('bar')
});

const MyCollectionView = Mn.CollectionView.extend({
  collection: new Backbone.Collection(),  // пустая марионетт-коллекция агрегирует пустую бекбон-коллекцию
  childView(item) {     // наблюдает получение вьюх через .add() и сразу отправляет их на отрисовку
    if(item.get('isFoo')) {
      return FooView;
    } else {
      return BarView;
    }
  }
});

const foo = new Model({
  isFoo: true
});

const bar = new Model({
  isFoo: false
});

const collectionView = new MyCollectionView();
collectionView.render();    // отрисовываем пустую коллекцию вьюх
$('#main-region').append(collectionView.$el);   // помещаем пустую отрисованную коллекцию вьюх в элемент

collectionView.collection.add(foo);   // теперь динамически добавляем в коллецию конкретную модель и дочерняя вьюха сразу отрисовывается на странице
collectionView.collection.add(bar);
