module.exports = function (app) {
    app.get('/login', function (req, res) {
        res.render('login');
    });

    app.post('/login', function (req, res) {
        var User = global.dbHelper.getModel('user'),
            uname = req.body.username;
        User.findOne({name: uname}, function (error, doc) {
            if (error) {
                res.send({status: false, msg: error});
                console.log(error);
            } else if (!doc) {
                res.send({status: false, msg: "用户名不存在"});
            } else if (req.body.upwd != doc.password) {
                res.send({status: false, msg: "密码错误!"});
            } else {
                req.session.user = doc;
                res.send({status: false, msg: "登录成功!"});
            }

        });
    });
}