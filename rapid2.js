// TOP 1000 MOVIES (API -2)
const url = 'https://imdb-top-1000-movies-series.p.rapidapi.com/byrating';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '368d9d91dfmsh18598e1b2ea283fp198005jsnf6703649f6a6',
		'x-rapidapi-host': 'imdb-top-1000-movies-series.p.rapidapi.com',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: new URLSearchParams({
		above: '8.1',
		under: '8.2'
	})
};

async function moviesData() {
    try {
        const response = await fetch(url, options);
        if (!response.ok){
            throw new Error("Something went wrong")
        }
        const result = await response.json();
        displayData(result);
        }
    catch (err) {
        console.error(err);
    }
}

function displayData(movies){
    console.log(movies)
    let container = document.getElementById("container")
    let loader = document.getElementById("loader")
    let elements = movies.result
    for (let obj of elements){
        loader.remove();
        let items = document.createElement("div")
        items.className = "items" 
        items.innerHTML = `
        <img src='${obj.Poster_Link}' class = "Image">
        <h3>Movie-Name : ${obj.Series_Title}</h3>
        <p><strong>Rating</strong> : ${obj.IMDB_Rating}</p>
        <p><strong>Duration</strong> : ${obj.Runtime}</p>
        `;
        container.appendChild(items);
    }
    };

window.addEventListener("DOMContentLoaded", function (){
    moviesData()
})