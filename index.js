const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
type Query {
    aQueryField: String
    }

    type Schema {
      query: Query
    }
`)

const resolvers = {
  aQueryField: () => 'the query result'
}

const query = `
  query myFirstQuery {
    aQueryField  
  }
`

graphql(schema, query, resolvers).then((result) => console.log(result)).catch((error) => console.log(error))
