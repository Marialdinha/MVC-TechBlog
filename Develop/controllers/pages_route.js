const router = require('express').Router();
const withAuth = require('../utils/auth');

// The `/` endpoint

router.get('/', async (req, res) => {
  try {
      res.render('blogWiew');
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/blogEnter', async (req, res) => {
  try {
      res.render('blogEnter');
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
      res.render('login');
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
      res.render('signup');
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/logout', async (req, res) => {
  try {
      res.render('logout');
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;