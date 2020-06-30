const { View } = Marionette; 

var MyView = View.extend();
var myView = new MyView();

const OtherView = View.extend({
  initialize(myView) {
    this.listenTo(myView, 'event:happened', this.logCall);	// слушаем определённое событие во вьюхе myView
  },
  logCall(myVal) {
    console.log(myVal);
  }
});
var otherView = new OtherView(myView);

myView.triggerMethod('event:happened', 'some value');