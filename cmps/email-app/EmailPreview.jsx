

export function EmailPreview ({email}) {
    return (
        <li>
            <h2>{email.sender}</h2>
            <h2>{email.subject}</h2>
            <h3>{email.body}</h3>
            <h3>{email.sentAt}</h3>
        </li>
    )
}