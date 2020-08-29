import { storageService } from './storage-service.js'
import { utilService } from './utils.js'

const NOTES_KEY = 'myNotes';

export const keepService = {
    query,
    removeNote,
    addNote,
    getEmptyNote,
    removeTodo,
    toggleTodo,
    setNoteColor,
    addTodo,
    editNote
}

var notes;

var gNotes = [
    {
        id: 'p101',
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
        style: {
            bcg: '#FF0000'
        }
    },
    {
        id: 'p102',
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "How was it"
        },
        style: {
            bcg: '#FF0000'
        }
    },
    {
        id: 'p103',
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Me playing Mi!"
        },
        style: {
            bcg: '#FF0000'
        }
    }
];

function query() {
    notes = storageService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length) {
        notes = gNotes;
        storageService.saveToStorage(NOTES_KEY, notes)
    }
    return Promise.resolve(notes)
}

function removeNote(noteToRemove) {
    notes = notes.filter(note => note !== noteToRemove);
    storageService.saveToStorage(NOTES_KEY, notes)
}

function removeTodo(todoNote, todoId) {
    todoNote.info.todos = todoNote.info.todos.filter(todo => { return todo.id !== todoId })
    storageService.saveToStorage(NOTES_KEY, notes)
}

function addNote(note) {
    let newNote;
    const noteId = utilService.makeId();
    switch (note.type) {
        case 'NoteTxt':
            newNote = {
                type: "NoteText",
                isPinned: true,
                info: {
                    txt: note.inputContent
                },
                style: {
                    bcg: '#FF0000'
                }
            }
            break;
        case 'NoteImg':
            newNote = {
                type: note.type,
                info: {
                    url: note.inputContent,
                    title: note.moreContent
                },
                style: {
                    bcg: '#FF0000'
                }
            }
            break;
        case 'NoteVideo':
            newNote = {
                type: note.type,
                info: {
                    url: note.inputContent,
                    title: note.moreContent
                },
                style: {
                    bcg: '#FF0000'
                }
            }
            break;
        case 'NoteTodos':
            newNote = {
                type: "NoteTodos",
                info: {
                    color: '#FF0000',
                    label: note.inputContent,
                    todos: [
                        {
                            txt: note.moreContent,
                            doneAt: Date.now(),
                            id: utilService.makeId(),
                            isDone: false
                        },
                    ],
                },
                style: {
                    backgroundColor: '#FF0000'
                }
            }
            break;
        default: break;
    }

    newNote['id'] = noteId;
    notes.push(newNote)
    storageService.saveToStorage(NOTES_KEY, notes)
    return newNote;
}

function toggleTodo(todos, todoId) {
    todos.forEach(todo => {
        if (todo.id === todoId) todo.isDone = !todo.isDone;
    })
    storageService.saveToStorage(NOTES_KEY, notes)
}

function getEmptyNote() {
    return {
        type: 'NoteTxt',
        inputContent: '',
        moreContent: [],
    }
}

function setNoteColor(note, bcg) {

    notes.forEach(item => {
        if (item === note) note.style.bcg = bcg;
    })
    storageService.saveToStorage(NOTES_KEY,notes)
}

function addTodo(noteToEdit,txt){

    let newTodo = {
        txt,
        doneAt: Date.now(),
        id: utilService.makeId(),
        isDone: false
    }

    let noteToEditIdx = notes.findIndex(note => noteToEdit.id === note.id)
    notes[noteToEditIdx].info.todos.push(newTodo)
    storageService.saveToStorage(NOTES_KEY, notes)
}

function editNote(content,noteType,noteId){
    console.log(content,noteType,noteId);
    const noteIdx = notes.findIndex(note => {return note.id === noteId})

    let field;
    switch (noteType) {
        case 'NoteTxt':
            field = 'txt';
            break;
        case 'NoteImg':
            field = 'title';
            break;
        case 'NoteVideo':
            field = 'title';
            break;
        case 'NoteTodos':
            field = 'label';
            break;
        default: break;
    }

    notes[noteIdx].info[field] = content;
    storageService.saveToStorage(NOTES_KEY,notes)
}