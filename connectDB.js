const Sequelize = require("sequelize");


const database = "todo_db";
const username = "postgres";
const password = "sqljayesh";
const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
});
const connect = async () => {
  return sequelize.authenticate();
}

module.exports = {
  connect,
  sequelize,
}
/*sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been esablished successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });*/
