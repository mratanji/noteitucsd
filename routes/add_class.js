var classes = require('../classes.json');

exports.addClass = function(req, res) {    

    var newClass = {
        "department": req.query.department,
        "code": req.query.code,
        "year": req.query.year,
        "quarter": req.query.quarter,
        "professor": req.query.professor
    };

    classes["Classes"].push(newClass);

    console.log(newClass);

    res.render('done_addclass', classes);
 };

exports.view = function(req, res) {
    var random_num = Math.random();

    if(random_num > 0.5){
        res.render("add_class", classes);
    }else{
        res.render("add_class_alt", classes)
    }
}