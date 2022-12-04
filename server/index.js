const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { mainCards, animals, categories } = require("./data");
const typeDefs = require("./schema");
const Query = require("./resolvers/Query");
const Animal = require("./resolvers/animal");
const Category = require("./resolvers/category");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Animal,
    Category,
  },
});

startStandaloneServer(server, {
  context: () => ({
    mainCards,
    animals,
    categories,
  }),
  listen: { port: 4000 },
}).then(({ url }) => console.log(`🚀  Server ready at: ${url}`));
