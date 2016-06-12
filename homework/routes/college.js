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

    //新增学院信息
    app.post('/department/add', function (req, res) {
        var Book = global.dbHelper.getModel('department');
        Book.create(req.body, function (error, doc) {
            if (error) {
                res.send({status: false, msg: "出错"});
            } else {
                res.send({status: true, msg: "添加成功!"});
            }
        });
    });

    //删除学院信息
    app.post('/department/delete', function (req, res) {
        var Department = global.dbHelper.getModel('department');
        Department.remove({"_id": req.body._id}, function (error, doc) {
            if (error) {
                res.send({status: false, msg: "出错"});
            } else if (doc > 0) {
                res.send({status: true, msg: "删除成功!"});
            } else {
                res.send({status: false, msg: "删除失败!"});
            }
        });
    });
}