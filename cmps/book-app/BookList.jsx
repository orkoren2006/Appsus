import { BookPreview } from './BookPreview.jsx'
const { Link } = ReactRouterDOM
// import { GoogleBookPreview } from './GoogleBookPreview.jsx'


export function BookList(props) {

    return (<ul className="book-list clean-list grid">
        {props.books.map(book => {
            return <Link className="book-link" key={book.id} to={`/book/:${book.id}`}>
                <li className="book-item" >
                    <BookPreview book={book} />
                </li>
            </Link>
        })}
    </ul>)
}