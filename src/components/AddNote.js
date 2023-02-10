import { useState } from "react";


const AddNote = ({ handleAddNote }) => {

    const [noteText, setNoteText] = useState('')
    const characterLimit = 200;  // acá no se necesita un state ya que el usuario no podrá cambiar/manjear ese limite, si después se quiere modificar el límite toca cambiar esto a un state

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0){  // si el limite todavía no se ha excedido entonces seguir actualizando el texto
            setNoteText(event.target.value); /* el state se actualiza cada vez que el input de textarea cambia */    
        } 
    };

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){      /* si después de borrar los espacios con trim() la nota sigue teniendo caracteres, entonces si guardar */
            handleAddNote(noteText);         /* cuando demos click en save vamos a usar el addNote de App.js y se actualizará la NoteList */
            setNoteText('')   /* despues de agregar una nota, la siguiente tendrá el input limpio */
        }
    };

    return(
        <div className="note new">
            <textarea 
                rows="8"
                cols="10"
                placeholder="Escribe una nueva nota..." 
                value={noteText} // linea opcional, para darle un poco más de control al textarea, su value va a ser lo que escribamos dentro de él (sin esta linea el código igual fuinciona)
                onChange={handleChange} // setNoteText actualizará a noteText gracias a esta linea
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Restantes</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;