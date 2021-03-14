const pg = require('pg');
require('dotenv').config();
const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`;
const db = new pg.Client({
  connectionString: connectionString || process.env.DATABASE_URL,
});
db.query(`SELECT * FROM teachers WHERE id = 1;`)
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
console.log(`Connected to ${process.env.DB_NAME} on ${process.env.DB_HOST}`);

// helper function for adding use to database
const addUser = function (user) {
  const queryValues = [
    user.firstName,
    user.lastName,
    user.email,
    user.password,
  ];
  const queryString = `
  INSERT INTO teachers(first_name, last_name, email, user_password)
  VALUES($1, $2, $3)
  RETURNING *;
  `;
  return db
    .query(queryString, queryValues)
    .then((user) => {
      const newUser = {};
      newUser.id = user.rows[0].id;
      newUser.firstName = user.rows[0].first_name;
      newUser.lastName = user.rows[0].last_name;
      newUser.email = user.rows[0].email;
      newUser.password = user.rows[0].password;
      return newUser;
    })
    .catch(() => null);
};
exports.addUser = addUser;

//Helper function for checking if user with an email exists during registration
const userExists = function (email) {
  const queryValues = [email];
  const queryString = `
  SELECT email
  FROM teachers
  WHERE email = $1;
  `;
  return db
    .query(queryString, queryValues)
    .then((obj) => {
      return obj.rowCount === 0 ? true : false;
    })
    .catch(() => null);
};

exports.userExists = userExists;

//Helper function to return user object for a given id
const getUserWithId = function (id) {
  const queryValues = [id];
  const queryString = `
  SELECT *
  FROM teachers
  WHERE id = $1;
  `;
  return db.query(queryString, queryValues).then((res) => {
    return res.rows[0];
  });
};
exports.getUserWithId = getUserWithId;

//Helper function for retrieving user with email
const getUserWithEmail = function (email) {
  console.log(email);

  const queryValues = [email];
  const queryString = `
  SELECT *
  FROM teachers
  WHERE email = $1;
  `;
  return db
    .query(queryString, queryValues)
    .then((user) => {
      console.log(user.rows[0]);
      return user.rows[0];
    })
    .catch(() => null);
};
exports.getUserWithEmail = getUserWithEmail;
