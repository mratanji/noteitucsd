var accounts = require('../accounts.json');

exports.addAccount = function(req, res) {    

    var newAccount = {
        "name": req.query.name,
        "username": req.query.username,
        "password": req.query.password
    }

    accounts["accounts"].push(newAccount);

    res.render('account_done');
 }