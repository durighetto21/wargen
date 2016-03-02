module.exports = function (app) {
    var site = app.controllers.three;
    app.get('/three', site.three);

   
};