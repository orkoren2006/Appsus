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
        newBody: '',
        isComposed: false
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


    getFilteredEmails() {
        let emails = [];
        if (this.state.readFilter) emails = this.state.emails.filter(email => email.isRead)
        else if (this.state.starredFilter) emails = this.state.emails.filter(email => email.isStarred)
        else if (this.state.sentFilter) emails = this.state.emails.filter(email => email.isSent)
        else emails = this.state.emails
        return emails;
    }

    filterInbox = () => {
        if (this.state.readFilter) this.setState({ readFilter: !this.state.readFilter })
        if (this.state.starredFilter) this.setState({ starredFilter: !this.state.starredFilter })
        if (this.state.sentFilter) this.setState({ sentFilter: !this.state.sentFilter })
        this.loadEmails();
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
        this.setState({ newSubject })
    }

    showBody = (newBody) => {
        this.setState({ newBody })
    }

    sendEmail = () => {
        emailService.addEmail(this.state.newSubject, this.state.newBody)
        this.state.isComposed = false;
        this.loadEmails();
        // this.setState({ newBody: '' })
    }

    removeEmail = (id) => {
        emailService.removeEmail(id)
        this.loadEmails();
    }

    starEmail = (id) => {
        emailService.starredEmail(id)
        this.loadEmails();
    }

    readEmail = (id, ev) => {
        if (ev.target.name === 'delete' || ev.target.name === 'starred') return
        emailService.readEmail(id)
        this.loadEmails();

    }

    openCompose = () => {
        console.log(this.state.isComposed);
        this.state.isComposed = true;
        console.log(this.state.isComposed);
        this.loadEmails();
    }

    
    closeCompose = () => {
        this.state.isComposed = false;
        this.loadEmails();
    }


    render() {
        const emails = this.getFilteredEmails()
        let composeClass = this.state.isComposed ?'show':'hidden'        
        return (
            <section className="email-main">
                <div className="header">
                    <h1></h1>
                </div>

                <div className="screen">
                    <div className="sidebar">
                        <div className="compose-btn"> 
                        <img  src="assets/img/plus_icon.png"/>    
                        <button className="compose" onClick={this.openCompose}>Compose</button>
                        </div>
                        <EmailFilter onReadFilter={this.toggleReadFilter} onSentFilter={this.toggleSentFilter} onStarredFilter={this.toggleStarredFilter}
                            onInbox={this.filterInbox} />
                        
                    </div>
                    <EmailList emails={emails} onRemoveEmail={this.removeEmail} onStarredEmail={this.starEmail} onReadEmail={this.readEmail} />
                </div>
                <EmailCompose className={composeClass} showSubject={this.showSubject} showBody={this.showBody} sendEmail={this.sendEmail} 
                closeModal={this.closeCompose}/>

                {/* <Modal></Modal> */}
            </section>
        )
    }
}