const { MnObject } = Marionette; // import { MnObject } from 'backbone.marionette';

const notify = Backbone.Radio.channel('notify');

const User = Backbone.Model.extend({
  defaults: {
    'isAuth': false
  }
});

const NotificationHandler = MnObject.extend({
  channelName: 'notify',

  radioRequests: {
    'show:success': 'showSuccessMessage',
    'show:error': 'showErrorMessage'
  },

  radioEvents: {
    'user:logged:in': 'handleLogin',
    'user:logged:out': 'handleLogout'
  },

  showSuccessMessage(message) {
    console.log(message);
  },

  showErrorMessage(message) {
    console.log(message);
  },

  handleLogin(user) {
    console.log(user.get('isAuth'));
  },

  handleLogout(user) {
    console.log(user.get('isAuth'));
  }
});

const userModel = new User();
const notificationHandler = new NotificationHandler();

userModel.set('isAuth', true);

notify.request('show:error', 'A generic error occurred!');
notify.trigger('user:logged:in', userModel);