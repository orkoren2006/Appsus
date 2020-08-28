

export function ContentEditable(props) {
    
    return (
        <h5 className="content-edtitable" contentEditable={true} suppressContentEditableWarning={true}
         onInput={(ev)=>{props.onChangeItem(ev)}}>{props.txt}</h5>
    )
}