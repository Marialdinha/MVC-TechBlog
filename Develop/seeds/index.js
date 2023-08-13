const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.info('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.info('\n----- USERS SEEDED -----\n');

  process.exit(0);
};

seedAll();
