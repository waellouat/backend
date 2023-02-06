const express=require('express')
const conectdb = require("./config/concteddb");
const contactRouter = require('./routes/contact');
const app = express()
const port = 5000



conectdb();
app.use(express.json())
app.use('/api/user',contactRouter)

app.listen(port,err=>{
    err?console.log(err):console.log(`you are conected to the port : ${port}`)
})