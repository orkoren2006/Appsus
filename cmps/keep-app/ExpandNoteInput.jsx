export function ExpandNoteInput(props){

    return (
        <input name='second-input' type="text" onChange={(ev)=>props.onInputChange(ev)}/>
    )
}
   