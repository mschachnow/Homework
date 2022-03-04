var express = require('express');
var router = express.Router();

//const contacts = [{ name: 'Joe', number: '732-690-8321' }, { name: 'Jill', number: '768-902-3412' }, { name: 'John', number: '1-718-563-3000' }];

/* GET home page. */
/*router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/contacts', function (req, res, next) {
  res.render('index', { contacts });
});*/

router.post('/api/contacts', (req, res, next) => {
  connection.query('INSERT INTO contacts(name, number,email) VALUES(?, ?, ?, ?)',
    [req.body.name, req.body.number, req.body.email],
    (error, results, fields) => {
      if (error) throw error;

      res.send(req.body);
    });
});

router.get('/api/contacts', (req, res, next) => {
  connection.query('SELECT * FROM contacts WHERE id = ?',
    [req.params.id],
    (error, results, fields) => {
      if (error) throw error;

      if (!results.length) {
        return console.log(error);//next(new Error('No contact found with id ' + req.params.id));
      }
      res.send(results);
    });
});



module.exports = router;
