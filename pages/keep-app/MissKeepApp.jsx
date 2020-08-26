import { keepService } from "../../services/keep-service.js";
import { NoteList } from "../../cmps/keep-app/NoteList.jsx";
export class MissKeepApp extends React.Component {
    state = {
        notes: [],
        newNote: keepService.getEmptyNote()
        // newNote: {
        //     type: 'NoteTxt',
        //     inputContent: "",
        // }
    }

    componentDidMount() {
        this.loadNote()
    }

    loadNote() {
        keepService.query()
            .then(notes => this.setState({ notes }))

    }

    getNotesForDisplay() {
        return this.state.notes;
    }

    removeNote = (note) => {
        keepService.removeNote(note)
        this.loadNote()
    }

    onNewNoteTxt = (ev) => {
        this.setState({newNote: {...this.state.newNote, inputContent: ev.target.value}})
    }

    getPlaceholderTxt() {
        const noteType = this.state.newNote.type;
        switch (noteType) {
            case 'NoteTxt':
                return 'What\'s on your mind...'
            case 'NoteImg':
                return 'Enter image URL...'
            case 'NoteVideo':
                return 'Enter Video URL...'
            case 'NoteTodos':
                return 'Enter comma seperated list...'
        }
    }

    addNote = () => {
        let newNote = keepService.addNote(this.state.newNote)
        newNote.then(res => {this.loadNote()})
        this.setState({newNote: keepService.getEmptyNote()})
        
    }

    onNoteType = (ev) => {
        const newNoteType = ev.target.dataset.type;
        this.setState({newNote: {...this.state.newNote, type: newNoteType}})
    }


    render() {
        const notesToShow = this.getNotesForDisplay();
        if (!notesToShow) return <p>loading..</p>
        return (
            <section className="notes" >
                <h1>I'm your KEEP app</h1>
                <section className="new-note-container">
                    <input type="text" placeholder={this.getPlaceholderTxt()} value={this.state.newNote.inputContent} onChange={this.onNewNoteTxt} />
                    <ul className="new-note-type-list">
                        <li data-type="NoteTxt" className="txt-note" onClick={this.onNoteType}>Txt</li>
                        <li data-type="NoteImg" className="img-note" onClick={this.onNoteType}>Img</li>
                        <li data-type="NoteVideo" className="video-note" onClick={this.onNoteType}>Video</li>
                        <li data-type="NoteTodos" className="todo-note" onClick={this.onNoteType}>Todo</li>
                    </ul>
                    <button className="add-note" onClick={this.addNote}>Add</button>
                </section>
                <NoteList notes={notesToShow} onRemoveNoteBtn={this.removeNote} />
            </section>
        )
    }
}