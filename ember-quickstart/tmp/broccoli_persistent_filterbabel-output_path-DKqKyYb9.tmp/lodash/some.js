define('lodash/some', ['exports', 'lodash/_arraySome', 'lodash/_baseIteratee', 'lodash/_baseSome', 'lodash/isArray', 'lodash/_isIterateeCall'], function (exports, _lodash_arraySome, _lodash_baseIteratee, _lodash_baseSome, _lodashIsArray, _lodash_isIterateeCall) {
  'use strict';

  /**
   * Checks if `predicate` returns truthy for **any** element of `collection`.
   * Iteration is stopped once `predicate` returns truthy. The predicate is
   * invoked with three arguments: (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   * @example
   *
   * _.some([null, 0, 'yes', false], Boolean);
   * // => true
   *
   * var users = [
   *   { 'user': 'barney', 'active': true },
   *   { 'user': 'fred',   'active': false }
   * ];
   *
   * // The `_.matches` iteratee shorthand.
   * _.some(users, { 'user': 'barney', 'active': false });
   * // => false
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.some(users, ['active', false]);
   * // => true
   *
   * // The `_.property` iteratee shorthand.
   * _.some(users, 'active');
   * // => true
   */
  function some(collection, predicate, guard) {
    var func = (0, _lodashIsArray['default'])(collection) ? _lodash_arraySome['default'] : _lodash_baseSome['default'];
    if (guard && (0, _lodash_isIterateeCall['default'])(collection, predicate, guard)) {
      predicate = undefined;
    }
    return func(collection, (0, _lodash_baseIteratee['default'])(predicate, 3));
  }

  exports['default'] = some;
});