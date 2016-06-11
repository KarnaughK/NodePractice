module.exports = function (app) {
    require('./login')(app);
    require('./home')(app);
    require('./logout')(app);
    require('./register')(app);
    require('./cart')(app);
    require('./main')(app);
    require('./left')(app);
    require('./top')(app);
    require('./college')(app);
    require('./stock')(app);
    require('./textbook')(app);
    require('./usermanager')(app);
    require('./welcome')(app);
};