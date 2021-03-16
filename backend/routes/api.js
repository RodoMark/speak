const { router } = require("../app");

module.exports = funciton(router, database){
  // GET rooms route to get room associated with the teacher
router.get('/rooms', function (req, res) {
  const userId = req.seesion.userId;
  database
    .getRooms(userId)
    .then((data) => {
      if (!user) {
        res.send({ error: 'error' });
        return;
      }
      res.json(data);
    })
    .catch((e) => res.json(e));
});
  // POST rooms route to add room to the teacher
  router.post('/rooms', function (req, res) {
    const userId = req.seesion.userId;
    const user = req.body;
    database
      .addRooms(userId, user)
      .then((data) => {
        if (!data) {
          res.send({ error: 'error' });
          return;
        }
        res.json(data);
      })
      .catch((e) => res.json(e));
  });

  // DELETE rooms route to delete room
  router.delete('/rooms', function (req, res) {
    const userId = req.seesion.userId;

    database
      .deleteRoom(userId)
      .then((data) => {
        if (!data) {
          res.send({ error: 'error' });
          return;
        }
        res.json(data);
      })
      .catch((e) => res.json(e));
  });
}
// GET attendees route
router.get('/attendees', function (req, res) {
  const userId = req.seesion.userId;
  database.getAttendees(userId).then(data => {
    if (!data) {
         res.send({ error: 'error' });
          return;
    }
    res.json(data);
  }).catch(e=> res.json(e))
})

// POST attendees route
router.post('/attendees', function (req, res) {
    const userId = req.seesion.userId;
    const user = req.body;
    database
      .addAttendees(userId, user)
      .then((data) => {
        if (!data) {
          res.send({ error: 'error' });
          return;
        }
        res.json(data);
      })
      .catch((e) => res.json(e));
  });


