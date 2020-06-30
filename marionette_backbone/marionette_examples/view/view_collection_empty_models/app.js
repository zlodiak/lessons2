const { View, CollectionView } = Marionette;


const ChildView = View.extend({
  template: _.template('<button class="button">Click me</button><%- a %>'),
  events: {
    'click .button': function() {
      this.trigger('show:message', 'foo');
      this.triggerMethod('show:message', 'bar');
    }
  },
});


const ParentView = CollectionView.extend({
  collection: new Backbone.Collection([{a: 100}, {a: 200}]),   // здесь коллекция моделей. для каждой модели рисуется вьюха
  
  childView: ChildView,     // здесь класс вьюх. из каждой делается инстанс для соответствующей модели

  childViewTriggers: {
    'show:message': 'child:show:message',
  },

  onChildShowMessage: function (message) {
    console.log('A child view fired show:message with ' + message);
  },
});

const parentView = new ParentView();
parentView.render();
$('body').append(parentView.$el);