define('lodash/_setData', ['exports', 'lodash/_baseSetData', 'lodash/_shortOut'], function (exports, _lodash_baseSetData, _lodash_shortOut) {
  'use strict';

  /**
   * Sets metadata for `func`.
   *
   * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
   * period of time, it will trip its breaker and transition to an identity
   * function to avoid garbage collection pauses in V8. See
   * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
   * for more details.
   *
   * @private
   * @param {Function} func The function to associate metadata with.
   * @param {*} data The metadata.
   * @returns {Function} Returns `func`.
   */
  var setData = (0, _lodash_shortOut['default'])(_lodash_baseSetData['default']);

  exports['default'] = setData;
});