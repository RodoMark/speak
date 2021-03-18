const bcrypt = require('bcrypt');

module.exports = function (router, database) {
  //Post route for user registration
  router.post('/', (req, res) => {
    // req.body.password = bcrypt.hashSync(req.body.password, 12);
    console.log(req.body.email);
    database
      .userExists(req.body.email)
      .then((user) => {
        if (!user) {
          res.send({ error: 'error' });
          return;
        }
        database.addUser(req.body).then((user) => {
          if (!user) {
            res.send({ error: 'error' });
            return;
          }
          req.session.userId = user.id;
          res.json(user);
        });
      })
      .catch((e) => res.json(e));
  });

  //Helper function for correct password check
  const login = function (email, password) {
    return database.getUserWithEmail(email).then((user) => {
      // if (bcrypt.compareSync(password, user.password))
      if (password === user.user_password) {
        return user;
      }
      return null;
    });
  };
  exports.login = login;

  //Post route for user login
  router.post('/login', (req, res) => {
    const { email, password } = req.body;
    login(email, password)
      .then((user) => {
        if (!user) {
          res.send({ error: 'error' });
          return;
        }
        req.session.userId = user.id;
        console.log(`returned user: ${user}`);
        res.json({ user: { name: user.name, email: user.email, id: user.id } });
      })
      .catch((error) => res.send(error));
  });

  //Post route for user logout
  router.post('/logout', (req, res) => {
    req.session = null;
    res.json({ session: null });
  });

  // Fetches user information
  router.get('/me', (req, res) => {
    const userId = 1;
    if (!userId) {
      res.json({ answer: 42 });
      return;
    }

    database
      .getUserWithId(userId)
      .then((user) => {
        console.log(user);
        if (!user) {
          res.json({ error: 'no user with that id' });
          return;
        }

        res.json(user);
      })
      .catch((error) => res.json(error));
  });

  return router;
};
