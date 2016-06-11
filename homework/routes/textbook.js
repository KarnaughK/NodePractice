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

    //新增教材信息
    app.post('/addtextbook', function (req, res) {
        var Book = global.dbHelper.getModel('textbook');
        if(!req.body.bookId){
            res.send({status: false, msg: "请填写教材编号"});
            return;
        }
        Book.create(req.body, function (error, doc) {
            if (error) {
                res.send({status: false, msg: "出错"});
            } else {
                res.send({status: true, msg: "添加成功!"});
            }
        });
    });

    //删除教材信息
    app.get("/deletetextbook/:id", function(req, res) {
        //req.params.id 获取商品ID号
        var Cart = global.dbHelper.getModel('textbook');
        Cart.remove({"_id":req.params.id},function(error,doc){
            //成功返回1  失败返回0
            if(doc > 0){
                res.redirect('/textbook');
            }
        });
    });

    //修改教材信息
    app.post("/updatetextbook", function(req, res) {
        //req.params.id 获取商品ID号
        var Cart = global.dbHelper.getModel('textbook');
        Cart.remove({"_id":req.params.id},function(error,doc){
            //成功返回1  失败返回0
            if(doc > 0){
                res.redirect('/textbook');
            }
        });
    });
}