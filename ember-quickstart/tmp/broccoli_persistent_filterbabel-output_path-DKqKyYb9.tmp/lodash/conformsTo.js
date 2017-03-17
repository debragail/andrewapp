define('lodash/conformsTo', ['exports', 'lodash/_baseConformsTo', 'lodash/keys'], function (exports, _lodash_baseConformsTo, _lodashKeys) {
  'use strict';

  /**
   * Checks if `object` conforms to `source` by invoking the predicate
   * properties of `source` with the corresponding property values of `object`.
   *
   * **Note:** This method is equivalent to `_.conforms` when `source` is
   * partially applied.
   *
   * @static
   * @memberOf _
   * @since 4.14.0
   * @category Lang
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property predicates to conform to.
   * @returns {boolean} Returns `true` if `object` conforms, else `false`.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   *
   * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
   * // => true
   *
   * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
   * // => false
   */
  function conformsTo(object, source) {
    return source == null || (0, _lodash_baseConformsTo['default'])(object, source, (0, _lodashKeys['default'])(source));
  }

  exports['default'] = conformsTo;
});