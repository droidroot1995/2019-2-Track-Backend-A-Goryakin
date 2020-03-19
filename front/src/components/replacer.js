/* eslint-disable prefer-destructuring */
/* eslint-disable no-else-return */
/**
 ** Taken from https://github.com/iansinnott/react-string-replace/blob/master/index.js
 */

import isRegExp from 'lodash/isRegExp'
import escapeRegExp from 'lodash/escapeRegExp'
import isString from 'lodash/isString'
import flatten from 'lodash/flatten'

const replaceString = (str, match, fn) => {
  let curCharStart = 0
  let curCharLen = 0

  if (str === '') {
    return str
  } else if (!str || !isString(str)) {
    throw new TypeError('First argument must be a string')
  }

  let re = match

  if (!isRegExp(re)) {
    // eslint-disable-next-line prefer-template
    re = new RegExp('(' + escapeRegExp(re) + ')', 'gi')
  }

  const result = str.split(re)

  // Apply fn to all odd elements
  for (let i = 1, length = result.length; i < length; i += 2) {
    curCharLen = result[i].length
    curCharStart += result[i - 1].length
    result[i] = fn(result[i], i, curCharStart)
    curCharStart += curCharLen
  }

  return result
}

export const stringReplacer = (source, match, fn) => {
  let strSource = source
  if (!Array.isArray(source)) strSource = [source]

  return flatten(
    strSource.map((x) => {
      return isString(x) ? replaceString(x, match, fn) : x
    }),
  )
}
