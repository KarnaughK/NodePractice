/**
 * Created by karnaughk on 16/6/10.
 */
module.exports = function (app) {
    app.get('/main', function (req, res) {
        //如果没登录。就跳登录页
        if (req.session.user) {
            res.render('main');
        } else {
            res.redirect('/login');
        }
    });
}