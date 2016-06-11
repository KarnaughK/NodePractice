/**
 * 教材信息管理
 * @param app
 */
module.exports = function (app) {
    app.get('/textbook', function (req, res) {
        res.render('textbook');
    });
}