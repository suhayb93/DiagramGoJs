import React, { useState, useContext } from 'react';
import { GlobalStore } from '../../Utils/context';

const SearchFrom = (props) => {

    const store = useContext(GlobalStore);
    const [searchTxt, setSearchTxt] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        if ('onSubmit' in props) {
            props.onSubmit(searchTxt)
            store.clearHistory();
        }

    }

    return (
        <form
            className="row row-cols-lg-auto g-3 align-items-center"
            onSubmit={onFormSubmit}
        >
            <div className="col-12">
                <label className="visually-hidden" htmlFor="searchField">Search</label>
                <input value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)} type="text" className="form-control" id="searchField" placeholder="Search" />

            </div>

            <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default SearchFrom