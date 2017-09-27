require('colors')
const ENV     = process.env.NODE_ENV || 'dev'
const isDebug = ENV === 'debug'

module.exports = (warningMessagesArray) => {
    try {
        if (isDebug) console.log(`Starting read config file...`.cyan)
        const __config = require('./config.json')
        if (isDebug) console.log(`Reading of config file complete!`.cyan)
        return __config
    } catch (ex) {
        if (isDebug) console.log(`Error reading configuration file!`.red) 
        switch (ex.code) {
            case 'MODULE_NOT_FOUND': {
                warningMessagesArray.push({
                    message: `No configuration file for server specified.`
                })
                return {}
            } 
            default: {
                console.log(ex)
            }
        }
        return {}
    }
}