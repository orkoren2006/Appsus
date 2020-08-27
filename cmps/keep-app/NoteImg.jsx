
export class NoteImgVid extends React.Component {

    state = {
        style: {
            backgroundColor: this.props.note.style.bcg,
        },
    }

    render() {
        const bcg = this.props.note.style.bcg;
        return (
            <section className="img-note" style={this.state.style}>
                <img className="note-img" src={this.props.note.info.url} alt="##"/>
                <h2>{this.props.note.info.title}</h2>
                <input type="color" id="bcg-color" name="color" value={bcg} onChange={(ev) => this.props.onColorChange(ev, this.props.note)} />
                <button className="remove-btn" onClick={()=>{this.props.onRemoveNoteBtn(this.props.note)}}>X</button>
            </section>
        )

    }
}