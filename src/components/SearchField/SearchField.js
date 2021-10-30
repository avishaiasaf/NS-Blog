import React from 'react';

function SearchField({ onInputChange, searchTitle }){
    return (
        <div className="measure center">
            <label for="name" className="baskerville f3 fw1 mt0 lh-title">{searchTitle}</label>
            <input id="name" className="input-reset ba b--black-20 pa2 mb2 db center" type="text" aria-describedby="name-desc" onChange={onInputChange} />
        </div>
    );
}

export default SearchField;