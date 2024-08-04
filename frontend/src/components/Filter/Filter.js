import {useDispatch, useSelector} from "react-redux";
import {selectTitleFilter, setTitleFilter} from "../../redux/slices/filterSlice";
import './Filter.css';

const Filter = ()=>{
    const dispatch = useDispatch();
    const handleTitleFilterChange = (e) => {
        dispatch(setTitleFilter(e.target.value));
    }

    const titleFilter = useSelector(selectTitleFilter);


    return(
        <div className= "app-block filter">
            <div className='filter-group'>
                <input
                    type="text"
                    placeholder="Filter by title..."
                    onChange={handleTitleFilterChange}
                    value={titleFilter}
                />
            </div>
        </div>
    )
}
export default Filter;