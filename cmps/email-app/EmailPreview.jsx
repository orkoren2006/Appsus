

export function EmailPreview (props) {
    return (
        <li onClick={(ev)=> {props.onReadEmail(props.email.id, ev)}}>
            <img src="../../assets/img/delete.png" name="delete" onClick={()=> {props.onRemoveEmail(props.email.id)}}/>
            <img src="../../assets/img/star.png" name="starred" onClick={()=> {props.onStarredEmail(props.email.id)}}/>
            <h2>{props.email.sender}</h2>
            <h2>{props.email.subject}</h2>
            <h3>{props.email.body.substring(0, 50)}</h3>
            {/* <h3>{email.sentAt}</h3> */}
        </li>
    )
}