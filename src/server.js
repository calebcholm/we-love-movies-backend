const PORT = process.env.PORT || 5000;

const app = require("./app");
const knex = require("./db/connection");
const listener = () => console.log(`Listening on Port ${PORT}!`);

app.set('port', PORT);

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(process.env.PORT || PORT, listener);
  })
  .catch(console.error);
