const bcrypt = require('bcrypt');

module.exports = function (router, database) {
  //Post route for user registration
  router.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 12);
    database
      .userExists(req.body.email)
      .then((boo) => {
        if (!boo) {
          res.send({ error: 'error' });
          return;
        }
        database.addUser(req.body).then((user) => {
          if (!user) {
            res.send({ error: 'error' });
            return;
          }
          req.session.userId = user.id;
          res.send();
        });
      })
      .catch((e) => res.send(e));
  });

  //Helper function for correct password check
  const login = function (email, password) {
    return database.getUserWithEmail(email).then((user) => {
      if (bcrypt.compareSync(password, user.password)) {
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
        res.send({ user: { name: user.name, email: user.email, id: user.id } });
      })
      .catch((error) => res.send(error));
  });

  //Post route for user logout
  router.post('/logout', (req, res) => {
    req.session = null;
    res.send();
  });

  // Fetches user information
  router.get('/me', (req, res) => {
    const userId = req.session.userId;
    if (!userId) {
      res.send();
      return;
    }

    database
      .getUserWithId(userId)
      .then((user) => {
        if (!user) {
          res.send({ error: 'no user with that id' });
          return;
        }
        res.send({ user: { name: user.name, email: user.email, id: userId } });
      })
      .catch((error) => res.send(error));
  });

  return router;
};
