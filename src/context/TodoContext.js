import React, { createContext, useContext, useReducer} from "react";

//context olustur
export const TodoLayerContext=createContext();

//context icin provider
//children == components
export const TodoLayer=({initialState, reducer, children}) => (
    <TodoLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </TodoLayerContext.Provider>
)

export const useTodoLayerValue= () => useContext(TodoLayerContext);