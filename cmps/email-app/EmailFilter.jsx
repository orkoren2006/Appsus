

export function EmailFilter (props) {
    return (<section className="filter-buttons">
        <div className="btn-container">
        <img  className="icon-btn" src="assets/img/inbox-icon.png"/>
        <button onClick={props.onInbox}>Inbox</button>
        </div> 
        <div className="btn-container">
        <img  className="icon-btn" src="assets/img/send.png"/>
        <button onClick={props.onSentFilter}>Sent</button>
        </div>
        <div className="btn-container">
        <img  className="icon-btn" src="assets/img/star-grey.png"/>
        <button onClick={props.onStarredFilter}>Starred</button>
        </div>
        <div className="btn-container">
        <img  className="icon-btn" src="assets/img/read.png"/>
        <button onClick={props.onReadFilter}>Read</button>
        </div>
    </section>
    )
}



