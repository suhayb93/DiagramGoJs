import React from 'react';
import Card from './Card';


function SearchResults({ searchReult }) {


    return (

        <div>
            {
                searchReult.map((result, idx) => {
                    return (
                        <Card key={idx} search_result={result} />

                    )
                })
            }
        </div>

    )
}

export default SearchResults;