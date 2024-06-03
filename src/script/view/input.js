const input = () => {
    function addNote() {
        const noteTitle = document.getElementById('noteTitle').value;
        const noteDesc = document.getElementById('noteDesc').value;
        let notes = JSON.parse(localStorage.getItem('NOTES_APPS')) || [];

        notes.push({
            id: generateUniqueId(),
            title: noteTitle,
            body: noteDesc,
            createdAt: new Date().toISOString(),
            archived: false,
        });

        saveNote(notes);
    }

    function saveNote(notes) {
        const parsed = JSON.stringify(notes);
        localStorage.setItem('NOTES_APPS', parsed);
    }

    function generateUniqueId() {
        const random = Math.random().toString(36).slice(-10);

        return `notes-${random}`;
    }

    function loadNotes() {
        const noteListElement = document.querySelector('note-list');
        const serializedNote = localStorage.getItem('NOTES_APPS')
        const notes = JSON.parse(serializedNote) || [];

        notes.forEach(note => {
            const noteItemElement = document.createElement('note-item');
            noteItemElement.note = note;
            noteListElement.append(noteItemElement);
        });
    }

    const notesForm = document.getElementById('form');
    notesForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addNote();
        location.reload();
    });
    
    loadNotes();
}

export default input;