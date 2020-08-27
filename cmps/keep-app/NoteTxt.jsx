
export class NoteTxt extends React.Component {

    state = {
        style: {
            backgroundColor: this.props.note.style.bcg,
            // backgroundColor: '#FF0000',
        },
    }

    // onColorChange = (ev) => {
    //     const newColor = ev.target.value
    //     this.setState({ style: { ...this.state.style, backgroundColor: newColor } })
    // }

    render() {
        const bcg = this.props.note.style.bcg;
        return (
            <section className="text-note flex-col space-between" style={{ backgroundColor: bcg }}>
                {/* <input className="txt" type="text" value={this.props.note.info.txt}/> */}
                <section contentEditable={true} className="note-title">
                    <h5 >{this.props.note.info.txt}</h5>
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