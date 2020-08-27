
export function EmailCompose(props) {
    console.log(props.className);
    return (
        <section className={props.className}>
            <input type="text" placeholder="Enter Subject" onChange={(ev) => {
                props.showSubject(ev.target.value)
            }} />
            <input type="text" placeholder="Enter Message" onChange={(ev) => {
                props.showBody(ev.target.value)
            }} />
            {/* <textarea onChange={(ev) => {
                props.showBody(ev.target.value)
            }} rows="30" cols="83" name="comment" form="usrform">
                Enter text here...</textarea> */}
            <button className="add-note" onClick={props.sendEmail}>Add</button>
        </section>
    )
} 