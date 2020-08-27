
export class NoteTodos extends React.Component {

    state = {
        style: {
            backgroundColor: 'red',
        },
    }

    getClass(todo){
        const todoClassName = (todo.isDone) ? 'done':'';
        return todoClassName;
    }

    render() {
        return (
            <section className="todos-note" style={this.state.style}>

                <h5>{this.props.note.info.label}</h5>
                {this.props.note.info.todos.map((todo, idx) => {
                    return (
                        <section className="todo-txt" key={todo.id}>
                            <li className={this.getClass(this.props.note.info.todos[idx])}
                                onClick={() => { this.props.onTodoClick(this.props.note.info.todos, this.props.note.info.todos[idx].id) }}>
                                {todo.txt}</li>
                            <button className="remove-todo-btn" onClick={() => { this.props.onRemoveNoteBtn(this.props.note, this.props.note.info.todos[idx].id) }}>+</button>
                        </section>
                    )
                })}
                <button className="remove-btn" onClick={() => { this.props.onRemoveNoteBtn(this.props.note) }}>X</button>
            </section>
        )

    }
}


// REMOVE IS THE SAME FUNC FOR THE ALL NOTE AND SPECIFIC TODO - 