var express = require('express');
var router = express.Router();
const models = require('../models');
const sessionCheck = require('../session');
const { Sequelize: {Op}} = require('../models');

router.get('/sex/:sex', async function(req, res, next) {
  let A;
  if (req.params.sex == 'female') {
    A = await models.Post_it.findAll({
      order: [['id', 'desc']],
      where: {
        sex: 0
      },
      limit: 10
    });
  } else if (req.params.sex == 'male') {
    A = await models.Post_it.findAll({
      order: [['id', 'desc']],
      where: {
        sex: 1
      },
      limit: 10
    });
  } else {
    A = await models.Post_it.findAll({
      limit: 10,
      order: [['id', 'desc']]
    });
  }
  res.send({
    result: true,
    posts: A
  })
});

router.get('/sex/:sex/:id', async function(req, res, next) {
  let A;
  if (req.params.sex == 'female') {
    A = await models.Post_it.findAll({
      order: [['id', 'desc']],
      where: {
        sex: 0,
        id: {
          [Op.lt]: req.params.id
        }
      },
      limit: 10
    });
  } else if (req.params.sex == 'male') {
    A = await models.Post_it.findAll({
      order: [['id', 'desc']],
      where: {
        sex: 1,
        id: {
          [Op.lt]: req.params.id
        }
      },
      limit: 10
    });
  } else {
    A = await models.Post_it.findAll({
      where: {
        id: {
          [Op.lt]: req.params.id
        }
      },
      limit: 10,
      order: [['id', 'desc']]
    });
  }
  res.send({
    result: true,
    posts: A
  })
});

router.get('/mypost_it', sessionCheck, async function(req, res, next) {
  const A = await models.Post_it.findAll({
    where: {
      UserId : req.session.user.id
    }
  });
  res.send({
    result: true
  })
});
router.get('/post_it', sessionCheck,  async function(req, res, next) {
  const A = await models.Post_it.findAll({
    where: {
      buyerId : req.session.user.id
    }
  });
  res.send({
    result: true
  })
});

router.post('/newpost_it', sessionCheck, async function(req, res, next) {
    let count = req.session.user.count
    if (count >= 3) {
      const A = false
      const B = false
      res.send({
        result : false,
        message : "too many"
      })
    } else {
      const A = await models.Post_it.create({
        nickname : req.body.nickname,
        text : req.body.text,
        kakao_id : req.body.kakao_id,
        sex: req.body.sex,
        UserId : req.session.user.id,
      });
      const B = await models.User.update({
        count : count + 1 
      }, {
        where : {
          id : req.session.user.id
        }
      });
      req.session.user.count += 1;
      res.send({
        result : true
      })
    }});
router.put('/post_it', sessionCheck, async function(req, res, next) {
  const A = await models.Post_it.update({
    buyerId : req.session.user.id,
    sold : 1
  }, {
    where : {
      id: req.body.goal
    }
  });
  res.send({
    result: true
  })
})
router.delete('/post_it', async function(req, res, next) {
  const A = await models.Post_it.destroy({
    where : {
      id : req.body.id
    }
  });
  res.send({
    result: true
  })
});
router.get('/post_it/:nickname', async function(req, res, next) {
  const A = await models.Post_it.findAll({
    where: {
      nickname: {
        [Op.substring]: req.params.nickname
      }
    }
  });
  res.send({
    result: true
  })
});

module.exports = router;