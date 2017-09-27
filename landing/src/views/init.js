require('colors')
const pug  = require('pug')
const fs   = require('fs')
const ENV  = process.env.NODE_ENV || 'dev'

const isDebug = ENV === 'debug'

const header = (() => {
    try {
        if (isDebug) console.log('Starting read header.pug'.cyan)
        const headerPug = fs.readFileSync(__dirname + '/header.pug')
        const headerHtml = pug.compile(headerPug)()
        if(isDebug) console.log('End reading header.pug'.cyan)
        console.log(headerHtml)
        return headerHtml
    } catch (ex) {
        if (isDebug) console.log('Failed read header.pug'.red)
        console.log(ex)
        return `<h1> Cannot read header! </h1>`
    }
})()

module.exports = {
    header
}

