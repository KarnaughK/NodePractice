/**
 * 管理员信息管理
 * @param app
 */
module.exports = function (app) {
    app.get('/usermanager', function (req, res) {
        var Cart = global.dbHelper.getModel('user');
        if (req.session.user) {
            Cart.find({}, function (error, docs) {
                res.render('user');
            });
        } else {
            res.redirect('/login');
        }
    });
    //新增管理员信息
    app.post('/usermanager/add', function (req, res) {
        var User = global.dbHelper.getModel('user');
        if (!req.body.name) {
            res.send({status: false, msg: "请填写用户名"});
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
    //删除管理员信息
    app.get("/usermanager/delete/:id", function (req, res) {
        //req.params.id 获取商品ID号
        var Cart = global.dbHelper.getModel('user');
        Cart.remove({"_id": req.params.id}, function (error, doc) {
            //成功返回1  失败返回0
            if (doc > 0) {
                res.redirect('/usermanager');
            }
        });
    });
    //查找教材信息
    app.post("/usermanager/select", function (req, res) {
        //req.params.id 获取商品ID号
        var Cart = global.dbHelper.getModel('user');
        Cart.findById(req.body._id, function (error, doc) {
            if (error) {
                //res.send是返回数据
                //约定返回值格式  status：返回是否成功 msg:消息 data:返回数据
                res.send({status: false, msg: error});
            } else if (doc) {
                res.send({status: true, msg: "查询成功", data: doc});
            } else {
                res.send({status: false, msg: "没有此用户"});
            }
        });
    });

    //修改教材信息
    app.post("/usermanager/update", function (req, res) {
        //req.params.id 获取商品ID号
        var Cart = global.dbHelper.getModel('user');
        //findById:根据_id去查询
        Cart.findById(req.body._id, function (error, doc) {
            if (error) {
                //res.send是返回数据
                //约定返回值格式  status：返回是否成功 msg:消息 data:返回数据
                res.send({status: false, msg: error});
            } else if (doc) {
                doc.name = req.body.name;
                doc.password = req.body.password;
                doc.save();
                res.send({status: true, msg: "修改成功"});
            } else {
                res.send({status: false, msg: "不能为空！"});
            }
        });
    });
}