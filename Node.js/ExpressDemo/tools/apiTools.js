module.exports.sendJson = function (res, arrayOrObject) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(arrayOrObject));
}

// module.exports.api = function (req, res, next) {
//     res.setHeader('Content-Type', 'application/json');
//     res.send(JSON.stringify(arrayOrObject));
// }