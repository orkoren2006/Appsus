import { storageService } from './storage-service.js'
import { utilService } from './utils.js'

const KEY = 'myEmails';

export const emailService = {
    query,
    addEmail,
    removeEmail,
    starredEmail,
    readEmail
}

var emails;

var gEmails = [
    {id: '001', subject: 'Renew your Anti-Virus now!', body: 'This is your last chance to renew your membership before you get screwed hard!', sender: 'Covid-19', isRead: false, isSent: false, isStarred: false, sentAt : "Aug 30"},
    {id: '002', subject: 'Don\'t miss it!', body: 'Hi there, this is your last chance to win', sender: 'CasinoMania', isRead: true, isSent: false, isStarred: false, sentAt : "Aug 29"},
    {id: '003', subject: 'שקר חדש מחכה לך' , body: 'אזרח יקר, אני רוצה שתדע שאני עושה כל מאמץ כדי להפיץ שקר חדש בכל יום', sender: 'B.B', isRead: false, isSent: false, isStarred: false, sentAt : "Aug 24"},
    {id: '004', subject: 'Want to become a web-developer?', body: 'We invite you to join our incredible staff', sender: 'Coding Academy', isRead: true, isSent: false, isStarred: false, sentAt : "Aug 18"},
    {id: '005', subject: 'Big eyes', body: 'Hi, so you wanted everything and you left the flower dry', sender: 'Benni Furman', isRead: false, isSent: false, isStarred: true, sentAt : "Jun 5"},
  
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
    let email = {id: id, subject: subject, body: body, sender: 'Me', isRead: false, isSent: true, isStarred: false, sentAt : new Date().toLocaleDateString("he-IL")}
    emails.unshift(email)
    storageService.saveToStorage(KEY, emails)
}


function removeEmail(id) {
    emails = emails.filter(email => email.id !== id);
    storageService.saveToStorage(KEY, emails)
}

function starredEmail(id) {
    var currEmail = emails.filter(email => email.id === id);
    currEmail[0].isStarred = !currEmail[0].isStarred;
    storageService.saveToStorage(KEY, emails)
}

function readEmail(id) {
    var currEmail = emails.filter(email => email.id === id);
    currEmail[0].isRead = !currEmail[0].isRead;
    // currEmail[0].isRead = true;
    storageService.saveToStorage(KEY, emails)
}