define('lodash/value', ['exports', 'lodash/wrapperValue'], function (exports, _lodashWrapperValue) {
  'use strict';

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _lodashWrapperValue['default'];
    }
  });
});