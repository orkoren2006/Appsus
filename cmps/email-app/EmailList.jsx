import { EmailPreview } from '../email-app/EmailPreview.jsx'

export function EmailList({ emails }) {
    return <article className="email-list"> 
        <ul >
            {emails.map(email => <EmailPreview key={email.id} email={email} />)}
        </ul>
    </article>
}