const { View, CollectionView } = Marionette; // import { View, CollectionView } from 'backbone.marionette';

const collection = new Backbone.Collection([
  {title: 'Item 1'},
  {title: 'Item 2'},
  {title: 'Item 3'}
]);

const Item = View.extend({
  template: _.template('<a href=""><%= title %></a>'),
  tagName: 'li',
  triggers: {
    'click a': 'select:item'
  }
});

const MyCollectionView = CollectionView.extend({
  el: 'body',
  tagName: 'ul',
  childView: Item,
  collection: collection,
  childViewEvents: {
    'select:item': 'itemSelected'
  },

  itemSelected(childView) {
    console.log('item selected: ' + childView.model.cid);
  }
});

const collectionView = new MyCollectionView();
collectionView.render();

