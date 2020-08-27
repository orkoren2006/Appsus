import { NoteTxt } from './NoteTxt.jsx'
import { NoteImgVid } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'

export function NoteList(props) {
    function DynamicCmp(props) {
        switch (props.type) {
            case 'NoteText':
                return <NoteTxt {...props} />
            case 'NoteImg':
                return <NoteImgVid {...props} />
            case 'NoteVideo':
                return <NoteImgVid {...props} />
            case 'NoteTodos':
                return <NoteTodos {...props} />
        }
    }
    return (<ul className="note-list clean-list grid">
        {props.notes.map(note => {
            const noteType = note.type;
            return <li className={noteType} onClick={() => props.onItemClick(note)} key={note.id}>
                <DynamicCmp note={note} type={noteType}
                    onColorChange={props.onChangeColor}
                    onRemoveNoteBtn={props.onRemoveNoteBtn}
                    onTodoClick={props.onTodoClick}

                    />
            </li>
        })}
    </ul>)

}