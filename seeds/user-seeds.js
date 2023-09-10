const { User } = require('../models');

const userData = [
  {
    username: 'Mary Smith',
    email: "mary@email.com",
    password: "abcd1234",
  },
];

const seedUser = () => User.bulkCreate(userData);


module.exports = seedUser;
