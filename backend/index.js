import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import bookrouter from "./route/Bookroute.js"
import userrouter from "./route/Useroute.js"
dotenv.config()

const PORT = process.env.PORT||3000
const mongo_url = process.env.Mongo_url
const app = express()
app.use(cors())
app.use(express.json())


//connection to mongodb
try {
    mongoose.connect(mongo_url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
        
    })
    console.log("connection to mongodb success");
} catch (error) {
    console.log(error.message);
}

//defining routes
app.use("/book1",bookrouter)
app.use("/user",userrouter)

//for listenign 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
