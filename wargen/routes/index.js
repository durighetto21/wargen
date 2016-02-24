module.exports = function (app) {
    
    var site = app.controllers.index;
    
    app.get('/',site.index);

};