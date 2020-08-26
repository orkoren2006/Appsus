import { storageService } from './storage-service.js'

const NOTES_KEY = 'myNotes';

export const keepService = {
    query,
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