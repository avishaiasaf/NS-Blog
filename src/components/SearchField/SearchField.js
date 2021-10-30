import React from 'react';

function SearchField({ onInputChange, searchTitle }){
    return (
        <div>
            {searchTitle}
            <input type='text' onChange={onInputChange} />
        </div>
    );
}

export default SearchField;