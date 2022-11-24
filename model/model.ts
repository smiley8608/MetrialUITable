
import mongoose from "mongoose";

const TableSchema=new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },last_name:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    },gender:{
        type:String,
        required:true
    }
})

const TableModel=mongoose.model('TableUser',TableSchema)
export default TableModel