const { View, Application } = Marionette;

const MyModel = Backbone.Model.extend();

const MyView = View.extend({
  template: _.template('<h1><%= title %></h1>')
});

const App = Application.extend({		// это точка входа. то естьпосле старта приложения выполнится инстанс этого класса. в частности хук onStart
  region: '#main-region',

  onBeforeStart(app, options) {
  	console.log(app)	// первым аргументом неявно передаётс модель
  	console.log(options)	// вторым аргументом явно передаётся объект, который использован в вызове метода start()
    this.model = new MyModel(options.data);		// добавляем свойство в модель при создании инстанса
  },

  onStart(app, options) {
    this.showView(new MyView({	// showView это точка входа для представления. то есть корневое предтсавление, которое будет отображаться в регионе   #main-region
      model: this.model
    }));
    Backbone.history.start();
  }
});

const app = new App();

app.start({
  data: {
    title: 'Marionette says hello!'
  }
});
