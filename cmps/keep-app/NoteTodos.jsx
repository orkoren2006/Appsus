
export class NoteTodos extends React.Component {

    state = {
        style: {
            backgroundColor: '#40a8c4',
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
        const editBtnImg = (this.state.isEditable) ? 'check' : 'edit-button'
        return (
            <section className="todos-note" style={this.state.style}>
                <section className="todo-title flex space-between">
                    <div data-noteid={this.props.note.id} className="editable-content"
                        contentEditable={true} suppressContentEditableWarning={true}
                        onBlur={(ev) => this.props.onBlurContent(ev, this.props.note.type, this.props.note.id)}>
                        {this.props.note.info.label}</div>
                    <button className="edit-note-btn" onClick={this.onEditNote}><img src={`assets/img/${editBtnImg}.png`} alt="" /></button>
                </section>
                {this.props.note.info.todos.map((todo, idx) => {
                    return (
                        <div className="all-todos flex space-between align-center" key={todo.id}>
                            <section className="todo-txt"
                                data-noteid={this.props.note.id} data-todoid={todo.id}
                                contentEditable={this.state.isEditable} suppressContentEditableWarning={true}
                                onBlur={(ev) => this.props.onBlurContent(ev, this.props.note.type, this.props.note.id, todo.id)}>
                                <li className={this.getClass(this.props.note.info.todos[idx])}
                                    onClick={() => {
                                        if (!this.state.isEditable) {
                                            this.props.onMarkTodo(this.props.note.info.todos, this.props.note.info.todos[idx].id)
                                        } else {
                                            return;
                                        }
                                    }}>
                                    {todo.txt || 'Enter Title..'}</li>
                            </section>
                            <button className="remove-todo-btn"
                                onClick={() => { this.props.onRemoveNoteBtn(this.props.note, this.props.note.info.todos[idx].id) }}>
                                X</button>
                        </div>
                    )
                })}
                <section className="note-btns flex space-between">
                    <button className="add-todo-btn" onClick={() => { this.props.onAddTodoBtn(this.props.note) }}>+</button>
                    <button className="remove-btn-todo" onClick={() => { this.props.onRemoveNoteBtn(this.props.note) }}>
                        <img src="assets/img/delete-white.png" alt="" />
                    </button>
                </section>
            </section>
        )

    }
}


// REMOVE IS THE SAME FUNC FOR THE ALL NOTE AND SPECIFIC TODO - 