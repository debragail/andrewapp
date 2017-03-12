define('lodash/valuesIn', ['exports', 'lodash/_baseValues', 'lodash/keysIn'], function (exports, _lodash_baseValues, _lodashKeysIn) {
  'use strict';

  /**
   * Creates an array of the own and inherited enumerable string keyed property
   * values of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property values.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.valuesIn(new Foo);
   * // => [1, 2, 3] (iteration order is not guaranteed)
   */
  function valuesIn(object) {
    return object == null ? [] : (0, _lodash_baseValues['default'])(object, (0, _lodashKeysIn['default'])(object));
  }

  exports['default'] = valuesIn;
});