// fetching movies API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2b1ea3327fmsh00039ebf1e3a31fp1df3d5jsna1907662abc5',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
    const value ="";
    const search = document.querySelector(".search");
            search.addEventListener("input", e => {
                value = e.target.value
                console.log(value)
            })
fetch('https://imdb8.p.rapidapi.com/auto-complete?q='+ value, options)
	.then(response => response.json())
    .then(data => {
        const list = data.d;
        list.map(((item) => {
            const name =item.l;
            const poster = item.i.imageUrl;
            const MainMovie =`<li><a href ="movie.html" class="movie-url"><img src =${poster} data=${poster}> <p>${name}</p></a></li>`
            document.querySelector(".movies").innerHTML +=MainMovie 
        }))
    })
	.catch(err => console.error(err));

    let movieUrl=document.querySelector(".movie-url");
    movieUrl.addEventListener("click", () => {
            // movie page section
            let background= movieUrl.firstChild.attr("src");
            console.log(background)
        const movie = document.querySelector(".movie-info");
        movie.cssText=`background-image: url(${background});`
    })