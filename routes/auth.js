const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    const {name} = req.query;
    if(name !== 'admin'){
        return res.status(401).json({success:false,data:"Not Authenticated!!!"})
    }

    return res.status(200).json({success:true,data:"You are authenticated"})

})

module.exports = router;