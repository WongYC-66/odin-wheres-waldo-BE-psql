var express = require('express');
var router = express.Router();

const User = require('../model/user')

//  API point
// /v1/success_guess_post 
//    input : val, x-coor, y-coor
//    output : true/ false

// /v1/score_board_get
//    output : [{username1, score1}, ...]

// /v1/score_board_post
//    input : user, time
//    output : success/fail


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


/* POST guess */
router.post('/v1/success_guess_post', function (req, res, next) {

  let jsonData = req.body
  let { val, x, y } = jsonData
  // console.log(jsonData)

  let solution = {
    1: [0.488, 0.713],
    2: [0.853, 0.670],
    3: [0.274, 0.600],
    4: [0.135, 0.677],
  }

  let tolerance = 0.03

  let result = false

  let [solX, solY] = solution[val]

  if (Math.abs(x - solX) <= tolerance && Math.abs(y - solY) <= tolerance) {
    result = true
  }

  res.json({ 'res': result });
});

/* GET scoreboard list */
router.get('/v1/score_board_get', async function (req, res, next) {

  try {
    let users = await User.find()
      .sort({ time: 1 })
      .exec()
      
    res.json({
      "users": users
    })
  } catch {
    res.json({
      'msg': "error"
    });
  }
});

/* POST scoreboard list */
router.post('/v1/score_board_post', async function (req, res, next) {
  let jsonData = req.body
  console.log(jsonData)
  let { username, time } = jsonData

  try {
    let newUser = new User({ name: username, time })
    await newUser.save()
    res.json({ 'msg': 'success' });
  } catch {
    res.json({ 'msg': 'submission failed' });
  }

});


module.exports = router;
