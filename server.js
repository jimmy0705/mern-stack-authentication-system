const express = require('express')

const app = express()



app.get('/api/signup',(req,res)=>{
     console.log(req.url)
    res.json({
        data:"you hit the signup end"
    })

})



const port = process.env.port || 8000

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})