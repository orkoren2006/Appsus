import {bookService} from '../../services/book-service.js'
import {BookList} from '../../cmps/book-app/BookList.jsx'
import {BookFilter} from '../../cmps/book-app/BookFilter.jsx'

export class MissBookApp extends React.Component{

    state = {
        books: [],
    }

    componentDidMount(){
        bookService.query()
            .then(books => this.setState({books}))
    }

    getBooksForDisplay() {
        return this.state.books;
    }

    render() {
        const booksToShow = this.getBooksForDisplay();
        if (!booksToShow) return <p>loading..</p>
        return (
            <section className="book-app">
                <h2>books</h2>
                <hr />
                {< BookFilter onFilter={this.setFilter} />}
                {<BookList books={booksToShow}/>}
                <hr />
            </section>
        )
    }
}