module.exports = (db) => {
  const getTeachers = () => {
      const query = {
          text: 'SELECT * FROM teachers',
      };
      return db
          .query(query)
          .then((result) => result.rows)
          .catch((err) => err);
  };

  const getTeacherByEmail = email => {
      const query = {
          text: `SELECT * FROM teachers WHERE email = $1` ,
          values: [email]
      }
      return db
          .query(query)
          .then(result => result.rows[0])
          .catch((err) => err);
  }

  const addTeacher = (firstName, lastName, email, password) => {
      const query = {
          text: `INSERT INTO teachers (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *` ,
          values: [firstName, lastName, email, password]
      }
      return db.query(query)
          .then(result => result.rows[0])
          .catch(err => err);
  }

  const addRoom = (teacherId, roomName, startTime, endTime, link) => {
    const query = {
        text: `INSERT INTO rooms (teacher_id, room_name, start_time, end_time, link) VALUES ($1, $2, $3, $4, $5) RETURNING *` ,
        values: [teacherId, roomName, startTime, endTime, link]
    }
    return db.query(query)
        .then(result => result.rows[0])
        .catch(err => err);
}

  // const getAttendeePosts = () => {
  //     const query = {
  //         text: `SELECT attendee.id as attendee_id, first_name, last_name, email, posts.id as post_id, title, content
  //     FROM users
  //     INNER JOIN posts
  //     ON users.id = posts.user_id`
  //     }
  //     return db.query(query)
  //         .then(result => result.rows)
  //         .catch(err => err);
  // }

  return {
      getTeachers,
      getTeachersByEmail,
      addTeacher,
      addRoom,
      // getAttendeePosts
  };
};