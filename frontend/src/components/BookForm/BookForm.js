import { useState } from 'react'
import { useDispatch } from "react-redux";
import axios from 'axios';
import { addBook } from "../../redux/books/actionCreators";
import  "./BookForm.css"
import books from '../../data/books.json';
import createBook from "../../utils/createBook";

const BookForm = (props) => {
    const [title,setTitle] = useState("");
    const [author , setAuthor] = useState("");
    const dispatch = useDispatch();

    const handleAddRandom = () => {
        const randomIndex = Math.floor(Math.random()*books.length);
        const randomBook = books[randomIndex];

        const book = createBook(randomBook, 'random');

        dispatch(addBook(book));
    }

    const handleAddRandomFromAPI = async () => {
        try {
            const res = await axios.get('http://localhost:4000/random-book');

            if(res?.data?.title && res?.data?.author){
                const book = createBook(res.data, 'API');
                dispatch(addBook(book));
            }
        }catch (error) {
            console.log("Error: ", error);
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault() ;

        if (title && author){
            const book = createBook({title, author}, 'user');

            dispatch(addBook(book));

            setTitle("");
            setAuthor("");
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