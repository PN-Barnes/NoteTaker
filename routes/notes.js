const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../public/helpers/fsUtils');
const uuid = require('../public/helpers/uuid');

// GET ROUTE FOR RETRIEVING ALL NOTES
notes.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

// POST ROUTE for new notes
notes.post('/', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body)

    const { noteTitle, note } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        Id: uuid()
      };

      readAndAppend(newNote, './db/db.json');
      res.json(`Note Added Successfully 🚀`)
    }  else {
        res.error('Error in handling note')
    }
  });

module.exports = notes;