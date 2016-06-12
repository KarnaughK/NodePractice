/**
 * 学院信息管理
 * @param app
 */
module.exports = function (app) {
    app.get('/college', function (req, res) {
        if (req.session.user) {
            res.render('college');
        } else {
            res.redirect('/login');
        }
    });

    //查询学院信息
    app.post("/department/select", function (req, res) {
        var Department = global.dbHelper.getModel('department');
        Department.find({}, function (error, doc) {
            if (error) {
                //res.send是返回数据
                //约定返回值格式  status：返回是否成功 msg:消息 data:返回数据
                res.send({status: false});
            } else if (doc) {
                res.send({status: true, msg: "查询成功", data: doc});
            } else {
                res.send({status: false});
            }
        });
    });


    //新增教材信息
    app.post('/college/add', function (req, res) {
        var College = global.dbHelper.getModel('class');
        if (!req.body.classId) {
            res.send({status: false, msg: "请填写教材编号"});
            return;
        }
        College.create(req.body, function (error, doc) {
            if (error) {
                res.send({status: false, msg: "出错"});
            } else {
                res.send({status: true, msg: "添加成功!"});
            }
        });
    });

    //删除教材信息
    app.get("/college/delete/:id", function (req, res) {
        //req.params.id 获取商品ID号
        var Cart = global.dbHelper.getModel('class');
        Cart.remove({"_id": req.params.id}, function (error, doc) {
            //成功返回1  失败返回0
            if (doc > 0) {
                res.redirect('/college');
            }
        });
    });
    //查找教材信息
    app.post("/college/select", function (req, res) {
        //req.params.id 获取商品ID号
        var Cart = global.dbHelper.getModel('class');
        Cart.findById(req.body._id, function (error, doc) {
            if (error) {
                //res.send是返回数据
                //约定返回值格式  status：返回是否成功 msg:消息 data:返回数据
                res.send({status: false, msg: error});
            } else if (doc) {
                res.send({status: true, msg: "查询成功", data: doc});
            } else {
                res.send({status: false, msg: "没有此书籍"});
            }
        });
    });

    //修改教材信息
    app.post("/college/update", function (req, res) {
        //req.params.id 获取商品ID号
        var Cart = global.dbHelper.getModel('textbook');
        //findById:根据_id去查询
        Cart.findById(req.body._id, function (error, doc) {
            if (error) {
                //res.send是返回数据
                //约定返回值格式  status：返回是否成功 msg:消息 data:返回数据
                res.send({status: false, msg: error});
            } else if (doc) {
                doc.bookId = req.body.bookId;
                doc.name = req.body.name;
                doc.press = req.body.press;
                doc.price = req.body.price;
                doc.supplier = req.body.supplier;
                doc.save();
                res.send({status: true, msg: "修改成功"});
            } else {
                res.send({status: false, msg: "没有此书籍"});
            }
        });
    });
}