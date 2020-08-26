

export function EmailPreview ({email}) {
    return (
        <li>
            <button onClick={()=> {console.log(email.id);}}>X</button>
            <h2>From: {email.sender}</h2>
            <h2>Subject: {email.subject}</h2>
            <h3>{email.body}</h3>
            {/* <h3>{email.sentAt}</h3> */}
        </li>
    )
}