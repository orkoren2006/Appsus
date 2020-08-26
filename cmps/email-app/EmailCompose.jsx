
export function EmailCompose(props) {
    return (
        <section>
            <input type="text" placeholder="Enter Subject" onChange={(ev) => {
                props.showSubject(ev.target.value)
            }} />
            <input type="text" placeholder="Enter Message" onChange={(ev) => {
                props.showBody(ev.target.value)
            }} />
            <button className="add-note" onClick={props.sendEmail}>Add</button>
        </section>
    )
} 