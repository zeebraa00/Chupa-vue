var express = require('express');
const { User } = require('../models') // models.User 대체
var router = express.Router();

/* GET users listing. */
router.post('/signup', async function(req, res, next) {
  await User.create({
    uid: req.body.uid
  });
  res.send({
    result: true
  })
});

router.post('/login', async function (req, res) {
  const A = await User.findOne({
    where: {
      uid: req.body.uid
    }
  });
  if (A != null) {
    req.session.user = A.dataValues;
    res.send({
      result: true
    })
  } else {
    res.send({
      result: false
    })
  }
})

router.post('/logout', function (req, res) {
  req.session.destroy(function(err) {
    res.send({
      result: true
    })
  })
})

module.exports = router;
