export function getAllNotes (req, res) {
    res.status(200).send("Notes");
}

export function createNote(req, res) {
    res.status(201).send("Created Noted")
}

export function updateNote(req, res){
    res.status(200).send("Note updated");
}

export function deleteNote(req, res){
    res.status(200).send("Note deleted");
}