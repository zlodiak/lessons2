const { View } = Marionette;

const MyView = View.extend({
  template: _.template('MyView template. Click on me'),
  triggers: {
    click: 'view:clicked' // при клике по этой вьюхе событие view:clicked всплывает в родительскую вьюху
  }
});


// эта вьюха привязана к #container и имеет регион foo. при инициализации регион foo заполняется дочерним вью
const ParentView = View.extend({
  el: '#container',
  regions: {
    foo: '.foo-hook'
  },
  childViewEvents: {
    'view:clicked'(childView) { // отлавливает событие, всплывающее из дочерней вьюхи
      console.log('Function called for ' + childView);
    }
  },

  initialize() {
    this.showChildView('foo', new MyView());
  }
});

const parentView = new ParentView();
