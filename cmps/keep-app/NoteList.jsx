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
        {/* <div className="editable-content"
            contentEditable={props.isEditable} suppressContentEditableWarning={true}
            onClick={(ev) => props.onFocusContent(ev)}
            onFocus={(ev) => props.onFocusContent(ev)}
            onInput={(ev) => props.onChangeContent(ev)}
            onBlur={(ev) => props.onBlurContent(ev)}>
            {props.contentEditable}</div> */}
        {props.notes.map(note => {
            const noteType = note.type;
            return <li className={noteType} onClick={(ev) => props.onItemClick(ev, note)} key={note.id}>
                <DynamicCmp note={note} type={noteType}
                    onChangeItem={props.onChangeItem}
                    onColorChange={props.onChangeColor}
                    onRemoveNoteBtn={props.onRemoveNoteBtn}
                    onTodoClick={props.onTodoClick}

                    onChangeContent={props.onChangeContent}
                    onFocusContent={props.onFocusContent}
                    onBlurContent={props.onBlurContent}
                    contentEditable={props.contentEditable}
                    isEditable={props.isEditable}
                />
            </li>
        })}
    </ul>)

}