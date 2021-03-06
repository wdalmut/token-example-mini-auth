const { ifElse, bind, compose, isNil, flip, prop } = require('ramda')

const users = {
  "da39a3ee5e6b4b0d3255bfef95601890afd80709": {id: 1, firstname: "John", lastname: "Smith", role: "ROLE_USER", gender: 'M', username: 'john.smith@example.com'},
  "10a34637ad661d98ba3344717656fcc76209c2f8": {id: 2, firstname: "Mary", lastname: "Santoro", role: "ROLE_USER", gender: 'F', username: 'mary.santoro@example.com'},
  "3e6c06b1a28a035e21aa0a736ef80afadc43122c": {id: 3, firstname: "Michael", lastname: "Corleone", role: "ROLE_ADMIN", gender: 'M', username: 'michael.corleone@example.com'}
}

module.exports = ifElse(
  compose(isNil, flip(prop)(users)),
  compose(bind(Promise.reject, Promise), flip(prop)(users)),
  compose(bind(Promise.resolve, Promise), flip(prop)(users)),
);
