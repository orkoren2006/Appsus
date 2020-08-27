

export function ContentEditable(props) {
    
    return (
        <h5 className="content-edtitable" contentEditable={true} suppressContentEditableWarning={true} onChange={(ev)=>{props.onChaneItem(ev)}}>{props.txt}</h5>
    )
}