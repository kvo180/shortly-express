const crypto = require('crypto');

/************************************************************/
// Add any hashing utility functions below
/************************************************************/

var hashFunction = (string) => {
  const hash = crypto.createHash('sha256');
  hash.update(string);
  //console.log("this is hex of hashed pswd", hash.digest('hex'))
  return hash.digest('hex');
}

module.exports.hashFunction = hashFunction;