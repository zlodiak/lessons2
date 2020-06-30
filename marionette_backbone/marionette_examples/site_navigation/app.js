const { View, Application } = Marionette; 

const MyViewHome = View.extend({
  tagName: 'h1',
  template: _.template('The Home page')
});

const MyViewContact = View.extend({
  tagName: 'h1',
  template: _.template('The Contact page')
});

const MyViewAbout = View.extend({
  tagName: 'h1',
  template: _.template('The About page')
});


// точка входа в приложение, привязанная к ргиону
const App = Application.extend({
  region: '#main-content',

  onStart() {
    Backbone.history.start();
  }
});

const MyApp = new App(); 


// роутер отслеживает часть адреса после # и запускает соответствующий обработчик. роутер по определению связан только с корневой точкой входа
var Router = Backbone.Router.extend({
  routes: {
    '': 'HomePage',
    'contact': 'ContactPage',
    'about': 'AboutPage'
  },
  HomePage() {
    MyApp.showView(new MyViewHome());   // отрисовывает вьюху в регионе точки входа
  },
  ContactPage() {
    MyApp.showView(new MyViewContact());
  },
  AboutPage() {
    MyApp.showView(new MyViewAbout());
  }
});


const AppRouter = new Router()

MyApp.start()