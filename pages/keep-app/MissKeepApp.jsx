import { keepService } from "../../services/keep-service.js";
import { NoteList } from "../../cmps/keep-app/NoteList.jsx";
import { ExpandNoteInput } from "../../cmps/keep-app/ExpandNoteInput.jsx";


export class MissKeepApp extends React.Component {
    state = {
        notes: [],
        newNote: keepService.getEmptyNote()
    }

    componentDidMount() {
        this.loadNote()
    }

    loadNote() {
        keepService.query()
            .then(notes => this.setState({ notes }), ()=> console.log(this.state.notes))

    }

    getNotesForDisplay() {
        return this.state.notes;
    }
    // REMOVE NOTE CAN GET NOTE - FROM CLICK ON THE NOTE - OR NOTE_ID FROM CLICK FROM REMOVE TODO BTN - THE ID IS OF THE SPECIFIC TODO AND NOT THE NOTE ID!!
    removeNote = (note, todoTxtId) => {
        if (todoTxtId){
            keepService.removeTodo(note, todoTxtId)
        } else {
            keepService.removeNote(note)
        }
        this.loadNote()
    }

    onNewNoteTxt = (ev) => {
        if (ev.target.name === 'second-input') {
            this.setState({ newNote: { ...this.state.newNote, moreContent: ev.target.value } })
        } else {
            this.setState({ newNote: { ...this.state.newNote, inputContent: ev.target.value } })
        }
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
        keepService.addNote(this.state.newNote)
        this.loadNote()
        this.setState({ newNote: keepService.getEmptyNote() })

    }

    onNoteType = (ev) => {
        const newNoteType = ev.target.dataset.type;
        this.setState({ newNote: { ...this.state.newNote, type: newNoteType } })
    }

    todoClicked = (todos, todoId) => {
        keepService.toggleTodo(todos, todoId)
        this.loadNote()
    }


    render() {
        const notesToShow = this.getNotesForDisplay();
        if (!notesToShow) return <p>loading..</p>
        return (
            <section className="notes" >
                <h1>I'm your KEEP app</h1>
                <section className="new-note-container">
                    <input type="text" placeholder={this.getPlaceholderTxt()} value={this.state.newNote.inputContent} 
                            onChange={this.onNewNoteTxt} />
                    <ul className="new-note-type-list">
                        <li data-type="NoteTxt" className="txt-note" onClick={this.onNoteType}>Txt</li>
                        <li data-type="NoteImg" className="img-note" onClick={this.onNoteType}>Img</li>
                        <li data-type="NoteVideo" className="video-note" onClick={this.onNoteType}>Video</li>
                        <li data-type="NoteTodos" className="todo-note" onClick={this.onNoteType}>Todo</li>
                    </ul>
                    {(this.state.newNote.type !== 'NoteTxt') && <ExpandNoteInput noteType={this.state.newNote.type} 
                        onInputChange={this.onNewNoteTxt} />}
                    <button className="add-note" onClick={this.addNote}>Add</button>
                </section>
                <NoteList notes={notesToShow} onRemoveNoteBtn={this.removeNote} onTodoClick={this.todoClicked}/>
            </section>
        )
    }
}