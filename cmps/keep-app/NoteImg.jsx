
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
                <img className="note-img" src={this.props.note.info.url} alt="##" />
                <section className="img-title">
                    <div data-noteid={this.props.note.id} className="editable-content"
                        contentEditable={true} suppressContentEditableWarning={true}
                        onBlur={(ev) => this.props.onBlurContent(ev, this.props.note.type, this.props.note.id)}>
                        {this.props.note.info.title || 'Enter Title..'}</div>
                </section>
                <section className="note-btns flex space-between">
                    <input type="color" id="bcg-color" name="color" value={bcg} onChange={(ev) => this.props.onColorChange(ev, this.props.note)} />
                    <button className="remove-btn" onClick={() => { this.props.onRemoveNoteBtn(this.props.note) }}>
                        <img src="../../assets/img/delete.png" alt="" />
                    </button>
                </section>
            </section>
        )

    }
}