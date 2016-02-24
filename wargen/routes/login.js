module.exports = function (app) {

    var site = app.controllers.login;

    app.get('/login', site.login);

   
};
