import {useDispatch, useSelector} from "react-redux";
import {
    selectTitleFilter,
    setTitleFilter,
    resetFilters,
    setAuthorFilter,
    selectAuthorFilter,
    setFavFilter,
    selectFavFilter
} from "../../redux/slices/filterSlice";
import './Filter.css';

const Filter = ()=>{
    const dispatch = useDispatch();
    const handleTitleFilterChange = (e) => {
        dispatch(setTitleFilter(e.target.value));
    };

    const handleAuthorFilterChange = (e) => {
        dispatch(setAuthorFilter(e.target.value));
    };

    const handleResetFilers = () => {
        dispatch(resetFilters());
    };

    const handleFavFilterChange = ()=> {
        dispatch(setFavFilter());
    };

    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);
    const favFilter = useSelector(selectFavFilter);

    return(
        <div className= "app-block filter">
            <div className="filter-row">
                <div className='filter-group'>
                    <input
                        type="text"
                        placeholder="Filter by title..."
                        onChange={handleTitleFilterChange}
                        value={titleFilter}
                    />
                </div>
                <div className="filter-group">
                    <input
                        type="text"
                        placeholder="Filter by author..."
                        onChange={handleAuthorFilterChange}
                        value={authorFilter}
                    />
                </div>
                <div className="filter-group">
                    <label>
                        <input
                            type="checkbox"
                            checked={favFilter}
                            onChange={handleFavFilterChange}
                        /> Only Favourite
                    </label>
                </div>
                <button type='button' onClick={handleResetFilers}>Reset Filters</button>
            </div>
        </div>
    )
}
export default Filter;