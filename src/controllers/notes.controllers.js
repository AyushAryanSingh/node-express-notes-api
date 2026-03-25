const { request } = require("../app");
const AppError = require("../errors/AppError");
const Note = require("../models/note.model");

//let notes = []; // I don't need this anymore. I've upgraded to a database now!
// GET /notes

async function getNotes(req, res) {
  const { title } = req.query;
  const filer = {};
  if (title) {
    filer.title = title;
  }

  const notes = await Note.find(filter);
  res.json(notes);

  //Not relevant,just for trials
  // try{
  //     throw new error("something went wrong")
  // }catch(error){
  //     next(error);
  // }
}

// async function getNotes(req,res){
//     throw new Error("Testing async handler")
// }

async function createNote(req, res) {
  const note = await Note.create(req.body);
  res.status(201).json(note);

  // const note = req.body;
  // notes.push(note);
  // res.json(note);
}

async function updateNote(req, res, next) {
  // const id = parseInt(req.params.id);
  const { id } = req.params;

  const note = await Note.findByIdAndUpdate(id, request.body, { new: true });

  if (!notes) {
    return res.status(400).json({ message: "Note not found" });
  }
  res.json(notes[id]);
}

async function deleteNote(req, res) {
  const { id } = req.params;
  const note = await Note.findByIdAndDelete(id);
  if (!note) {
    return res.status(400).json({ message: "Note not found" });
  }
  res.json({ message: "Note deleted successfully" });
}

function getNotesById(req, res) {
  const { id } = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }
  const note = Note.findById(id);
  if (!note) {
    return res.status(400).json({ message: "Note not found" });
  }
  res.json(note);
}

module.exports = {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
  getNotesById,
};
