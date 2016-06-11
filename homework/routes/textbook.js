/**
 * 教材信息管理
 * @param app
 */
module.exports = function (app) {
    //查看购物车商品
    app.get('/textbook', function (req, res) {
        var Cart = global.dbHelper.getModel('textbook');
        if (req.session.user) {
            Cart.find({}, function (error, docs) {
                res.render('textbook', {book: docs});
            });
        } else {
            res.redirect('/login');
        }
    });

    app.post('/addtextbook', function (req, res) {
        var User = global.dbHelper.getModel('user');
        if(!req.body.bookid){
            res.send({status: false, msg: "请填写教材编号"});
            return;
        }
        User.create(req.body, function (error, doc) {
            if (error) {
                res.send({status: false, msg: "出错"});
            } else {
                res.send({status: true, msg: "添加成功!"});
            }
        });
    });
}