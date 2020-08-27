import { ContentEditable } from "./ContentEditable.jsx";

export class NoteTxt extends React.Component {

    state = {
        style: {
            backgroundColor: this.props.note.style.bcg,
        },
    }

    render() {
        const bcg = this.props.note.style.bcg;
        return (
            <section className="text-note flex-col space-between" style={{ backgroundColor: bcg }}>
                <section className="note-title">
                    {/* <span contentEditable={true} suppressContentEditableWarning={true}>
                        {this.props.note.info.txt}
                    </span> */}
                    <ContentEditable txt={this.props.note.info.txt} onChaneItem={this.props.onChaneItem}/>
                </section>
                <section className="note-btns flex space-between">
                    <img src="../../assets/img/font-icon.png" alt="" />
                    <input type="color" id="bcg-color" name="color" value={bcg} onChange={(ev) => this.props.onColorChange(ev, this.props.note)} />
                    <button name="btn" className="remove-btn" onClick={() => { this.props.onRemoveNoteBtn(this.props.note) }}>X</button>
                </section>
            </section>
        )

    }
}