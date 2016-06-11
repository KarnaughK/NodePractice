/**
 * 专业信息管理
 * @param app
 */
module.exports = function (app) {
    app.get('/profession', function (req, res) {
        res.render('profession');
    });
}