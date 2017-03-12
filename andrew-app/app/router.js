import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact');
  this.route('booking');
  this.route('payment');
  this.route('who');
  this.route('what');
  this.route('when');
  this.route('groupz');
});

export default Router;
