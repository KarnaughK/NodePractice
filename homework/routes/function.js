/**
 * Created by karnaughk on 16/6/7.
 */
exports.check_login = function (req, res) {
    if (req.session.user) {
        var Commodity = global.dbHelper.getModel('commodity');
        Commodity.find({}, function (error, docs) {
            res.render('home', {Commoditys: docs});
        });
    } else {
        req.session.error = "请先登录"
        res.redirect('/login');
    }
}