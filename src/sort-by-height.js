const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = arr.filter((item) => item > 0).sort((a, b) => a - b);

  const indexArr = [];
  arr.forEach((item, index) => {
    if (item === -1) {
      indexArr.push(index);
    }
  });

  indexArr.forEach((item) => {
    result.splice(item, 0, -1);
  });

  return result;
}

module.exports = {
  sortByHeight,
};
