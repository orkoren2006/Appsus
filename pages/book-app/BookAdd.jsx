import { bookService } from "../../services/book-service.js";
import { BookList } from '../../cmps/book-app/BookList.jsx';
// import { GoogleBookPreview } from '../cmps/book-app/GoogleBookPreview.jsx';

export class BookAdd extends React.Component {
    state = {
        googleBooks: [],
    }

    getGoogleBooks = (ev) => {
        const titleToSearch = ev.target.value;
        bookService.getGooglsBookByTitle(titleToSearch)
            .then(books => {
                this.setState({ googleBooks: books.items }, () => console.log(this.state.googleBooks))
            })
    }

    addBook = (book) => {
        bookService.addBook(book)
    }


    render() {
        return (
            <div className="book-add-container">
                <h3>Find and Save Books from GoogleBooks</h3>
                <input type="text" name="title" placeholder="Enter book's name" onChange={this.getGoogleBooks} />
                {this.state.googleBooks &&
                    <BookList books={this.state.googleBooks}
                        listToRender="googleBooks"
                        onAddBook={this.addBook} />}
            </div>
        )
    }
}