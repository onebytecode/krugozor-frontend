// Require server module, which awaits root folder 
const ROOT = __dirname + '/src'
const server = require('./server')(ROOT)

server.run()