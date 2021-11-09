import React from 'react';

function SearchField({ onInputChange, searchTitle }){
    return (
        <div className="measure center">
            <label for="name" className="baskerville f3 fw1 mt0 lh-title">{searchTitle}</label><br />
            <input id="name" className="input-reset ba b--black-20 pa2 mb2  center" type="text" aria-describedby="name-desc" onChange={onInputChange} />
            <br /><br /><br />
        </div>
    );
}

export default SearchField;