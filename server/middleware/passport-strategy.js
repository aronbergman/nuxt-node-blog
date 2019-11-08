const { Strategy, ExtractJwt } = require('passport-jwt')
const { model } = require('mongoose')
const keys = require('../kesy')
const User = model('users')

// Auth: Bearer TOKEN
const options = {
    jwtFromRequers: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.JWT
}

module.exports = new Strategy(options, async (payload, done) => {
    try {
        const candidate = await User.findById(payload.userId).select('id')

        if (candidate) {
            done(null, candidate)
        } else {
            done(null, false)
        }
    } catch (e) {
        consola.info({
            message: `Error ${e}`,
            badge: true
        })
    }
})