import { LongTxt } from '../../cmps/LongTxt.jsx'
import { ReviewAdd } from '../../cmps/book-app/ReviewAdd.jsx'
import { bookService } from '../../services/book-service.js'
import { utilService } from '../../services/utils.js'
const { Link } = ReactRouterDOM

export class BookDetails extends React.Component {

    state = {
        book: null,
        review: bookService.getBlankReview(),
        addReviewVis: {
            // status: 'visible',
            status: '',
            changeBy: ''
        }

    }

    componentDidMount() {
        const { bookId } = this.props.match.params
        bookService.query()
            .then(books => bookService.getBookById(books, bookId)
                .then(book => this.setState({ book })))
        if (window.innerWidth < 800) this.setState({ addReviewVis: { ...this.addReviewVis, status: 'hidden', changeBy: 'screen' } })
        window.addEventListener('resize', this.updateMediaQueries);
    }

    updateMediaQueries = () => {
        const windowWidth = window.innerWidth;
        console.log(this.state.addReviewVis);
        if (windowWidth < 800 && this.state.addReviewVis.changeBy !== 'btn') {
            this.setState({ addReviewVis: { ...this.addReviewVis, status: 'none', changeBy: 'screen' } })
        } else if (windowWidth > 800) {
            this.setState({ addReviewVis: { ...this.addReviewVis, status: '', changeBy: 'screen' } })
        }
    }

    pageCountMsg = () => {
        const numOfPages = this.state.book.pageCount
        var msg = '- ';
        if (numOfPages > 500) {
            msg += 'Long reading';
        } else if (numOfPages <= 500 && numOfPages > 200) {
            msg += 'Decent reading';
        } else if (numOfPages < 100) {
            msg += 'Light reading';
        } else {
            msg = '';
        }

        return msg;
    }

    publicationAtMsg = () => {
        const pubYear = this.state.book.publishedDate;
        var date = new Date();
        const bookAge = pubYear - date.getYear();
        var msg = '- ';
        if (bookAge > 10) { msg += ' Veteran Book' }
        else if (bookAge < 1) { msg += ' New!' }
        else { msg = '' }

        return msg;
    }

    getClass = () => {
        const bookPrice = this.state.book.listPrice.amount;
        let bookClass = "book-price flex center-content";
        if (bookPrice > 150) { bookClass += ' expensive' }
        else if (bookPrice < 40) { bookClass += ' cheap' } // in the instruction should be 20 but only one book fullfills it.

        return bookClass;
    }

    onBackToGallery = () => {
        this.setState({ book: null })
    }

    addReview = (ev) => {
        ev.preventDefault();
        bookService.addReview(this.state.book, this.state.review)
        this.setState({ review: bookService.getBlankReview() })
    }

    updateReview = (field, val) => {
        this.setState({ review: { ...this.state.review, [field]: val } })
    }

    onAddReviewHeader = () => {
        const toggleVisibility = (this.state.addReviewVis.status === 'none') ? '' : 'none';
        console.log(toggleVisibility);
        this.setState({ addReviewVis: { ...this.addReviewVis, status: toggleVisibility, changeBy: 'byn' } })
    }

    render() {
        const { book } = this.state
        if (!book) return <div>Loading....boooooookkk</div>
        const yearOfPublication = book.publishedDate;
        const bookAuthors = book.authors;
        const bookDescriptionLen = book.description.length;
        const price = utilService.getPrice(book.listPrice.amount, book.listPrice.currencyCode)

        return (
            <section className="all-details">
                <section className="book-details-container flex">
                    <div className="image flex center-content align-center">
                        <img src={book.thumbnail} alt="" />
                    </div>
                    <div className="book-info flex-col">
                        <h1>Title: {book.title}</h1>
                        <h2 className={this.getClass()}>Price: {price}</h2>
                        <section className="authors">
                            Authors: {bookAuthors.map((author, idx) => <span key={idx}>{author}</span>)}
                        </section>
                        <h5>Number Of Pages: {book.pageCount} {this.pageCountMsg}</h5>
                        <h5>Published At:{yearOfPublication} {this.publicationAtMsg}</h5>
                        {book.listPrice.isOnSale && <h1>FOR SALE!!</h1>}
                        {bookDescriptionLen > 100 && <LongTxt text={book.description} />}
                        {bookDescriptionLen < 100 && <p>{book.description}</p>}
                    </div>
                    <section className="book-review flex-col">
                        <h3 onClick={this.onAddReviewHeader} className="add-review-header flex center-content">Add Review</h3>
                        {<ReviewAdd onAddReview={this.addReview} onInputChange={this.updateReview}
                            showAddReview={this.state.addReviewVis.status} review={this.state.review} />}
                        <Link to="/book/gallery"><button className="back-to-gallery-btn"
                            onClick={this.onBackToGallery}>Back To Gallery
                         </button></Link>
                    </section>
                </section>
                {<section className="reviews-list container">
                    <h3 onClick={this.onAddReview} className="readers-review-header">Readers Reviews</h3>
                    {(book.review) && book.review.map(review => {
                        return (
                            <section className="review flex">
                                <span className="review-writer">Name: {review.name}</span>
                                <span className="review-date">Date: {review['read-date']}</span>
                                <span className="review-rate">Rate: {review.rate}</span>
                                <span className="review-content">{`'${review['free-text']}'`}</span>
                            </section>
                        )
                    })}
                </section>
                }
            </section>
        )
    }
}