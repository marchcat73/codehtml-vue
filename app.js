const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const authRoutes = require('./routes/auth')
const categoryRoutes = require('./routes/category')
const technologyRoutes = require('./routes/technology')
const workRoutes = require('./routes/work')
const keys = require('./config/keys')
const app = express()

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
	.then(() => console.log('MongoDB connected'))
  .catch(error => console.log(error))
  
app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(morgan('dev'))
app.use('/uploads', express.static('uploads'))
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const enableCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
}
app.use(enableCrossDomain)

app.use('/api', authRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/work', workRoutes)
app.use('/api/technology', technologyRoutes)

module.exports = app
