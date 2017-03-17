define('lodash/_castSlice', ['exports', 'lodash/_baseSlice'], function (exports, _lodash_baseSlice) {
  'use strict';

  /**
   * Casts `array` to a slice if it's needed.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {number} start The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the cast slice.
   */
  function castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return !start && end >= length ? array : (0, _lodash_baseSlice['default'])(array, start, end);
  }

  exports['default'] = castSlice;
});