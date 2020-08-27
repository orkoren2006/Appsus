

export function EmailPreview (props) {
    let star = props.email.isStarred ? 'yellow-star':'star'
    let read = props.email.isRead ? 'read' : 'unread'
    return (
        <li className={read} onClick={(ev)=> {props.onReadEmail(props.email.id, ev)}}>
            <img src="../../assets/img/delete.png" name="delete" onClick={()=> {props.onRemoveEmail(props.email.id)}}/>
            <img src={`../../assets/img/${star}.png`} name="starred" onClick={()=> {props.onStarredEmail(props.email.id)}}/>
            <p className="sender">{props.email.sender}</p>
            <p className="subject">{props.email.subject}</p>
            <p className="email-body">{props.email.body.substring(0, 50)}</p>
            <p className="date">Aug 27</p>
            {/* <h3>{email.sentAt}</h3> */}
        </li>
        
    )
}