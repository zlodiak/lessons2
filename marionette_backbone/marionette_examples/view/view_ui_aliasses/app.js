const { View, Region } = Marionette; // import { View } from 'backbone.marionette';

const MyView = View.extend({
  template: _.template(`
  <button type="button" class="save-button">Save</button>
  <button type="button" class="close-button">Close</button>
  `),
  ui: {       // здесь просто задаются алиасы для элементов. позже, в пределах втю к ним можно обратиться так: this.getUI('save') 
    save: '.save-button',
    close: '.close-button'
  },
  
  onDoSomething() {
    const saveButton = this.getUI('save');
    
    saveButton.addClass('disabled');
    saveButton.attr('disabled', 'disabled');
  }
});

const myRegion = new Region({ el: $('body') });
const myView = new MyView();
myRegion.show(myView);
myView.triggerMethod('do:something');