import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('contact');
  this.route('booking');
  this.route('payment');
  this.route('who');
  this.route('what');
  this.route('when');

  /*  this.route('menu'), function() {
      this.route('who', { path: '/who/:who_id' });
      this.route('what', { path: '/what/:what_id' });
      this.route('when', { path: '/when/:when_id' });
      this.route('groupz', { path: '/groupz/:groupz_id' });
      } */
  this.route('menu');
  this.route('test');
  this.route('item');
});

export default Router;
