import { BookPreview } from './BookPreview.jsx'
const { Link } = ReactRouterDOM
import { GoogleBookPreview } from './GoogleBookPreview.jsx'


export function BookList(props) {

    function DynamicCmp(props){
        switch (props.listToRender){
            case 'googleBooks':
                return <GoogleBookPreview {...props}/>
            case 'bookList':
                return <BookPreview {...props}/>
            default:
                break;
        }
    }

    // return (<ul className={`book-list clean-list ${(props.listToRender === 'bookList') ? 'grid':'flex-col'}`}>
    return (<ul className={`book-list${(props.listToRender === 'bookList') ? '':'-google-list'} clean-list align-center grid`}>
        {props.books.map(book => {
            return <Link className="book-link" key={book.id} to={`/book/gallery/${book.id}`}>
                <li className="book-item" >
                <DynamicCmp book={book} onAddBook={props.onAddBook} listToRender={props.listToRender}/>
                </li>
            </Link>
        })}
    </ul>)
}