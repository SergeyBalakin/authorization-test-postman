const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://Armen:qA8U8jZHL8uXYESi@cluster0.j0nkg.mongodb.net/auth?retryWrites=true&w=majority'
    )

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
