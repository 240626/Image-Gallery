function getMovies(){

    let title = document.getElementById("search").value;
    let year = document.getElementById("year").value;

    if(title == "") return;

    let url = `https://www.omdbapi.com/?apikey=thewdb&s=${title}`;

    if(year != ""){
        url += `&y=${year}`;
    }

    fetch(url)
    .then(res => res.json())
    .then(data => {

        let box = document.getElementById("movies");
        box.innerHTML = "";

        if(!data.Search) return;

        data.Search.forEach(movie => {

            box.innerHTML += `
            <div class="movie">
                <img src="${movie.Poster}">
                <div>
                    <h3>${movie.Title}</h3>
                    <p>${movie.Year}</p>
                </div>
            </div>
            `;
        });

    });

}