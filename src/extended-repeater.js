const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  let repStr = "";
  let addRepStr = "";
  if (options === undefined) return "";
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.additionRepeatTimes === undefined)
    options.additionRepeatTimes = 1;
  if (options.separator === undefined) options.separator = "+";
  if (options.additionSeparator === undefined) options.additionSeparator = "|";
  options.addition =
    options.addition === undefined ? "" : String(options.addition);

  if (options.additionRepeatTimes > 0) {
    repStr = new Array(options.additionRepeatTimes)
      .fill(options.addition)
      .join(options.additionSeparator);
  }
  str += repStr;
  if (options.repeatTimes > 0) {
    addRepStr = new Array(options.repeatTimes)
      .fill(str)
      .join(options.separator);
  }
  return addRepStr;
}

repeater("STRING", {
  repeatTimes: 3,
  separator: "**",
  addition: "PLUS",
  additionRepeatTimes: 3,
  additionSeparator: "00",
});

module.exports = {
  repeater,
};
