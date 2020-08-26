const {link} = ReactRouterDOM


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


    render () {
        console.log(this.state.emails);
        return (
            <section>
            <h1>I'm your EMAIL app</h1>
            <EmailList emails={this.state.emails}/>
            </section>
        )
    }
}