import Utils from '../utils.js';
// import NotesData from '../data/local/notes.js';
import NotesApi from '../data/remote/notes-api.js';

const home = () => {
    const noteListContainerElement = document.querySelector('#noteListContainer');
    const noteListElement = noteListContainerElement.querySelector('note-list');

    const showNotes = () => {
        NotesApi.getNotes()
        .then((result) => {
            displayResult(result);
            showNoteList();
        });

        // const result = NotesData.getAll();
        // displayResult(result);

        // showNoteList();
    };

    const displayResult = (notes) => {
        const noteItemElements = notes.map((note) => {
            const noteItemElement = document.createElement('note-item');
            noteItemElement.note = note;

            return noteItemElement;
        });

        Utils.emptyElement(noteListElement);
        noteListElement.append(...noteItemElements);
    };

    const showNoteList = () => {
        Array.from(noteListContainerElement.children).forEach((element) => {
            Utils.hideElement(element);
        });
        Utils.showElement(noteListElement);
    };

    showNotes();
};

export default home;