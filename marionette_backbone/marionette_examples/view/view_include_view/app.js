const { View } = Marionette; // import { View } from 'backbone.marionette';

const MySubView = View.extend({
  template: _.template('<h1>Marionette says hi!</h1>'),

  regions: {
    firstRegion: '#first-region'
  }
});

const MyView = View.extend({
  template: _.template('<div id="first-region">First region</div>'),

  regions: {
    firstRegion: '#first-region'
  },
  
  onRender() {
    this.showChildView('firstRegion', new MySubView());   // вкладываем вью в другой вью при помощи региона
  }
});

const myView = new MyView();
myView.render();

$('body').append(myView.$el);