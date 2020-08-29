
export class NoteTodos extends React.Component {

    state = {
        style: {
            backgroundColor: 'red',
        },
        isEditable: false
    }

    getClass(todo) {
        const todoClassName = (todo.isDone) ? 'done' : '';
        return todoClassName;
    }
    onEditNote = () => {
        this.setState({ isEditable: !this.state.isEditable })
    }

    render() {
        const editBtnImg = (this.state.isEditable) ? 'check':'edit-button'
        return (
            <section className="todos-note" style={this.state.style}>
                <section className="todo-title flex space-between">
                    <div data-noteid={this.props.note.id} className="editable-content"
                        contentEditable={true} suppressContentEditableWarning={true}
                        onBlur={(ev) => this.props.onBlurContent(ev, this.props.note.type, this.props.note.id)}>
                        {this.props.note.info.label}</div>
                    <button className="edit-note-btn" onClick={this.onEditNote}><img src={`../../assets/img/${editBtnImg}.png`} alt="" /></button>
                </section>
                {this.props.note.info.todos.map((todo, idx) => {
                    return (
                        <section className="todo-txt flex space-between align-center" key={todo.id}>
                            <li className={this.getClass(this.props.note.info.todos[idx])}
                                onClick={() => { this.props.onMarkTodo(this.props.note.info.todos, this.props.note.info.todos[idx].id) }}>
                                {todo.txt}</li>
                            <button className="remove-todo-btn"
                                onClick={() => { this.props.onRemoveNoteBtn(this.props.note, this.props.note.info.todos[idx].id) }}>
                                X</button>
                        </section>
                    )
                })}
                <section className="note-btns flex space-between">
                    <button className="add-todo-btn" onClick={() => { this.props.onAddTodoBtn(this.props.note) }}>+</button>
                    <button className="remove-btn" onClick={() => { this.props.onRemoveNoteBtn(this.props.note) }}>
                        <img src="../../assets/img/delete.png" alt="" />
                    </button>
                </section>
            </section>
        )

    }
}


// REMOVE IS THE SAME FUNC FOR THE ALL NOTE AND SPECIFIC TODO - 