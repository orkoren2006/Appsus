import { EmailPreview } from '../email-app/EmailPreview.jsx'

export function EmailList({ emails }) {
    return <article className="email-list"> 
        <ul className="inbox">
            {/* {emails.map(email => <EmailPreview key={email.id} email={email} />)} */}
            {emails.map(email => <EmailPreview key={email.id} email={email} />)}
        </ul>
    </article>
}