export const printDataGraphQL = (listOfArtists) => {
    const el = document.querySelector('.main');

    listOfArtists.forEach(artist => {
        const name = artist.name;
        const albumName = artist.albums && artist.albums[0].name;

        const newEl = document.createElement('div');
        newEl.innerHTML = `Hi GraphQL! My name is ${name} and this is my album: ${albumName}`;

        el.appendChild(newEl);
    });
};

export const printDataRest = (artist) => {
    const el = document.querySelector('.main');
    const name = artist.name;
    const albumName = artist.albums && artist.albums.items && artist.albums.items[0].title;

    const newEl = document.createElement('div');
    newEl.innerHTML = `Hi REST! My name is ${name} and this is my album: ${albumName}`;

    el.appendChild(newEl);
};