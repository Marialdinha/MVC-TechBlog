const seedUser = require('./user-seeds');
const seedBlog = require('./blog-seeds');
const seedComment = require('./comments-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.info('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.info('\n----- USERS SEEDED -----\n');
  await seedBlog();
  console.info('\n----- BLOGS SEEDED -----\n');
  await seedComment();
  console.info('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
