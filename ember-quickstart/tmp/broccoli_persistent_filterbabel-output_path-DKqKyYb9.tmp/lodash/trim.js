define('lodash/trim', ['exports', 'lodash/_baseToString', 'lodash/_castSlice', 'lodash/_charsEndIndex', 'lodash/_charsStartIndex', 'lodash/_stringToArray', 'lodash/toString'], function (exports, _lodash_baseToString, _lodash_castSlice, _lodash_charsEndIndex, _lodash_charsStartIndex, _lodash_stringToArray, _lodashToString) {
  'use strict';

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /**
   * Removes leading and trailing whitespace or specified characters from `string`.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to trim.
   * @param {string} [chars=whitespace] The characters to trim.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {string} Returns the trimmed string.
   * @example
   *
   * _.trim('  abc  ');
   * // => 'abc'
   *
   * _.trim('-_-abc-_-', '_-');
   * // => 'abc'
   *
   * _.map(['  foo  ', '  bar  '], _.trim);
   * // => ['foo', 'bar']
   */
  function trim(string, chars, guard) {
    string = (0, _lodashToString['default'])(string);
    if (string && (guard || chars === undefined)) {
      return string.replace(reTrim, '');
    }
    if (!string || !(chars = (0, _lodash_baseToString['default'])(chars))) {
      return string;
    }
    var strSymbols = (0, _lodash_stringToArray['default'])(string),
        chrSymbols = (0, _lodash_stringToArray['default'])(chars),
        start = (0, _lodash_charsStartIndex['default'])(strSymbols, chrSymbols),
        end = (0, _lodash_charsEndIndex['default'])(strSymbols, chrSymbols) + 1;

    return (0, _lodash_castSlice['default'])(strSymbols, start, end).join('');
  }

  exports['default'] = trim;
});