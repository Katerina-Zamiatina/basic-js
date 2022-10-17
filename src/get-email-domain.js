const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let str = email.split("@");
  str.splice(0, str.length - 1);
  return str.join();
}

getEmailDomain("prettyandsimple@example.com");

module.exports = {
  getEmailDomain,
};
