const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  JWT: process.env.JWT
}
