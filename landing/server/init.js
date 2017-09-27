require('colors')

const fs       = require('fs')
const server   = require('express')()
const warnings = []
const ENV      = process.env.NODE_ENV || 'dev'
const isDebug  = ENV === 'debug'
const config   = require('./config.js')(warnings)

const PORT = (() => {
    if (!config.port) {
        warnings.push({
            message: `Port 8080 set as default` 
        })
        return 8080 
    } else {
        return config.port
    }
})()

const printWarnings = () => {
    if (warnings.length === 0) return 
    warnings.forEach(warn => {
        console.warn('WARN'.bgYellow.black + ` ${warn.message}`)
    })
}

const startServerToListen = function(port) {
    port = port || PORT 
    if (!port) {
        console.error('Could not get server port!\nExiting...'.red)
        process.exit(1)
    }
    server.listen(port, () => {
        printWarnings()
        console.log(`Server running on :${port}`.green)
    })
}

module.exports = (root) => {
    server.set('views', root)
    server.set('view engine', 'pug')
    server.use(require('./routes')(root))

    return {
        run: startServerToListen
    }
}