
export function EmailCompose(props) {
    return (
        <section className={props.className}>
            <button onClick={props.closeModal}>X</button>
            {/* <input type="text" placeholder="Enter Subject" onChange={(ev) => {
                props.showSubject(ev.target.value)
            }} /> */}
             <textarea onChange={(ev) => {
                props.showBody(ev.target.value)
            }} rows="1" cols="82" name="comment" form="usrform" placeholder="Subject"></textarea>
            {/* <input type="text" placeholder="Enter Message" onChange={(ev) => {
                props.showBody(ev.target.value)
            }} /> */}
            <textarea onChange={(ev) => {
                props.showBody(ev.target.value)
            }} rows="30" cols="82" name="comment" form="usrform"></textarea>
            <button className="add-note" onClick={props.sendEmail}>Send</button>
        </section>
    )
} 