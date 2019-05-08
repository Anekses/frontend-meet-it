import 'core-js';
import '../styles/index.scss';

import { fetchRest, fetchRestOld, fetchRest404, fetchRest500, fetchRest400 } from './rest';
import { getGraphqlQuery, getGraphqlQueryOld, getGraphqlQuery400, getGraphqlQuery404, getGraphqlQuery500 } from './graphql';

//---------REST-----------

fetchRest(5, 1);
// fetchRest(5, 2);

// fetchRestOld(5, 1);
// fetchRestOld(5, 2);

// fetchRest400();
// fetchRest404();
// fetchRest500();

//---------GraphQL-----------

getGraphqlQuery(5, 0);
// getGraphqlQuery(5, 5);

// getGraphqlQueryOld(5, 0);
// getGraphqlQueryOld(5, 5);

// getGraphqlQuery400();
// getGraphqlQuery404();
// getGraphqlQuery500();
