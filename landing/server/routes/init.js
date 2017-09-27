const router = require('express').Router()
const fs     = require('fs')


module.exports = (root) => {
    const header = require(root + '/views').header
    console.log(header)
    router.route('/') 
        .get((req, res) => {
            res.render('index', {
                header: header
            })
        })


    return router
}