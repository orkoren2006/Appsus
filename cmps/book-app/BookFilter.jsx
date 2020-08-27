export function BookFilter(props) {

    return <section className="book-filter flex space-between">
        <h2>Book Filter</h2>
        <section className="name-file flex-colr">
            <h5>Name</h5>
            <input name="name" type="text" placeholder="Filter by Name" onChange={(ev) => {
                props.onFilter(ev.target.name, ev.target.value)
            }} />
        </section>

        <section className="price-filter flex-col space-between">
            <h5>Price</h5>

            <section className="price-inputs flex">
                <input className="min-price-input" name="min" type="number" placeholder="min price" onChange={(ev) => {
                    props.onFilter(ev.target.name, ev.target.value)
                }} />
                <span>-</span>
                <input className="max-price-input" name="max" type="number" placeholder="max price" onChange={(ev) => {
                    props.onFilter(ev.target.name, ev.target.value)
                }} />
            </section>
        </section>
    </section>
}

