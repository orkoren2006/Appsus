

export function EmailFilter (props) {
    return <section className="read-emails">
        <button onClick={props.onReadFilter}>Read</button>
        <button onClick={props.onSentFilter}>Sent</button>
        <button onClick={props.onStarredFilter}>Starred</button>
    </section>
  
}
