if (process.env.MODE_ENV === 'production') {
    console.log(process.env.MODE_ENV)
    module.exports = require('./keys.prod')
} else {
    module.exports = require('./keys.dev')
}
