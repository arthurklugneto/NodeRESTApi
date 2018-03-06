module.exports = {
    
    api(message){
        console.log('[ api  ] '+message);
    },
    info(message){
        console.log('[ info ] '+message);
    },
    warn(message){
        console.log('[ warn ] '+message);
    },
    err(message){
        console.log('[ err  ] '+message);
    },

};