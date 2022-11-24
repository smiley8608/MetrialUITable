
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
    const first_name=req.body.first_name
    console.log(req.body.first_name);
    console.log(req.body.last_name);
    
    const last_name=req.body.last_name
    TableModel.findOne({first_name:first_name})
    .then(firstNameObject=>{
        console.log(firstNameObject);
        
        if(!firstNameObject){
            return res.json({message:''})
        }else
        console.log(firstNameObject.last_name);
        
         if (firstNameObject.last_name===last_name){
            return res.json({User:firstNameObject})
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