import express from 'express'
import authRouter from './routes/auth.router.js'

const app = express()

app.use(authRouter)

export default app