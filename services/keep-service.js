import { storageService } from './storage-service.js'
import { utilService } from './utils.js'

const NOTES_KEY = 'myNotes';

export const keepService = {
    query,
    removeNote,
    addNote,
    getEmptyNote,
    removeTodo,
    toggleTodo
}

var notes;

var gNotes = [
    {
        id: 'p101',
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: 'p102',
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "How was it"
        }
    },
    {
        id: 'p103',
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Me playing Mi!"
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
    todoNote.info.todos = todoNote.info.todos.filter(todo => {return todo.id !== todoId})
    storageService.saveToStorage(NOTES_KEY,notes)
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
                    backgroundColor: '#00d'
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
                    backgroundColor: '#00d'
                }
            }
            break;
        case 'NoteTodos':
            newNote = {
                type: "NoteTodos",
                info: {
                    label: note.inputContent,
                    todos: [
                        {
                            txt: note.moreContent,
                            doneAt: Date.now(),
                            id: utilService.makeId(),
                            isDone: false
                        },
                    ]
                }
            }
            break;
        default: break;
    }

    newNote['id'] = noteId;
    notes.push(newNote)
    storageService.saveToStorage(NOTES_KEY, notes)
}

function toggleTodo(todos,todoId){
    todos.forEach(todo => {
        if (todo.id === todoId) todo.isDone = !todo.isDone; 
    })
    storageService.saveToStorage(NOTES_KEY, notes)
}

function getEmptyNote() {
    return {
        type: 'NoteTxt',
        inputContent: '',
        moreContent: ''
    }
}