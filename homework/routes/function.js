/**
 * 查看是否是登录状态
 * @returns {boolean}
 */
exports.needLogin = function (req, res) {
    if (req && req.session && req.session.user) {
        return false;
    } else {
        res.redirect('/login');
        return true;
    }
}

