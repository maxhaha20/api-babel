import config from 'config'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import otpRoute from './routes/otp.routes'

const app = express()

app.use(cors())
app.use(logger(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" - :response-time ms'))
app.use(bodyParser.json())
app.use('/signup', otpRoute)

// Handle 404
app.use((req, res) => {
  res.status(404).send({ success: false, message: '404: Page not Found' })
})

// Handle 500
app.use((error, req, res, next) => {
  res.status(500).send({success:false, message: '500: Internal Server Error' })
});

app.listen(config.nodejs.port, () => {
  console.log('otp-service PORT:', config.nodejs.port)
})