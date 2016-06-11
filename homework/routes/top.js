/**
 * Created by karnaughk on 16/6/11.
 */
//用户注册
module.exports = function (app) {
    app.get('/top', function (req, res) {
        if (req.session.user) {
            res.render('top', {WelcomeStr: "欢迎您:" + req.session.user.name});
        }
    });
}