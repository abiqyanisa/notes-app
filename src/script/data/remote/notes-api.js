import { error } from "console";
import { response } from "express";

const BASE_URL = 'https://notes-api.dicoding.dev/v2';

class NotesApi {
    // static createNote(note) {
    //     return fetch(`${BASE_URL}/notes`, {
    //         method: 'POST',
    //         body: JSON.stringify(note)
    //     })
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((responseJson) => {
    //         showResponseMessage(responseJson.message);
    //     })
    //     .catch((error) => {
    //         showResponseMessage(error);
    //     });
    // }

    static getNotes() {
        return fetch(`${BASE_URL}/notes`, {
            method: 'GET'
        })
        .then((response) => {
            return response.json();
        })
        .then((responseJson) => {
            showResponseMessage(responseJson.message);
        })
        .catch((error) => {
            showResponseMessage(error);
        });
    }
}

export default NotesApi;