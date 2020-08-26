
export class NoteTxt extends React.Component {

    state = {
        style: {
            backgroundColor: 'red',
        },
    }

    render() {
        return (
            <section className="text-note" style={this.state.style}>
                <h5>{this.props.note.info.txt}</h5>
                <button className="remove-btn" onClick={()=>{this.props.onRemoveNoteBtn(this.props.note)}}>X</button>
            </section>
        )

    }
}