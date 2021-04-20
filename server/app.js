const express = require('express');
const graphqlHHTP = require('express-graphql')

const app = express();
const { graphqlHTTP } = require('express-graphql')
const PORT = 3005;

app.use('/graphql', graphqlHTTP({}));

app.listen(PORT, err => {
    err ? console.log(error) : console.log('Server started!');
});
