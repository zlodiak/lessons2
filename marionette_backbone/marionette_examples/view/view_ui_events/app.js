const { View, Region } = Marionette; // import { View } from 'backbone.marionette';

const MyView = View.extend({
  template: _.template(`
    <button type="button" class="save-button">Save</button>
    <button type="button" class="close-button">Close</button> 
  `),
  ui: {
    save: '.save-button',
    close: '.close-button'
  },
  events: {
    'click @ui.save': 'handleSave'    // можно слушать DOMсобытия на элементе из объекта ui
  },
  triggers: {
    'click @ui.close': 'close:view'   // можно слушать DOMсобытия на элементе из объекта ui и превращать их во вью-события
  },
  
  handleSave() {
    const saveButton = this.getUI('save');
    
    saveButton.addClass('disabled');
    saveButton.attr('disabled', 'disabled');
  }
});

const myRegion = new Region({ el: $('body') });
myRegion.show(new MyView());