import Note from "../models/noteModel.js";

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 }); // Sort notes by creation date in descending order
        res.status(200).json(notes);
    } catch (error) {                                                     //this is the very first controller
        console.error("Error fetching notes:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
       res.json(note);
    } catch (error) {
        console.error("Error fetching note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function createNote(req, res) {
   try{
    const { title, content } = req.body; //Destructure title & content from the request body.
    const newNote = new Note({title, content}); //Create a new Mongoose Note document with the data.

    await newNote.save(); //Save the new note to the database.
    res.status(201).json(newNote);//Send a success response with status code 201 (Created).
   }catch(error){
    console.error("Error creating note:", error);//log the error for debugging
    res.status(500).json({ message: "Internal server error" });// send a 500 error response to client
    }
}

export async function updateNote(req, res) {
    try{
        const { title,content } = req.body;
        await Note.findByIdAndUpdate(req.params.id, {title,content});
        res.status(200).json({ message: "Note updated successfully" });
    } catch (error) {
        console.error("Error updating note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function deleteNote(req, res) {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}