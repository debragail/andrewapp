define('lodash/_baseAssignValue', ['exports', 'lodash/_defineProperty'], function (exports, _lodash_defineProperty) {
  'use strict';

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && _lodash_defineProperty['default']) {
      (0, _lodash_defineProperty['default'])(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  exports['default'] = baseAssignValue;
});