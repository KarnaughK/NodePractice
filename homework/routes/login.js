module.exports = function (app) {
    app.get('/login', function (req, res) {
        res.render('login');
    });

    //req是传过来的数据 一般用req.body.xxx使用
    app.post('/login', function (req, res) {
        //global.dbHelper.getModel("数据库表名称")  获取用来操作这张表的工具类
        var User = global.dbHelper.getModel('user');
        var uname = req.body.username;
        //工具类.findOne(条件,回调)
        User.findOne({name: uname}, function (error, doc) {
            if (error) {
                //res.send是返回数据
                //咱们代码约定返回值格式  status：返回是否成功
                res.send({status: false, msg: error});
            } else if (!doc) {
                res.send({status: false, msg: "用户名不存在"});
            } else if (req.body.password == doc.password) {
                req.session.user = doc;
                res.send({status: false, msg: "登录成功!"});
            } else {
                res.send({status: false, msg: "密码错误!"});
            }
        });
    });
}