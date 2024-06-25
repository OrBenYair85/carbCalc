import React from 'react';

var searchInputc = '';

function CarbSearch () {
    return (
        <form>
            <label htmlFor='SearchInput'>Enter your food:</label>
            <input type='text' id='SearchInput'></input>
            <button type='submit'>Search</button>
        </form>
    )
}