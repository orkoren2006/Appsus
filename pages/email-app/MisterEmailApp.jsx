const {link} = ReactRouterDOM

import {EmailFilter} from '../../cmps/email-app/EmailFilter.jsx'
import {EmailList} from '../../cmps/email-app/EmailList.jsx'
import {emailService} from '../../services/email-service.js'

export class MisterEmailApp extends React.Component{

state = {
    emails: [],
    filterBy: ''
}

componentDidMount() {
    console.log('MisterEmailApp Ready');
    this.loadEmails(); 

}

loadEmails = () => {
    emailService.query()
    .then(emails => {
        this.setState({emails})
    })
}

showReadEmails = () => {
    if (this.state.emails.isRead) 
    return this.state.emails 
}

getReadEmails() {
    const books = this.state.books.filter(book => book.title.includes(this.state.filterBy))
    return books;
}

    render () {
        console.log(this.state.emails);
        return (
            <section>
            <h1>I'm your EMAIL app</h1>

            <EmailFilter onReadFilter={this.showReadEmails}/>
            <EmailList emails={this.state.emails}/>
            </section>
        )
    }
}