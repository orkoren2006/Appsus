
export class NoteImgVid extends React.Component {

    state = {
        style: {
            backgroundColor: 'red',
        },
    }

    render() {
        return (
            <section className="text-note" style={this.state.style}>
                
                <img src={this.props.note.info.url} alt="##"/>
                <h2>{this.props.note.info.title}</h2>
                <button className="remove-btn" onClick={()=>{this.props.onRemoveNoteBtn(this.props.note)}}>X</button>
            </section>
        )

    }
}