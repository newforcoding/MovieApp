const express = require('express')
const app = express()

app.use('/movies/',require('./router/route'))

app.listen(8000,function(){
    console.log('Server on 8000')
})