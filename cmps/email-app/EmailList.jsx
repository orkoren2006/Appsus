import { EmailPreview } from '../email-app/EmailPreview.jsx'

export function EmailList( props ) {
    return <article className="email-list"> 
        <ul className="inbox">
            {/* {emails.map(email => <EmailPreview key={email.id} email={email} />)} */}
            {props.emails.map(email => <EmailPreview key={email.id} email={email} onRemoveEmail={props.onRemoveEmail} 
            onStarredEmail={props.onStarredEmail} onReadEmail={props.onReadEmail} />)}
        </ul>
    </article>
}