export function ExpandNoteInput(props){

    function getPlaceholerTxt(noteType){
        const placeHolderTxt = (noteType === 'NoteTodos') ? 'Enter Todo':'Enter Title';
        return placeHolderTxt
    }

    return (
        <input name='second-input' type="text" placeholder={getPlaceholerTxt(props.noteType)} onChange={(ev)=>props.onInputChange(ev)}/>
    )
}
   