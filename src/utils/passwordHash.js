const bcrypt = require("bcrypt");

class PasswordHash {
  hash(password) {
    return bcrypt.hashSync(password, 10);
  }

  compare(password, hashPassword) {
    return bcrypt.compareSync(password, hashPassword);
  }
}

module.exports = new PasswordHash();
