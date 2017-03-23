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
  this.route('who', { path: '/who/:who_id' });
  this.route('what', { path: '/what/:what_id' });
  this.route('when', { path: '/when/:when_id' });
  this.route('groupz', { path: '/groups/:groupz_id' });
  /*  this.route('menu'), function() {
      this.route('who', { path: '/who/:who_id' });
      this.route('what', { path: '/what/:what_id' });
      this.route('when', { path: '/when/:when_id' });
      this.route('groupz', { path: '/groupz/:groupz_id' });
      } */ 
});

export default Router;
