import mongoose from "mongoose";


//1 - create a schema
//2 - model based off of that schema
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },//every note will have a title and content
  content: {
    type: String,
    required: true
  },
},
{timestamps: true}//createdAt,updatedAt
);
//showing exact date and time

//create a node model based off this schema
const Note = mongoose.model("Note", noteSchema);

export default Note;