import App from "../App";
import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {       /* NotesList va a tomar las notes de App.js y luego usar el componente Note para mostrar cada una */
    return (
        <div className="notes-list">
            {notes.map((note)=> (    // para cada nota va a crear un componente Note y le va a mandar los sig atributos
                <Note
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );
};

export default NotesList;