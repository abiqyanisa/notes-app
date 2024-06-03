import './script/components/index.js';
import home from './script/view/home.js';
import input from './script/view/input.js';

document.addEventListener('DOMContentLoaded', () => {
    home();
    input();
});

const notesForm = document.getElementById('form');
const title = notesForm.elements.noteTitle;
const desc = notesForm.elements.noteDesc;
const submit = notesForm.elements.submitNote;

if (desc) {
    desc.hidden = true;
    submit.hidden = true;
}

[title, desc].forEach(function(element) {
    element.addEventListener('focus', () => {
        desc.hidden = false;
        submit.hidden = false;
    });
});