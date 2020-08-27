

export function EmailFilter (props) {
    return <section className="filter-buttons">
        <button onClick={props.onInbox}>Inbox</button>
        <button onClick={props.onSentFilter}>Sent</button>
        <button onClick={props.onStarredFilter}>Starred</button>
        <button onClick={props.onReadFilter}>Read</button>
    </section>
  
}
