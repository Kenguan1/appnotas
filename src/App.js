import { useState, useEffect } from 'react';
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Testing",
      date: "30/01/2023"
    },
    {
      id: nanoid(),
      text: "Mi segunda nota",
      date: "01/02/2023"
    },
    {
      id: nanoid(),
      text: "Mi tercera nota",
      date: "02/02/2023"
    }
  ]);


  const[searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);


  /* REVISAR https://stackoverflow.com/questions/72222728/why-is-localstorage-getting-cleared-whenever-i-refresh-the-page
 */
  useEffect(() => {  // Para recuperar las notas (mostrarlas)
    const savedNotes = JSON.parse(
      localStorage.getItem('appnotas-data')
    );

    if (savedNotes) { // si alguna de las notas se recuperó exitosamente entonces actualizar las notas con savedNotes
      setNotes(savedNotes);  
    }
  }, []); // si [] está vacío entonces sólo hará el primer run


  useEffect(() => { // Para Guardar las notas
      localStorage.setItem(
        'appnotas-data',  // Esta es la key
        JSON.stringify(notes)    // guardar como string
      );   
  }, [notes]); // si notes se actualiza entonces se vuelve a guardar



  const addNote = (text) => {  /* toma el text del input de AddNote.js */
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()  /* convertirá la date al formato de mi país */
    }
    const newNotes = [...notes, newNote]; 
    setNotes(newNotes)
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id) // va a ir comparando el id que se manda a esta funcion con el id de cada nota, la funcion .filter returna un array que deja sólo las notas con id distintos
    setNotes(newNotes);
  }


  return(
    <div className={`${darkMode && 'dark-mode'}`}>       {/* si darkMode = true, entonces agregar dark-mode a la clase */}
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} /> 
        <Search handleSearchNote={setSearchText} />

        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())  // retornar sólo las notas que incluyan el texto que se busca(en searchText), primero se pasa a minúsculas todo para luego comparar
          )}
          handleAddNote={addNote} 
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
    
  );
};

export default App;