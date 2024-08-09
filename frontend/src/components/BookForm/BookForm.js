import { useState } from 'react'
import { useDispatch } from "react-redux";
import {addBook, fetchBook} from "../../redux/slices/booksSlice";
import  "./BookForm.css"
import books from '../../data/books.json';
import createBook from "../../utils/createBook";
import {setError} from "../../redux/slices/errorSlice";

const BookForm = (props) => {
    const [title,setTitle] = useState("");
    const [author , setAuthor] = useState("");
    const dispatch = useDispatch();

    const handleAddRandom = () => {
        const randomIndex = Math.floor(Math.random()*books.length);
        const randomBook = books[randomIndex];

        const book = createBook(randomBook, 'random');

        dispatch(addBook(book));
    };

    const handleAddRandomFromAPI = () => {
        dispatch(fetchBook());
    };

    const handleSubmit = (e)=>{
        e.preventDefault() ;

        if (title && author){
            const book = createBook({title, author}, 'user');

            dispatch(addBook(book));

            setTitle("");
            setAuthor("");
        }
        else{
            dispatch(setError("You must fill title and author!"));
        }
    }

    return (
        <div className="app-block book-form">
            <h2> Add a New Book </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={title}
                           onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" value={author}
                           onChange={(e)=>{setAuthor(e.target.value)}}/>
                </div>
                <button type="submit">Add Book</button>
                <button type='button' onClick={handleAddRandom}>Add Random</button>
                <button type='button' onClick={handleAddRandomFromAPI}>Add Random via API</button>
            </form>
        </div>
    )
}

export default BookForm;