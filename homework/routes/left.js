/**
 * Created by karnaughk on 16/6/11.
 */
//用户注册
module.exports = function (app) {
    app.get('/left', function (req, res) {
        res.render('left');
    });
}