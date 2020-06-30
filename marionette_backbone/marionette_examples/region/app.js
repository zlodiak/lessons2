const { View, Region } = Marionette; // import { View, Region } from 'backbone.marionette';

const AnimatedRegion = Region.extend({
  attachHtml(view) {    
    view.$el
      .css({display: 'none'})
      .appendTo(this.$el);      
    if (!this.isSwappingView()) view.$el.fadeIn('slow')
  },
  
  removeView(view) {
    view.$el.fadeOut('slow', () => {
      this.destroyView(view);
      if (this.currentView) this.currentView.$el.fadeIn('slow');
    })    
  }  
});

const ItemView = View.extend({
  initialize({ name }) {
    this.model = new Backbone.Model({name});
    this.viewName = name;
  },
  template: _.template('<h1>This is <%= name %></h1>')
});

const MainView = Mn.View.extend({
  el: '#main-region',
  regions: {
    content: {
      el: '#content',
      regionClass: AnimatedRegion      
    }
  },  
  events: {
    'click .showview': 'onShowViewClick',
    'click .emptyview': 'onEmptyViewClick'
  },
  onShowViewClick(e) {
    const viewName = e.target.dataset.view;
    const view = new ItemView({
      name: viewName,
      className: viewName
    })
   this.showChildView('content', view);    
  },
  onEmptyViewClick(e) {
    this.getRegion('content').empty();    
  }
});

const mainView = new MainView();