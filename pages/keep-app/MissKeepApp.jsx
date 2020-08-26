import { keepService } from "../../services/keep-service.js";
import { NoteList } from "../../cmps/keep-app/NoteList.jsx";
export class MissKeepApp extends React.Component {
    state = {
        notes: [],
    }

    componentDidMount() {
        keepService.query()
            .then(notes => this.setState({ notes }))
    }

    getNotesForDisplay() {
        return this.state.notes;
    }

    render() {
        const notesToShow = this.getNotesForDisplay();
        if (!notesToShow) return <p>loading..</p>
        return (
            <section className="notes" >
                <h1>I'm your KEEP app</h1>
                <NoteList notes={notesToShow} />
            </section>
        )
    }
}