/**
 * 首页
 * @param app
 */
module.exports = function (app) {
    app.get('/welcome', function (req, res) {
        res.render('welcome');
    });
}