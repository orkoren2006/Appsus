
export function EmailCompose(props) {
    return (
        <section className={props.className}>
            <h3>New Message</h3>
            <button onClick={props.closeModal}>X</button>
            {/* <input type="text" placeholder="Enter Subject" onChange={(ev) => {
                props.showSubject(ev.target.value)
            }} /> */}
             <textarea className="subject-input" onChange={(ev) => {
                props.showBody(ev.target.value)
            }} rows="1" cols="40" name="comment" form="usrform" placeholder="Subject"></textarea>
            {/* <input type="text" placeholder="Enter Message" onChange={(ev) => {
                props.showBody(ev.target.value)
            }} /> */}
            <textarea className="message-input" onChange={(ev) => {
                props.showBody(ev.target.value)
            }} rows="20" cols="40" name="comment" form="usrform"></textarea>
            <button className="add-note" onClick={props.sendEmail}>Send</button>
          
        </section>

        
    )
} 

