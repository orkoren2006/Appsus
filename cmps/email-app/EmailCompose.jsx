
export function EmailCompose() {
    return (
    <section>
         <input type="text" placeholder="Enter Subject" onChange={(ev) => {
            props.onSetFilter(ev.target.value)}} />
    </section>
    ) 
} 