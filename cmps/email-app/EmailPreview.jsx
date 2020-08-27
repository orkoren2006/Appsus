

export function EmailPreview (props) {
    return (
        <li onClick={(ev)=> {props.onReadEmail(props.email.id, ev)}}>
            <button name="delete" onClick={()=> {props.onRemoveEmail(props.email.id)}}>X</button>
            <h2>From: {props.email.sender}</h2>
            <h2>Subject: {props.email.subject}</h2>
            <h3>{props.email.body}</h3>
            <button name="starred" onClick={()=> {props.onStarredEmail(props.email.id)}}>Starred</button>
            {/* <h3>{email.sentAt}</h3> */}
        </li>
    )
}