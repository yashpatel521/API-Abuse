const express = require("express");
var cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const conn = require("./config");

conn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});

const app = express();
const PORT = 5000; // port that is use for Express
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running.....");
});

// API routes
app.use("/api/users", userRoutes); // user routes for login

// Static Files routes
app.use("/views", express.static("views"));
app.listen(PORT, console.log(`Server on ${PORT}`));

// For GraphQL Server
const dotenv = require("dotenv");
dotenv.config();
require("./config/db.js");
require("./models/UserModel.js");
require("./models/QuotesModel.js");
const { ApolloServer } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} = require("apollo-server-core");
const typeDefs = require("./Gql/schemaGql");
const resolvers = require("./Gql/resolvers.js");
const context = require("./MiddleWare/middleWare.js");
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  plugins: [
    process.env.GRAPHQLUI == "DEVELOPMENT"
      ? ApolloServerPluginLandingPageGraphQLPlayground()
      : ApolloServerPluginLandingPageDisabled(),
  ],
});

const PORTGRAPHQL = 5001; // port that is use for GraphQL

server.listen(
  PORTGRAPHQL,
  console.log(`Server is on http://localhost:${PORTGRAPHQL}`)
);
