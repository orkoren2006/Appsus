import { storageService } from './storage-service.js'

const NOTES_KEY = 'myNotes';

export const keepService = {
    query,
    removeNote,
    addNote,
    getEmptyNote
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

function addNote(note) {
    let newNote;
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
                    title: 'New Img Note'
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
                    title: 'New Img Note'
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
                    label: "How was it:",
                    todos: [
                        { txt: "Do that", doneAt: null },
                        { txt: "Do this", doneAt: 187111111 }
                    ]
                }
            }
            break;
        default: break;
    }

    let noteIdPrm = axios.get('http://www.filltext.com/?rows=1&pwd={password}')

    return noteIdPrm.then(res => {
        // console.log(res[0])
        newNote['id'] = res.data[0].pwd
        notes.push(newNote)
        storageService.saveToStorage(NOTES_KEY, notes)
        return notes
    })
}

function getEmptyNote() {
    return {
        type: 'NoteTxt',
        inputContent: '',
    }
}