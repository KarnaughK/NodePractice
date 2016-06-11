/**
 * 管理员信息管理
 * @param app
 */
module.exports = function (app) {
    app.get('/usermanager', function (req, res) {
        res.render('usermanager');
    });
}