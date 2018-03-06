Array.prototype.contains = function(elem)
{
    for (var i in this)
    {
    if (this[i] == elem) return true;
    }
    return false;
}
 
 module.exports = {
    db: require('./db'),
    server: require('./server'),
    jwtOptions: require('./jwt-options'),
    debug : false,
};