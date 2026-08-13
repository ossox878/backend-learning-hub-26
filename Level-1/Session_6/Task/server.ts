import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import myRouter from "./routes/router"

dotenv.config()
const PORT = process.env.PORT || 3000

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(myRouter)

app.listen(PORT,()=>{
    console.log(`listening to server port: ${PORT}`)
})