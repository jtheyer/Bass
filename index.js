const { ApolloServer } = require('apollo-server');
const fs = require('fs')
const path = require('path')

let links = [{
    id: 'link_0',
    description: 'link zero (First link really)',
    url: 'https://localhost:4000/zero'
}]

let idCount = links.length
const resolvers = {
    Query: {
        info: () => `GraphQL implementation for Bass Tech`,
        feed: () => links
    },
    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url
            }
            links.push(link)
            return link
        }
    }
}

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
})

server
    .listen()
    .then(({ url }) =>
        console.log(`Server is running on ${url}`)
    );