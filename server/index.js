import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import postsRouter from './routes/posts.js'
import connectDB from './helpers/connectDB.js'

const app = express()
dotenv.config()

app.use(express.json({ limit: '30mb' }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/posts', postsRouter)

app.get('/', (req, res) => {
  res.send('<h2>Welcome to memories app</h2>')
})

const PORT = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    console.log('Connected to DB...')
    app.listen(PORT, console.log(`Server is listening on port: ${PORT}...`))
  } catch (error) {
    console.log(error.message)
  }
}

start()
