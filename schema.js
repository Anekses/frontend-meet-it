export const schemaStringGraphQL = `schema {
    query: Query
    mutation: Mutations
    subscription: Subscriptions
  }
  
  """This directive allows results to be deferred during execution"""
  directive @defer on FIELD
  
  type Album implements Rating {
    """Ocena pobierana asynchronicznie"""
    asyncRating: Float!
    id: ID!
  
    """Ocena pobierana synchronicznie"""
    rating: Float!
    title: String!
    tracks(limit: Int = 0): [Track]!
  }
  
  type Artist implements Rating {
    albums(limit: Int = 0): [Album]!
  
    """Ocena pobierana asynchronicznie"""
    asyncRating: Float!
    id: ID!
    name: String!
  
    """Ocena pobierana synchronicznie"""
    rating: Float! @deprecated(reason: "not working")
  }
  
  type Genre {
    name: String!
  }
  
  type Mutations {
    """Dodaje utwór do albumu"""
    addTrackToAlbum(albumId: Int!, composer: String!, genre: String!, name: String!, unitPrice: Float): Track
  }
  
  type Query {
    """Zwraca album o podanym id"""
    album(id: ID!): Album
  
    """Zwraca listę artystów"""
    artists(limit: Int!, offset: Int!): [Artist]
  }
  
  interface Rating {
    asyncRating: Float!
    rating: Float!
  }
  
  type Subscriptions {
    """Zwraca subskrypcje wszystkich utworów"""
    tracks: String!
  }
  
  type Track {
    composer: String
    genre: Genre!
    id: ID!
    name: String!
    unitPrice: Float!
  }
`;