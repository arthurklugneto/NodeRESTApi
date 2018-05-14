/**
 * @author arklug
 * @desc Config file declarator
 */
// TODO : Get me out of here!
var winston = require('winston');
Array.prototype.contains = function(elem)
{
    for (var i in this)
    {
    if (this[i] == elem) return true;
    }
    return false;
}
 
module.exports = {
    app : require('./app'),
    db: require('./db'),
    jwtOptions: require('./jwt-options'),
    cli : require('commander'),
    logger : winston.createLogger({
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: 'combined.log' })
        ],
        format: winston.format.combine(
          winston.format.colorize({ all: true }),
          winston.format.simple()
        )
    })
};