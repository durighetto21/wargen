exports.login = function (req, res) {
    var path = require("path");
    console.log(__dirname);
    res.sendFile(path.join(__dirname + '/login.html'));
};
