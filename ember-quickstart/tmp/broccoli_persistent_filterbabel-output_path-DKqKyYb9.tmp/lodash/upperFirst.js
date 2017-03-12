define('lodash/upperFirst', ['exports', 'lodash/_createCaseFirst'], function (exports, _lodash_createCaseFirst) {
  'use strict';

  /**
   * Converts the first character of `string` to upper case.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.upperFirst('fred');
   * // => 'Fred'
   *
   * _.upperFirst('FRED');
   * // => 'FRED'
   */
  var upperFirst = (0, _lodash_createCaseFirst['default'])('toUpperCase');

  exports['default'] = upperFirst;
});