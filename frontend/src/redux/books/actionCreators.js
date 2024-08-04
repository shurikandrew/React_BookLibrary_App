import * as action from './actionTypes';

export const addBook = (newBook) => {
    return {
        type: action.ADD_BOOK,
        payload: newBook
    };
}

export const deleteBook = (bookId) => {
    return {
        type: action.DELETE_BOOK,
        payload: bookId
    }
}