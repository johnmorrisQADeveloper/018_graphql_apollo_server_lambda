const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = 'mongodb+srv://john:john@cluster0-lom0m.mongodb.net/merng?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`))
