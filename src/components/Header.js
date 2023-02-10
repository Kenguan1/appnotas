import React from 'react';
import {GrSolaris} from 'react-icons/gr'

const Header = ({ handleToggleDarkMode }) => {
    return(
        <div className='header'>
            <h1>Notas</h1>
            <button 
                className='save' 
                onClick={() => 
                    handleToggleDarkMode(   // Cuándo tenemos una función 'set' (setDarkMode) dada por un hook, podemos obtener su state actual
                        (previousDarkMode) => !previousDarkMode  // acá hacemos que el state pase de false a true o viceversa
                    )
                }
            >
                Cambiar Modo <GrSolaris />
            </button>
        </div>
    );
};

export default Header;