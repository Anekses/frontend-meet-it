import { printDataRest } from './prints';

const restUrl = "https://rest-tunes.herokuapp.com/api/artists";

export const fetchRest400 = () => {
    fetch("https://rest-tunes.herokuapp.com/api/artists/cookie")
        .then(resp => {
            console.log("---------400 START---------");
            console.log(resp);
            console.log("---------400 END---------");
        })
        .catch(err => {
            console.log("---------400 ERROR START---------");
            console.log(err);
            console.log("---------400 ERROR END---------");
        });
};

export const fetchRest404 = () => {
    fetch("https://rest-tunes.herokuapp.com/api/cookies")
        .then(resp => {
            console.log("---------404 START---------");
            console.log(resp);
            console.log("---------404 END---------");
        })
        .catch(err => {
            console.log("---------404 ERROR START---------");
            console.log(err);
            console.log("---------404 ERROR END---------");
        });
};

export const fetchRest500 = () => {
    fetch("https://rest-tunes.herokuapp.com/api/albums/999999")
        .then(resp => {
            console.log("---------500 START---------");
            console.log(resp);
            console.log("---------500 END---------");
            console.log(resp);
        })
        .catch(err => {
            console.log("---------500 ERROR START---------");
            console.log(err);
            console.log("---------500 ERROR END---------");
        });
};

export const fetchRest = (limit, page) => {
    fetch(`${restUrl}?size=${limit}&page=${page}`)
        .then(resp => resp.json())
        .then(resp => {
            const artists = resp.items;

            artists.forEach(artist => {
                fetch(artist._links[1].url)
                    .then(respSecond => respSecond.json())
                    .then(respSecond => {
                        artist.albums = respSecond;
                        printDataRest(artist);
                    }).catch(err => console.error(err));
            });
        })
        .catch(err => console.error(err));
};

export const fetchRestOld = (limit, page) => {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE) {
            var artists = JSON.parse(request.responseText).items;

            artists.forEach(artist => {
                const subRequest = new XMLHttpRequest();
                subRequest.onreadystatechange = function() {
                    if (subRequest.readyState == XMLHttpRequest.DONE) {
                        var albums = JSON.parse(subRequest.responseText);
                        artist.albums = albums;
                        printDataRest(artist);
                    }
                };

                subRequest.open('GET', artist._links[1].url, false);
                subRequest.send(null);
            });
        }
    };

    request.open('GET', restUrl + "?size=" + limit + "&page=" + page, false);
    request.send(null);
};