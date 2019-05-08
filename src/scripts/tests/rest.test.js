import "isomorphic-fetch";

const fetchMock = require('fetch-mock');

test('should ...', () => {
   const mockResponse = JSON.stringify({  
      "items":[  
         {  
            "artistId":43,
            "name":"A Cor Do Som",
            "_links":[  
               {  
                  "url":"http://rest-tunes.herokuapp.com/api/artists/43",
                  "rel":"self"
               },
               {  
                  "url":"http://rest-tunes.herokuapp.com/api/artists/43/albums",
                  "rel":"albums"
               }
            ]
         },
         {  
            "artistId":1,
            "name":"AC/DC",
            "_links":[  
               {  
                  "url":"http://rest-tunes.herokuapp.com/api/artists/1",
                  "rel":"self"
               },
               {  
                  "url":"http://rest-tunes.herokuapp.com/api/artists/1/albums",
                  "rel":"albums"
               }
            ]
         },
         {  
            "artistId":230,
            "name":"Aaron Copland & London Symphony Orchestra",
            "_links":[  
               {  
                  "url":"http://rest-tunes.herokuapp.com/api/artists/230",
                  "rel":"self"
               },
               {  
                  "url":"http://rest-tunes.herokuapp.com/api/artists/230/albums",
                  "rel":"albums"
               }
            ]
         },
         {  
            "artistId":202,
            "name":"Aaron Goldberg",
            "_links":[  
               {  
                  "url":"http://rest-tunes.herokuapp.com/api/artists/202",
                  "rel":"self"
               },
               {  
                  "url":"http://rest-tunes.herokuapp.com/api/artists/202/albums",
                  "rel":"albums"
               }
            ]
         },
         {  
            "artistId":214,
            "name":"Academy of St. Martin in the Fields & Sir Neville Marriner",
            "_links":[  
               {  
                  "url":"http://rest-tunes.herokuapp.com/api/artists/214",
                  "rel":"self"
               },
               {  
                  "url":"http://rest-tunes.herokuapp.com/api/artists/214/albums",
                  "rel":"albums"
               }
            ]
         }
      ],
      "page":{  
         "size":10,
         "totalElements":275,
         "totalPages":28,
         "number":1
      },
      "_links":[  
         {  
            "url":"http://rest-tunes.herokuapp.com/api/artists?size=10&page=1",
            "rel":"self"
         },
         {  
            "url":"http://rest-tunes.herokuapp.com/api/artists?size=10&page=2",
            "rel":"next"
         }
      ]
   });
   const mockResponseArtist = JSON.stringify({  
      "items":[  
         {  
            "albumId":43,
            "title":"MK III The Final Concerts [Disc 1]",
            "_links":[  
               {  
                  "url":"http://rest-tunes.herokuapp.com/api/albums/43",
                  "rel":"self"
               },
               {  
                  "url":"http://rest-tunes.herokuapp.com/api/albums/43/tracks",
                  "rel":"tracks"
               }
            ]
         }
      ],
      "page":{  
         "size":10,
         "totalElements":1,
         "totalPages":1,
         "number":1
      },
      "_links":[  
         {  
            "url":"http://rest-tunes.herokuapp.com/api/artists/43/albums?size=10&page=1",
            "rel":"self"
         }
      ]
   });

   fetchMock.get("http://rest-tunes.herokuapp.com/api/artists?size=5&page=0", mockResponse)
      .get("http://rest-tunes.herokuapp.com/api/artists/43/albums", mockResponseArtist)
      .get("http://rest-tunes.herokuapp.com/api/artists/1/albums", mockResponseArtist)
      .get("http://rest-tunes.herokuapp.com/api/artists/230/albums", mockResponseArtist)
      .get("http://rest-tunes.herokuapp.com/api/artists/202/albums", mockResponseArtist)
      .get("http://rest-tunes.herokuapp.com/api/artists/214/albums", { body: "Error!", status: 500})
      .get("http://rest-tunes.herokuapp.com/api/artists/cookie", 400)
      .get("http://rest-tunes.herokuapp.com/api/cookies", 404)
      .get("http://rest-tunes.herokuapp.com/api/albums/999999", 500);

   fetch("http://rest-tunes.herokuapp.com/api/artists/214/albums").then(resp => {
      console.log(resp);

      fetchMock.restore();

      fetch("http://rest-tunes.herokuapp.com/api/artists/214/albums").then(resp => {
         console.log(resp);
      });
   });
});


