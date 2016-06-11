var f = require("./function");
module.exports = function (app) {

    app.get('/home', function (req, res) {
        if (f.needLogin(req,res)) {
            return;
        }
        var Commodity = global.dbHelper.getModel('commodity');
        Commodity.find({}, function (error, docs) {
            res.render('home', {Commoditys: docs});
        });
    });

    app.get('/addcommodity', function (req, res, next) {
        //一些拦截
        // res.send();
        next();
    }, function (req, res) {
        res.render('addcommodity');
    });


    app.post('/addcommodity', function (req, res) {
        var Commodity = global.dbHelper.getModel('commodity');
        Commodity.create({
            name: req.body.name,
            price: req.body.price,
            imgSrc: req.body.imgSrc
        }, function (error, doc) {
            if (doc) {
                res.send(200);
            } else {
                res.send(404);
            }
        });
    });
}