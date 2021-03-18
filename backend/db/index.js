const pg = require('pg');
const { Pool } = require('pg');
require('dotenv').config();
const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`;
const db = new pg.Pool({
  connectionString: connectionString || process.env.DATABASE_URL,
});
db.query(`SELECT * FROM teachers WHERE id = 1;`)
  .then((user) => console.log(`this is from db index.js`, user.rows))
  .catch((err) => console.log(err));
console.log(`Connected to ${process.env.DB_NAME} on ${process.env.DB_HOST}`);

// helper function for adding use to database
const addUser = function (user) {
  console.log(user.firstName);
  const queryValues = [
    user.firstName,
    user.lastName,
    user.email,
    user.password,
  ];
  const queryString = `
  INSERT INTO teachers(first_name, last_name, email, user_password)
  VALUES($1, $2, $3, $4)
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

// Get all rooms made by User[:id]
const getRooms = function (id) {
  if (!id) {
    throw new Error('User not logged in!');
  }
  const queryValues = [id];
  const queryString = `SELECT * FROM rooms WHERE teacher_id = $1`;
  return db
    .query(queryString, queryValues)
    .then((res) => {
      console.log(res.rows[0]);
      return res.rows[0];
    })
    .catch(() => null);
};
exports.getRooms = getRooms;

const addRooms = function (id, data) {
  console.log("Data from index.addRooms", data)
  if (!id) {
    throw new Error('User not logged in!');
  }

  

  const queryValues = [
    id,
    data.title,
    data.description,
    data.link
  ];

  const queryString = `INSERT INTO rooms (teacher_id, room_name, room_description, link) VALUES ($1, $2, $3, $4) RETURNING *;`;
  return db
    .query(queryString, queryValues)
    .then((res) => {
      // console.log(res.rows[0]);
      return res.rows[0];
    })
    .catch((err) => console.log("CATCHED ERR +++>" ,err));
};
exports.addRooms = addRooms;

const deleteRoom = function (id) {
  if (!id) {
    throw new Error('User not logged in!');
  }
  const queryValues = [id];
  const queryString = `DELETE FROM rooms WHERE id = $1`;
  return db
    .query(queryString, queryValues)
    .then(() => {
      return;
    })
    .catch(() => null);
};
exports.deleteRoom = deleteRoom;

const getAttendees = function (id) {
  if (!id) {
    throw new Error('User not logged in!');
  }
  const queryValues = [id];
  const queryString = `
  SELECT * FROM attendees JOIN rooms
  ON rooms.id = attendees.room_id
  WHERE teacher_id = $1`;
  return db
    .query(queryString, queryValues)
    .then((res) => {
      console.log(res.rows[0]);
      return res.rows[0];
    })
    .catch(() => null);
};
exports.getAttendees = getAttendees;

const addAttendees = function (id, data) {
  if (!id) {
    throw new Error('User not logged in!');
  }
  const queryValues = [data.roomId, data.attendeeName, data.feedback];
  const queryString = `INSERT INTO attendees (room_id, attendee_name, feedback) VALUES ($1, $2, $3)`;
  return db
    .query(queryString, queryValues)
    .then((res) => {
      console.log(res.rows[0]);
      return res.rows[0];
    })
    .catch(() => null);
};
exports.addAttendees = addAttendees;

const getMessages = function (id) {
  if (!id) {
    throw new Error('User not logged in!');
  }
  const queryValues = [id];
  const queryString = `
  SELECT * FROM messages
  JOIN attendees
  ON attendee.id = messages.attendee_id
  JOIN rooms
  ON rooms.id = attendees.room_id
  WHERE teacher_id = $1`;
  return db
    .query(queryString, queryValues)
    .then((res) => {
      console.log(res.rows[0]);
      return res.rows[0];
    })
    .catch(() => null);
};
exports.getMessages = getMessages;

const addMessages = function (id, data) {
  if (!id) {
    throw new Error('User not logged in!');
  }
  const queryValues = [data.attendeeId, data.timeStamp, data.messageContent];
  const queryString = `INSERT INTO messages (attendee_id, time_stamp, message_content) VALUES ($1, $2, $3)`;

  return db
    .query(queryString, queryValues)
    .then((res) => {
      console.log(res.rows[0]);
      return res.rows[0];
    })
    .catch(() => null);
};
exports.addMessages = addMessages;
