import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { printDataGraphQL } from './prints';

const graphqlUrl = "http://51.68.141.172/graphql";

const client = new ApolloClient({
    uri: graphqlUrl
});

const client404 = new ApolloClient({
    uri: "http://51.68.141.172/graphql1"
});

export const getGraphqlQuery400 = () => {
    client.query({
        query: gql`
            query TodoApp {
                artists(limit: 5, offset: 0) {
                    cookie
                }
            }
        `,
    })
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

export const getGraphqlQuery404 = () => {
    client404.query({
        query: gql`
            query TodoApp {
                artists(limit: 5, offset: 0) {
                    cookie
                }
            }
        `,
    })
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

export const getGraphqlQuery500 = () => {
    client.query({
        query: gql`
            query TodoApp {
                artists(limit: 5, offset: 0) {
                    rating
                }
            }
        `,
    })
    .then(resp => {
        console.log("---------500 START---------");
        console.log(resp);
        console.log("---------500 END---------");
    })
    .catch(err => {
        console.log("---------500 ERROR START---------");
        console.log(err);
        console.log("---------500 ERROR END---------");
    });
};

export const getGraphqlQueryOld = (limit, offset) => {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE) {
            var data = JSON.parse(request.responseText);
            printDataGraphQL(data.data.artists);
        }
    };

    var query = {
        query: `{
            artists(limit: ${limit}, offset: ${offset}) {
                albums(limit: 1) {
                    id
                    name: title
                }
                id
                name
            }
        }`
    };

    request.open('POST', graphqlUrl, false);
    request.send(JSON.stringify(query));
};

export const getGraphqlQuery = (limit, offset) => {
    client.query({
        query: gql`
            query TodoApp {
                artists(limit: ${limit}, offset: ${offset}) {
                    albums(limit: 1) {
                        id
                        name: title
                    }
                    id
                    name
                }
            }
        `,
    })
    .then(data => printDataGraphQL(data.data.artists))
    .catch(error => console.error(error));
};

