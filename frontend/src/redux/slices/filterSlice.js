import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: '',
    author: '',
    fav: false
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            return {
                ...state,
                title: action.payload
            };
        },
        setAuthorFilter: (state, action) => {
            return {
                ...state,
                author: action.payload
            };
        },
        setFavFilter: (state) => {
            return {
                ...state,
                fav: !state.fav
            };
        },
        resetFilters: () => {
            return initialState;
        }
    }
});

export const { setTitleFilter,setAuthorFilter,setFavFilter,resetFilters } = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectFavFilter = (state) => state.filter.fav;

export default filterSlice.reducer;