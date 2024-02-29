/*App context*/
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const useAppContext = () =>  useContext(AppContext);


export const AppProvider = ({children}) => {

    const [idAgremiadoSeleccionado, setIdAgremiadoSeleccionado] = useState(2342342343);

    const handleIdAgremiadoSeleccionado = (id) => {
        setIdAgremiadoSeleccionado(id);
        console.log(idAgremiadoSeleccionado);
    };



    return (
        <AppContext.Provider value={{idAgremiadoSeleccionado,handleIdAgremiadoSeleccionado}}>
            {children}
        </AppContext.Provider>
    );  
}

