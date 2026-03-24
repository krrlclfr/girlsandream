// app.ts
import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()

app.use(cors())

// Must be before routes!
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/images", express.static("public/images"));
app.use('/api', routes)

export default app
