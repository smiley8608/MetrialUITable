
import express = require('express')
import TableModel from '../model/model'

export const GetData=(req:express.Request,res:express.Response)=>{
    console.log('run');
    

    TableModel.find({})
    .then(responce=>{
        if(responce.length>=1){
            
            
            return res.json({User:responce})
        }else{
            return res.json({message:"no data available"})
        }
    })
    .catch(err=>{
        return res.json({message:err})
    })
}

export const SearchUser=(req:express.Request,res:express.Response)=>{

    // const _id=req.body._id
    const result =req.body.result
    console.log(result);
    const first_name=result[0]   
    const last_name=result[1]
    TableModel.find({first_name:first_name})
    .then(firstNameObject=>{
        console.log(firstNameObject);
        
        if(firstNameObject.length<=0){
            return res.json({message:'user not found'})
        }else {
            TableModel.find({last_name:last_name})
            .then(responce=>{
                return res.json({User:responce})
            })
            .catch()
        }
    })
    .catch(err=>{
        return res.json({message:""})
    })
    // TableModel.findById({_id:_id})
    // .then(result=>{
    //     console.log(result);
        
    //     if(result){
    //         return res.json({User:result})
    //     }else{
    //         return res.json({message:"user not available"})
    //     }
    // })
}


export const SearchByGender=(req:express.Request,res:express.Response)=>{
    const gender=req.body.gender
    TableModel.find({gender:gender})
    .then(responce=>{
      
        if(responce.length>=1){
            return res.json({User:responce})
        }
        
    })
    .catch(err=>{
        return res.json({message:err})
    })
}

export const SearchByLetters=(req:express.Request,res:express.Response)=>{
    const first_name=req.body.letters
    console.log(req.body.letters)
    TableModel.find({first_name:first_name})
    .then(firstnamearray=>{
        console.log(firstnamearray);
        
        if(firstnamearray.length>=1){
            return res.json({User:firstnamearray})
            //  TableModel.find({last_name:})
            //  .then(lastnamearray=>{
            //     console.log(lastnamearray);
                
            //      if(lastnamearray.length>=1){
            //         return res.json({User:lastnamearray})
            //      }else{
            //         return res.json({message:'user not found'})
            //      }

            //  })
            //  .catch()

        }else{
            return res.json({message:'No user found'})
        }
    })
    .catch()
    
}