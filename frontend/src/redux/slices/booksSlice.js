import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import createBook from "../../utils/createBook";


const initialState = [];

export const fetchBook = createAsyncThunk(
    'books/fetchBook',
    async () => {
        const res = await axios.get('http://localhost:4000/random-book');
        return res.data;
    }
);

const booksSlice = createSlice(
    {
        name: 'books',
        initialState,
        reducers: {
            addBook: (state, action) => {
                return [...state, action.payload];
            },
            deleteBook: (state, action) => {
                return state.filter(book => book.id !== action.payload);
            },
            changeFavorite: (state, action) =>{
                return state.map(book =>
                    book.id === action.payload ?
                        { ...book, isFavorite: !book.isFavorite } :
                        book
                );
            }
        },
        extraReducers: (builder) => {
            builder.addCase(fetchBook.fulfilled, (state, action) =>
                {
                    if(action.payload.title && action.payload.author){
                        const book = createBook(action.payload, 'API');
                        return [...state, book];
                    }

                    return state;
                }
            )
        }
    }
);


export const {addBook, deleteBook,changeFavorite} = booksSlice.actions;

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;