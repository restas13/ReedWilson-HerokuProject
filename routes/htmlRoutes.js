const path = require('path');
const router = require('express').Router();

// '/notes' directory will send the notes html page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// all other routes that are not defined will render the 'index.html' page
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// exportiing the router
module.exports = router;
