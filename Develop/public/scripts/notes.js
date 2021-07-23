const noteTitle = document.getElementById('noteTitle')
const noteText = document.getElementById('noteText')
const addButton = document.getElementById('addButton')

const addNote = event => {
    event.preventDefault();
    console.log('Add Note submitted');
    
    const noteName = noteTitle.value;
    const note = noteText.value;

    const newNote = {
        noteTitle: noteName,
        note: note
    
    }
}


addButton.addEventListener('click', addNote)