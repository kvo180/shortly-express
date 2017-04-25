const utils = require('../lib/hashUtils');
const Model = require('./model');

// Write you user database model methods here

class User extends Model {
  constructor() {
    super('users');
  }

  create(user) {
    return super.create.call(this, user);
  }

  get(options) {
    return super.get.call(this, options);
  }

}

module.exports = new User();