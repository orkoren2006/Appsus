import {NoteTxt} from './NoteTxt.jsx'

export function NoteList(props) {
    function DynamicCmp(props){
        switch (props.type){
            case 'NoteText':
                return <NoteTxt {...props}/>
        }
    }
    return (<ul className="note-list clean-list">
        {props.notes.map(note => {
            const noteType = note.type;            
            return <li key={note.id}>
                {/* ADD DYNAMIC CPM FOR SHOW DIFFERENT TYPES OF NOTES */}
                <DynamicCmp note={note} type={noteType} onRemoveNoteBtn={props.onRemoveNoteBtn}/>
            </li>
        })}
    </ul>)

}