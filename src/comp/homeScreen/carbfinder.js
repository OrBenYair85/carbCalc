import React, {useState} from 'react';



function CarbSearch () {
    const [food,setFood] = useState('');

    const handleInputChange = (event) => {
        setFood(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log('Food:', food); // Use the food state variable as needed
        return food;
      };


    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor='SearchInput'>Enter your food:</label>
            <input type='text' id='SearchInput' value={food} onChange={handleInputChange}></input>
            <button type='submit'>Search</button>
        </form>
    )
};




export default CarbSearch;