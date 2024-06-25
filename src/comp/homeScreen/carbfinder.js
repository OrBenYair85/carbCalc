
import React, { useState } from 'react';

function CarbSearch({ finalCarbResult, onSearch }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Call the parent component's search function with user input
        onSearch(inputValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="input">Enter what you are going to eat:</label>
            <input
                type='text'
                id='input'
                name='input'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type='submit'>Submit</button>
            <h1>{finalCarbResult}</h1>
        </form>
    );
}

export default CarbSearch;