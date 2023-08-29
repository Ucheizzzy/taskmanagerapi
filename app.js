const express = require('express')
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()

const tasks = require('./routes/tasks')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())
app.use(express.static('./public'))

//routes
app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

// app.get('/api/v1/task') //getall
// app.post('/api/v1/task') //post
// app.get('/api/v1/task/:id') //single task
// app.patch('/api/v1/task/:id') //update single task
// app.delete('/api/v1/task/:id') //delete single task

const port = process.env.PORT || 3000
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}....`))
  } catch (error) {
    console.log(error)
  }
}
start()
