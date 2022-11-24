

import express =require('express')
import * as table from '../controller/tablecontroller'
const router:express.IRouter=express.Router()

console.log('running');
router.get('/getalldata',(req:express.Request,res:express.Response,next:express.NextFunction)=>{
    console.log('log');
    
    next()
},table.GetData)
router.post('/searchuser',table.SearchUser)
router.post('/searchbygender',table.SearchByGender)

export default router