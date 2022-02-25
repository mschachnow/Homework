var express = require('express');
var router = express.Router();
const contacts = [{ name: 'Joe', number: '732-690-8321' }, { name: 'Jill', number: '768-902-3412' }, { name: 'John', number: '1-718-563-3000' }];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/contacts', function (req, res, next) {
  res.render('index', { contacts });
});
router.get('/api/contacts', function (req, res, next) {
  res.send(contacts);
})
router.post('/api/contacts', function (req, res, next) {
  //console.log(req.body);
  contacts.push(req.body);
});

module.exports = router;
