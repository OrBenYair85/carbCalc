
const apiKey = 'gSVkUvNqEAfb3iatE2dY0Q==EpOjusY1pNY6jgNb'//API key of calorieninjas
const data = '1 egg';// the data of the food
var url = 'https://api.calorieninjas.com/v1/nutrition?query=' + data; //the URL api
let carbohydratesTotal = 0;

fetch(url, {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json'
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
})
.then(data => {
    console.log(data);
    const firstItem = data.items[0];
    carbohydratesTotal = firstItem.carbohydrates_total_g;
    console.log('Total Carbohydrates:', carbohydratesTotal)
})
.catch(error => {
    console.error('Error:', error);
});




