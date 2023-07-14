const router = require('express').Router();
// geting the store script
const store = require('../db/storage');

// route for getting the stored notes
router.get('/notes', (req, res) => {
  store
  // Referencing the getNotes function in store.js to get the stored notes
    .getNotes()
    .then((notes) => {
        // returning the notes data as a json
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

// Route for making/posting new notes
router.post('/notes', (req, res) => {
  store
  // Referencing the addNote function using the request body as a parameter
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// Route for deleting notes
router.delete('/notes/:id', (req, res) => {
  store
  // referencing the removeNote function in store.js, passing the address variable as a parameter
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

// Exporting the router
module.exports = router;
