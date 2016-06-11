/**
 * 学院信息管理
 * @param app
 */
module.exports = function (app) {
    app.get('/college', function (req, res) {
        res.render('college');
    });
}