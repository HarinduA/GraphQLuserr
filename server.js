const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');

// Define a schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Define a resolver
const root = {
  hello: () => 'Hello world!',
};

// Initialize an Express application
const app = express();

// Enable CORS for all origins
app.use(cors());

// Define the /graphql endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

// Start the server
app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');
});
