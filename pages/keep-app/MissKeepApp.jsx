import { keepService } from "../../services/keep-service.js";
import { NoteList } from "../../cmps/keep-app/NoteList.jsx";
export class MissKeepApp extends React.Component {
    state = {
        notes: [],
    }

    componentDidMount() {
        this.loadNote()
    }

    loadNote() {
        keepService.query()
            .then(notes => this.setState({ notes }, () => {console.log(this.state.notes)}))
        
    }

    getNotesForDisplay() {
        return this.state.notes;
    }

    removeNote = (note) => {
        keepService.removeNote(note)
        this.loadNote()
    }

    render() {
        const notesToShow = this.getNotesForDisplay();
        if (!notesToShow) return <p>loading..</p>
        return (
            <section className="notes" >
                <h1>I'm your KEEP app</h1>
                <NoteList notes={notesToShow} onRemoveNoteBtn={this.removeNote} />
            </section>
        )
    }
}