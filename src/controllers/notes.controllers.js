
let notes = [];

function getNotes (req,res){
    
    res.json({
        requestTime:req.requestTime,
        notes
    });

    // try{
    //     throw new error("something went wrong")
    // }catch(error){
    //     next(error);
    // }
}

// async function getNotes(req,res){
//     throw new Error("Testing async handler")
// }

function createNote(req,res){
    const note = req.body;
    notes.push(note);
    res.json(note);
}

function updateNote(req,res,next){
    const id = parseInt(req.params.id);
    if(!notes[id]){
        return next(new Error("Note not found"));
    }
    notes[id]=req.body;
    res.json(notes[id]);
}

function deleteNote(req,res){
    const id = parseInt(req.params.id);
    notes.splice(id,1);
    res.sendStatus(204);
}

module.exports ={
    getNotes,
    createNote,
    updateNote,
    deleteNote
};