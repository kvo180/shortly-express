const crypto = require('crypto');

/************************************************************/
// Add any hashing utility functions below
/************************************************************/

var hashFunction = (password) => {
  const hash = crypto.createHash('sha256');
  hash.update(password);
  //console.log("this is hex of hashed pswd", hash.digest('hex'))
  return hash.digest('hex');
}

module.exports.hashFunction = hashFunction;