const { Link } = ReactRouterDOM;

export function GoogleBookPreview({ book, onAddBook }) {

    return (
        <Link to="/book/gallery"><article onClick={() => { onAddBook(book) }} className="google-book-preview">
            <span>{book.volumeInfo.title}</span>
        </article>
        </Link>
    )
}