import mongoose from "mongoose";
import {Document, Schema } from "mongoose";


interface IFile extends Document{
    filename:String,
    secure_url:String,
    sizeBytes:String,
    format:String,
    sender?:String,
    receiver?:String,
    
}

const fileSchema = new Schema<IFile>({
    filename: { type: String, required: true },
    secure_url: { type: String, required: true },
    format: { type: String, required: true },
    sizeBytes: { type: String, required: true },
    sender: { type: String},
    receiver: { type: String},
},{
    timestamps:true
});

export default mongoose.model("File",fileSchema)
