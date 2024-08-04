import { useDispatch, useSelector } from "react-redux";
import { BsBookmarkPlus, BsBookmarkStarFill } from 'react-icons/bs';
import './BookList.css';
import { deleteBook, changeFavorite } from "../../redux/books/actionCreators";
import {selectAuthorFilter, selectFavFilter, selectTitleFilter} from "../../redux/slices/filterSlice";
const BookList = () => {
    const books = useSelector(
        (state) => state.books
    );

    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);
    const favFilter = useSelector(selectFavFilter);

    const dispatch = useDispatch();

    const handleChangeFavorite = (id) => {
        dispatch(changeFavorite(id));
    }

    const filteredBooks = books.filter(
        book =>
            (
                book
                    .title
                    .toLowerCase()
                    .includes(titleFilter.toLowerCase())
                &&
                book
                    .author
                    .toLowerCase()
                    .includes(authorFilter.toLowerCase()) && (!favFilter || book.isFavorite)
            )

    );

    return(
        <div className="app-block book-list">
            <h2>Book List</h2>
            {
                books.length === 0 ? (
                    <p>No books available</p>
                ) : (
                    <ul>
                        {filteredBooks.map((book, i) => (
                            <li key={book.id}>
                                <div className="book-info">
                                    {++i}. {book.title} by <strong>{book.author}</strong>
                                </div>
                                <div className="book-actions" >
                                    <span onClick={() => handleChangeFavorite(book.id)}>
                                        {
                                            book.isFavorite ?
                                                <BsBookmarkStarFill className='star-icon' /> :
                                                <BsBookmarkPlus className='star-icon' />
                                        }
                                    </span>
                                    <button
                                        onClick={() => {dispatch(deleteBook(book.id))}}
                                    >Delete</button>
                                </div>
                            </li>
                        ) )}
                    </ul>
                )
            }
        </div>
    )
}


export default BookList;