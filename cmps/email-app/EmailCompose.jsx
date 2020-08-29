
export function EmailCompose(props) {
    return (
        <section className={props.className}>
            <button className="x-btn" onClick={props.closeModal}>X</button>
            <h3>New Message</h3>
            
            {/* <input type="text" placeholder="Enter Subject" onChange={(ev) => {
                props.showSubject(ev.target.value)
            }} /> */}
             <textarea className="subject-input" onChange={(ev) => {
                props.showBody(ev.target.value)
            }} rows="1" cols="60" name="comment" form="usrform" placeholder="Subject"></textarea>
            {/* <input type="text" placeholder="Enter Message" onChange={(ev) => {
                props.showBody(ev.target.value)
            }} /> */}
            <textarea className="message-input" onChange={(ev) => {
                props.showBody(ev.target.value)
            }} rows="20" cols="60" name="comment" form="usrform"></textarea>
            <button className="add-note" onClick={props.sendEmail}>Send</button>
          
        </section>

        
    )
} 

