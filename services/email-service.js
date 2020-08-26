
export const emailService = {
    query,
}

const emails = [
    {id: '001', subject: 'Wassap?', body: 'Pick up!', sender: 'John Schmidt', isRead: false, isStarred: false, sentAt : 1551133930594},
    {id: '002', subject: 'Don\'t miss it!', body: 'Hi there, this is your last chance to win', sender: 'Casinomania', isRead: false, isStarred: false, sentAt : 1552233930594},
    {id: '003', subject: 'Big eyes', body: 'Hi, so you wanted all and you left the flower dry', sender: 'Benni Furman', isRead: false, isStarred: false, sentAt : 1553333930594},
    {id: '004', subject: 'Want to become a web-developer?', body: 'We invite you to join us to our incredible staff', sender: 'CodingAcademy', isRead: false, isStarred: false, sentAt : 1554433930594},
    {id: '005', subject: 'Another lie is waiting for you' , body: 'Dear civilian, I want you to know that I work hard to come up with new lies every day', sender: 'B.B', isRead: false, isStarred: false, sentAt : 1555533930594},
  
]

function query () {
    return Promise.resolve(emails)
}