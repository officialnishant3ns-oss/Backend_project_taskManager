import app from './app.js'
import connectdb from "./db/db.js"
import dotenv from "dotenv"
 dotenv.config({
    path: './.env'
})
connectdb()

    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is ready at ${process.env.PORT}`);
        });
        app.on("error", (error) => {
            console.error("ERRORR:", error)
            throw error
        })
    })
    .catch((error) => {
        console.log("mongo DB connection failed", error);
    });
    
    app.get('/api/v1',(req,res)=>{
        res.send('hello sir')
    })
    