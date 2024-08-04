import {useDispatch, useSelector} from "react-redux";
import {
    selectTitleFilter,
    setTitleFilter,
    resetFilters,
    setAuthorFilter,
    selectAuthorFilter
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


    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);

    const handleResetFilers = () => {
        dispatch(resetFilters());
    };

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
                <button type='button' onClick={handleResetFilers}>Reset Filters</button>
            </div>
        </div>
    )
}
export default Filter;