const express= require('express')
const app = express();
const peopleRoutes = require('./routes/peopleRoutes')
const auth = require('./routes/auth')
app.use(express.static('./public'))
app.use(express.json())
// app.use(express.urlencoded({extended:false}))
app.use('/api/people',peopleRoutes)
app.use('/login',auth)






app.listen(4000,()=>{
    console.log('server is running on port 3000!!!');
})