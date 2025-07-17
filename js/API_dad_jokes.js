


async function fetchMovie() {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const data = await response.json();
  console.log(data);
  return data; 
}


fetchMovie()
  .then(data => {
    const movieConteiner = document.getElementById('div');
    movieConteiner.className = 'movie-container';

    for (const item of data) {
      const title = item.show.name;
      const year = item.show.premiered.slice(0, 4);
      const imgLink = item.show.image?.medium 
      const genres = item.show.genres
      const summary = item.show.summary 

      const movieDiv = document.createElement('div')
      movieDiv.className = 'movie-item'
      movieDiv.innerHTML = `
        <img src="${imgLink}" alt="${title}">
        <h3>${title} (${year})</h3>
        <p>Genres: ${genres.join(', ')}</p>
        <p>${summary}</p>
      `;

      movieConteiner.appendChild(movieDiv);
    }

    document.body.appendChild(movieConteiner);
  })
  .catch(err => console.log('Klaida:', err));
