const utils = require('../lib/hashUtils');
const Model = require('./model');

// Write you session database model methods here

class Sessions extends Model {
  constructor() {
    super('sessions');
  }

  get(options) {
    return super.get.call(this, options);
  }

  create(options) {
    return super.create.call(this, options);
  }

  delete(options) {
    return super.delete.call(this, options);
  }

  compare() {

  }
}