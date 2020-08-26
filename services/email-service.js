import { storageService } from './storage-service.js'
import { utilService } from './utils.js'

const KEY = 'myEmails';

export const emailService = {
    query,
    addEmail,
    removeEmail
}

var emails;

var gEmails = [
    {id: '001', subject: 'Wassap?', body: 'Pick up!', sender: 'John Schmidt', isRead: false, isSent: false, isStarred: false, sentAt : 1551133930594},
    {id: '002', subject: 'Don\'t miss it!', body: 'Hi there, this is your last chance to win', sender: 'Casinomania', isRead: false, isSent: false, isStarred: false, sentAt : 1552233930594},
    {id: '003', subject: 'Big eyes', body: 'Hi, so you coveted everything and you left the flower dry', sender: 'Benni Furman', isRead: true, isSent: false, isStarred: true, sentAt : 1553333930594},
    {id: '004', subject: 'Want to become a web-developer?', body: 'We invite you to join us to our incredible staff', sender: 'CodingAcademy', isRead: false, isSent: false, isStarred: false, sentAt : 1554433930594},
    {id: '005', subject: 'Another lie is waiting for you' , body: 'Dear civilian, I want you to know that I work hard to come up with new lies every day', sender: 'B.B', isRead: true, isSent: false, isStarred: false, sentAt : 1555533930594},
  
]


function query() { //// NEED TO CHECK TOMORROW - WHEN USING IT, NEW EMAILS AREN'T LOADED TO SCREEN
    emails = storageService.loadFromStorage(KEY);
    if (!emails || !emails.length) {
        emails = gEmails;
        storageService.saveToStorage(KEY, emails)
    }
    return Promise.resolve(emails)
}

// function query() {
//     return Promise.resolve(gEmails)
// }


function addEmail(subject, body) {
    let id = utilService.makeId()
    let email = {id: id, subject: subject, body: body, sender: 'Me', isRead: false, isSent: true, isStarred: false, sentAt : new Date()}
    emails.push(email)
    storageService.saveToStorage(KEY, emails)
}


function removeEmail(email) {
    
}