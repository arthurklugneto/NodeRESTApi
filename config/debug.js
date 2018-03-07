module.exports = {
    
    api(message){
        console.log('[ api  ] \x1b[0m'+message);
    },
    info(message){
        console.log('\x1b[32m[ info ] \x1b[0m'+message);
    },
    warn(message){
        console.log('\x1b[33m[ warn ] \x1b[0m'+message);
    },
    err(message){
        console.log('\x1b[31m[ err  ] \x1b[0m'+message);
    },

};