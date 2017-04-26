const models = require('../models');
const Promise = require('bluebird');
const utils = require('../lib/hashUtils');

module.exports.createSession = (req, res, next) => {

  // let agent = req.get('User-Agent');
  // console.log({req});

  // Promise.resolve(models.Sessions.get(req.cookies.shortlyid) 

  if (Object.keys(req.cookies).length === 0) {
    // make a new session
    var hashedString = utils.hashFunction(Math.random().toString());
    req.session = {hash: hashedString};
    res.cookie('shortlyid', req.session.hash);
    // console.log({res});
  }
  
  next();
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

