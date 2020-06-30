const { View } = Marionette; // import { View } from 'backbone.marionette';

const MyModel = Backbone.Model.extend();  // класс модели
const MyCollection = Backbone.Collection.extend({
  model: MyModel   // коллекция моделей данного типа
});

// инициализируем коллекцию двумя объектами
const myCollection = new MyCollection([
  {title: 'Backbone.js'}, 
  {title: 'Marionette.js'}
]);

const myModel = new MyModel();

const MyView = View.extend({
  // слушаем модель
  modelEvents: {
    'change:title': 'handleChangeAttr'
  },
  // слушаем коллекцию
  collectionEvents: {
    'update': 'handleCollectionUpdate'
  },
  
  handleChangeAttr() {
    console.log('title was changed');
  },
  handleCollectionUpdate() {
    console.log('models were added or removed in the collection');
  }
});

// связываем вьюху с моделью и коллекцией
const myView = new MyView({
  model: myModel,
  collection: myCollection
});

myModel.set({'title': 'Backbone.Radio.js'});
myCollection.add(myModel);