const mongoose = require('mongoose')
const { MONGO_DB } = require('./config')

mongoose.connect(MONGO_DB.toString(), { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => console.log(`Connected to mongodb at ${MONGO_DB}`))
