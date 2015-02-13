var accounts = require('../accounts.json');

exports.addAccount = function(req, res) {    

    var newAccount = {
        "name": req.query.real_name,
        "username": req.query.uname,
        "password": req.query.pass
    };

    accounts["accounts"].push(newAccount);

    res.render('account_done', accounts);
 };

exports.view = function(req, res) {
    res.render('/account_done', accounts)
}