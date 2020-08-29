import { ContentEditable } from "./ContentEditable.jsx";

export class NoteTxt extends React.Component {

    state = {
        style: {
            backgroundColor: this.props.note.style.bcg,
        },
        content: this.props.contentEditable,
        noteId: this.props.note.id
    }

    render() {
        const bcg = this.props.note.style.bcg;
        return (
            <section className="text-note flex-col space-between" style={{ backgroundColor: bcg }}>
                <section className="note-title">
                    <div data-noteid={this.props.note.id} className="editable-content"
                        contentEditable={true} suppressContentEditableWarning={true}
                        onBlur={(ev) => this.props.onBlurContent(ev, this.props.note.type, this.props.note.id)}>
                        {this.props.note.info.txt || 'Enter Text..'}</div>
                </section>
                <section className="note-btns flex space-evenly">
                    
                    <img src="../../assets/img/font.png" height= "16px" alt="" />
                    <input type="color" id="bcg-color" name="color" height="25px" value={bcg} 
                    onChange={(ev) => this.props.onColorChange(ev, this.props.note)} />
                    <button name="btn" className="remove-btn" onClick={() => { this.props.onRemoveNoteBtn(this.props.note) }}>
                        <img src="../../assets/img/delete.png" alt="" />
                    </button>
                    
                </section>
            </section>
        )

    }
}