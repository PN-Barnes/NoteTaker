const noteTitle = document.getElementById('noteTitle')
const noteText = document.getElementById('noteText')
const addButton = document.getElementById('addButton')

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

const postNote = (tip) =>
fetch('http://localhost:3001/api/notes', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(tip),
})
  .then((response) => response.json())
  .then((data) => {
    alert(data);
    createCard(tip);
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


addButton.addEventListener('click', addNote)