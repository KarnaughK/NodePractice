/**
 * 库存信息管理
 * @param app
 */
module.exports = function (app) {
    app.get('/stock', function (req, res) {
        res.render('stock');
    });
}