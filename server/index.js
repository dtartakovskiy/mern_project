import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import connectDB from './helpers/connectDB.js'

const app = express()

app.use(express.json({ limit: '30mb' }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

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
