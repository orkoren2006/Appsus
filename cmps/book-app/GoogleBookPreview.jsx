export function GoogleBookPreview({ book,onAddBook }) {

    return (
            <article className="google-book-preview">
                <span>{book.volumeInfo.title}</span>
                <button className="add-google-Book-btn" onClick={() => {onAddBook(book)}}>+</button>
            </article>
    )
}