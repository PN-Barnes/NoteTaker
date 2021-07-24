// const noteBox = document.getElementById('noteBox')
// const noteTitle = document.getElementById('noteTitle')
// const noteText = document.getElementById('noteText')
// const noteCard = document.getElementById('noteCard')
// const noteList = document.getElementById('noteList')
// const addButton = document.getElementById('addButton')

 const noteTitle = document.querySelector('.note-title');
 const noteText = document.querySelector('.note-textarea');
 const saveNoteBtn = document.querySelector('.save-note');
 const newNoteBtn = document.querySelector('.new-note');
 const noteList = document.querySelectorAll('.list-container .list-group');

// FUNCTION CREATE NOTE CARD WHEN IT IS RETRIEVED FROM SERVER 
const createNote = (note) => {
  const listItem = document.createElement('li')

  listItem.setAttribute('class', 'list-group-item')

  listItem.innerHTML = `<h4>${note.noteTitle}</h4>
                        <p>${note.note}</p>
                        `

  noteList.appendChild(listItem)
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
    console.log(data);
    createNote(note);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  
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
  
  
  getNotes().then((data) => data.forEach((note) => createNote(note) ))
  saveNoteBtn.addEventListener('click', addNote)