const { link } = ReactRouterDOM

import { EmailFilter } from '../../cmps/email-app/EmailFilter.jsx'
import { EmailList } from '../../cmps/email-app/EmailList.jsx'
import { emailService } from '../../services/email-service.js'
import { Modal } from '../../cmps/email-app/EmailModal.jsx'
import { EmailCompose } from '../../cmps/email-app/EmailCompose.jsx'

export class MisterEmailApp extends React.Component {

    state = {
        emails: [],
        readFilter: false,
        starredFilter: false,
        sentFilter: false,
        newSubject: '',
        newBody: ''
    }

    componentDidMount() {
        console.log('MisterEmailApp Ready');
        this.loadEmails();

    }


    loadEmails() {
        emailService.query()
            .then(emails => {
                this.setState({ emails })
            })
    }


    showReadEmails = () => {
        if (this.state.emails.isRead)
            return this.state.emails
    }

    getSelectedFilter() {
        if (this.state.readFilter) this.toggleReadFilter()
        else if (this.state.sentFilter) this.toggleSentFilter()
        else if (this.state.starredFilter) this.toggleStarredFilter()
        else return this.state.emails
    }

    // getFilteredEmails() {
    //     let emails = [];
    //     if (this.state.readFilter && !this.state.sentFilter && !this.state.starredFilter) {
    //         emails = this.state.emails.filter(email => email.isRead)
    //      } else if (this.state.readFilter && !this.state.sentFilter && this.state.starredFilter) {
    //          emails = this.state.emails.filter(email => email.isRead && email.isStarred)
    //      } else if (!this.state.readFilter && this.state.sentFilter && this.state.starredFilter) {
    //         emails = this.state.emails.filter(email => email.isSent && email.isStarred)
    //      } else if (!this.state.readFilter && !this.state.sentFilter && this.state.starredFilter) {
    //         emails = this.state.emails.filter(email => email.isStarred)
    //      } else if (!this.state.readFilter && this.state.sentFilter && !this.state.starredFilter) {
    //         emails = this.state.emails.filter(email => email.isSent)
    //      } else emails = this.state.emails
    //     return emails;
    // }

    getFilteredEmails() {
        let emails = [];
        if (this.state.readFilter) emails = this.state.emails.filter(email => email.isRead)
        else if (this.state.starredFilter) emails = this.state.emails.filter(email => email.isStarred)
        else if (this.state.sentFilter) emails = this.state.emails.filter(email => email.isSent)
        else emails = this.state.emails
        return emails;
    }


    toggleReadFilter = () => {
        this.setState({ readFilter: !this.state.readFilter })
        if (this.state.sentFilter) this.setState({ sentFilter: !this.state.sentFilter })
        if (this.state.starredFilter) this.setState({ starredFilter: !this.state.starredFilter })

    }

    toggleSentFilter = () => {
        this.setState({ sentFilter: !this.state.sentFilter })
        if (this.state.readFilter) this.setState({ readFilter: !this.state.readFilter })
        if (this.state.starredFilter) this.setState({ starredFilter: !this.state.starredFilter })

    }

    toggleStarredFilter = () => {
        this.setState({ starredFilter: !this.state.starredFilter })
        if (this.state.readFilter) this.setState({ readFilter: !this.state.readFilter })
        if (this.state.sentFilter) this.setState({ sentFilter: !this.state.sentFilter })

    }

    showSubject = (newSubject) => {
        console.log('Subject', newSubject);
        this.setState({ newSubject })
    }

    showBody = (newBody) => {
        console.log('Body', newBody);
        this.setState({ newBody })
    }

    sendEmail = () => {
        console.log('button');
        emailService.addEmail(this.state.newSubject, this.state.newBody)
        this.loadEmails();
        // this.setState({ newBody: '' })
    }

    render() {
        console.log(this.state.sentFilter);
        const emails = this.getFilteredEmails()
        console.log(emails);
        return (

            <section>
                <h1>I'm your EMAIL app</h1>
                <button>Compose new Email</button>

                <EmailFilter onReadFilter={this.toggleReadFilter} onSentFilter={this.toggleSentFilter} onStarredFilter={this.toggleStarredFilter} />
                <EmailList emails={emails} />
                <EmailCompose showSubject={this.showSubject} showBody={this.showBody} sendEmail={this.sendEmail} />

                {/* <Modal></Modal> */}
            </section>
        )
    }
}