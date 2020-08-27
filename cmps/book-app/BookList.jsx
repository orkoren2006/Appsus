import { BookPreview } from './BookPreview.jsx'
// import { GoogleBookPreview } from './GoogleBookPreview.jsx'


export function BookList(props){

    return (<ul className="book-list clean-list grid">
        {props.books.map(book => {
            return <li key={book.id}>
                <BookPreview book={book}/>
            </li>
        })}
    </ul>)
}