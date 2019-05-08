import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { graphql } from 'graphql';
import { schemaStringGraphQL } from '../../../schema';

test('should ...', () => {
    const schemaString = schemaStringGraphQL;
    const schema = makeExecutableSchema({ typeDefs: schemaString });

    addMockFunctionsToSchema({ schema });

    const query = `
        query {
            artists(limit: 2, offset: 0) {
                albums(limit: 2) {
                    id
                    title
                }
                id
            }
        }
    `;

    graphql(schema, query)
        .then((result) => console.log(result.data.artists))
        .catch((result) => console.log(result));
});