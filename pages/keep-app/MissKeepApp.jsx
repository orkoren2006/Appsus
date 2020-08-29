import { keepService } from "../../services/keep-service.js";
import { NoteList } from "../../cmps/keep-app/NoteList.jsx";
import { ExpandNoteInput } from "../../cmps/keep-app/ExpandNoteInput.jsx";
import { Modal } from "../../cmps/Modal.jsx";
import { NoteEdit } from "../../cmps/keep-app/NoteEdit.jsx";


export class MissKeepApp extends React.Component {
    state = {
        notes: [],
        newNote: keepService.getEmptyNote(),
        style: {
            opacity: [1, 0.3, 0.3, 0.3]
        },
        noteToEdit: null,
        editableContent: 'my content',
        isEditable: true
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
    // REMOVE NOTE CAN GET NOTE - FROM CLICK ON THE NOTE - OR NOTE_ID FROM CLICK FROM REMOVE TODO BTN - THE ID IS OF THE SPECIFIC TODO AND NOT THE NOTE ID!!
    removeNote = (note, todoTxtId) => {
        if (todoTxtId) {
            keepService.removeTodo(note, todoTxtId)
        } else {
            keepService.removeNote(note)
        }
        this.loadNote()
    }

    onNewNoteTxt = (ev) => {
        if (ev.target.name === 'second-input') {
            this.setState({ newNote: { ...this.state.newNote, moreContent: [ev.target.value] } })
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
                return 'Enter Todo...'
        }
    }

    addNote = () => {
        if (this.state.newNote.id) {
            this.setState({ newNote: keepService.getEmptyNote() })
        } else {
            keepService.addNote(this.state.newNote)
            this.loadNote()
            this.setState({ newNote: keepService.getEmptyNote() })
        }
    }

    addTodo = () => {
        if (!this.state.newNote.id) {
            let note = keepService.addNote(this.state.newNote);
            this.loadNote()
            this.setState({ newNote: note })
        } else {
            keepService.addTodo(this.state.newNote, this.state.newNote.moreContent)
            this.loadNote()
        }

    }

    onNoteType = (ev) => {
        const newNoteType = ev.target.dataset.type;
        let opacityArr = [0.3, 0.3, 0.3, 0.3];
        switch (newNoteType) {
            case 'NoteTxt':
                opacityArr[0] = 1;
                break;
            case 'NoteImg':
                opacityArr[1] = 1;
                break;
            case 'NoteVideo':
                opacityArr[2] = 1;
                break;
            case 'NoteTodos':
                opacityArr[3] = 1;
                break;
            default: break;
        }
        this.setState({ newNote: { ...this.state.newNote, type: newNoteType }, style: { opacity: opacityArr } })
    }

    todoClicked = (todos, todoId) => {
        keepService.toggleTodo(todos, todoId)
        this.loadNote()
    }

    listItemClicked = (ev, note) => {
        console.log(ev.target);
        // if (ev.target.type === 'color' || ev.target.name === 'btn') return
        // this.setState({ noteToEdit: [note] })
    }

    noteColorChanged = (ev, note) => {
        keepService.setNoteColor(note, ev.target.value)
        this.loadNote()
    }

    closeModal = () => {
        this.setState({ noteToEdit: null })
    }

    focusContent = (ev) => {
        console.log('focus',ev.type);
        // this.setState({editableContent: 'itay'})
        this.setState({isEditable: true})
    }

    blurContent = (content) => {
        // send to db
        console.log(content);
        this.setState({isEditable: false})
    }

    contentEditableChange = (ev) => {
        console.log(ev.target.innerText);
        this.setState({ editableContent: ev.target.innerText})
    }


    render() {
        const notesToShow = this.getNotesForDisplay();

        if (!notesToShow) return <p>loading..</p>
        return (
            <section className="notes" >
                
                {/* <h1>I'm your KEEP app</h1> */}
                <section className="new-note-container container">
                    <ul className="new-note-type-list clean-list flex align-center center-content">
                        <input className="new-note-input" type="text"
                            placeholder={this.getPlaceholderTxt()}
                            value={this.state.newNote.inputContent}
                            onChange={this.onNewNoteTxt} />
                        <section className="note-type-picker flex">
                            <li className="txt-note" >
                                <img data-type="NoteTxt" onClick={this.onNoteType}
                                    style={{ opacity: this.state.style.opacity[0] }}
                                    src="../../assets/img/font-icon.png" alt="" /></li>
                            <li className="img-note" >
                                <img data-type="NoteImg" onClick={this.onNoteType}
                                    style={{ opacity: this.state.style.opacity[1] }}
                                    src="../../assets/img/picture-icon.png" alt="" /></li>
                            <li className="video-note">
                                <img data-type="NoteVideo" onClick={this.onNoteType}
                                    style={{ opacity: this.state.style.opacity[2] }}
                                    src="../../assets/img/youtube-icon.png" alt="" /></li>
                            <li className="todo-note" >
                                <img data-type="NoteTodos" onClick={this.onNoteType}
                                    style={{ opacity: this.state.style.opacity[3] }}
                                    src="../../assets/img/todo-icon.png" alt="" /></li>
                            <button className="add-note" onClick={this.addNote}>Add Note</button>
                        </section>
                    </ul>
                    {(this.state.newNote.type !== 'NoteTxt') &&
                        <ExpandNoteInput
                            placeholder={this.state.newNote.moreContent}
                            noteType={this.state.newNote.type}
                            onInputChange={this.onNewNoteTxt}
                            onAddTodo={this.addTodo} />}
                </section>
                <NoteList notes={notesToShow}
                    onChangeItem={this.onNewNoteTxt}
                    onRemoveNoteBtn={this.removeNote}
                    onItemClick={this.listItemClicked}
                    onChangeColor={this.noteColorChanged}
                    onTodoClick={this.todoClicked}

                    onChangeContent={this.contentEditableChange}
                    onFocusContent={this.focusContent}
                    onBlurContent={this.blurContent}
                    contentEditable={this.state.editableContent}
                    isEditable={this.state.isEditable}
                />
                {/* {this.state.noteToEdit && <Modal onCloseModal={this.closeModal}>
                    <NoteEdit notes={this.state.noteToEdit} />
                    <NoteList notes={this.state.noteToEdit}
                        onChanedItem={this.onNewNoteTxt} />
                </Modal>} */}
            </section>
        )
    }
}