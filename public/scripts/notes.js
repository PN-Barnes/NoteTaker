const noteBox = document.getElementById('noteBox')
const noteTitle = document.getElementById('noteTitle')
const noteText = document.getElementById('noteText')
const addButton = document.getElementById('addButton')

// FUNCTION CREATE NOTE CARD WHEN IT IS RETRIEVED FROM SERVER 
const createNote = (note) => {

  const 
}


// GET THE NOTES THAT EXIST WITHIN THE SERVER
const getNotes = () => 
  fetch('http://localhost:3001/api/notes', {
    method: 'GET',
    header: {
      'Content-Type': 'application/json'
    },

  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error:', error)
    })

const postNote = (note) =>
fetch('http://localhost:3001/api/notes', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(note),
})
  .then((response) => response.json())
  .then((data) => {
    alert(data);
    createNote(note);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

getNotes().then((data) => data.forEach((note) => createNote(note) ))

const addNote = event => {
  event.preventDefault();
  console.log('Add Note submitted');
  
  const noteName = noteTitle.value;
  const note = noteText.value;

  const newNote = {
      noteTitle: noteName,
      note: note
  
  }

  postNote(newNote)
}


addButton.addEventListener('click', addNote)