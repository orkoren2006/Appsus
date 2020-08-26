const { link } = ReactRouterDOM

import { EmailFilter } from '../../cmps/email-app/EmailFilter.jsx'
import { EmailList } from '../../cmps/email-app/EmailList.jsx'
import { emailService } from '../../services/email-service.js'
import { Modal } from '../../cmps/email-app/EmailModal.jsx'
import {EmailCompose} from '../../cmps/email-app/EmailCompose.jsx'

export class MisterEmailApp extends React.Component {

    state = {
        emails: [],
        readClicked: false,
        newSubject: '',
        newBody: ''
    }

    componentDidMount() {
        console.log('MisterEmailApp Ready');
        this.loadEmails();

    }

    loadEmails = () => {
        emailService.query()
            .then(emails => {
                this.setState({ emails })
            })
    }

    showReadEmails = () => {
        if (this.state.emails.isRead)
            return this.state.emails
    }

    getFilteredEmails() {
        let emails = [];
        if (this.state.readClicked) emails = this.state.emails.filter(email => email.isRead)
        else emails = this.state.emails
        return emails;
    }

    toggleReadClicked = () => {
        this.setState({ readClicked: !this.state.readClicked })

    }

    showSubject = (newSubject) => {
        console.log('Subject', newSubject);
        this.setState({ newSubject })
    }

    showBody = (newBody) => {
        console.log('Body', newBody);
        this.setState({ newBody })
    }

    addEmail = () => {
        console.log('button');
        emailService.addEmail(this.state.newSubject, this.state.newBody)
        this.loadEmails();
        // this.setState({ newBody: '' })
    }

    render() {
        console.log(this.state.readClicked);
        const emails = this.getFilteredEmails()
        console.log(emails);
        return (

            <section>
                <h1>I'm your EMAIL app</h1>
                <button>Compose new Email</button>
                
                <EmailFilter onReadFilter={this.toggleReadClicked} />
                <EmailList emails={emails} />
                <EmailCompose showSubject={this.showSubject} showBody={this.showBody} addEmail={this.addEmail}/>

                {/* <Modal></Modal> */}
            </section>
        )
    }
}