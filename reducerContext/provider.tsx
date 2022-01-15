import React, {useReducer} from 'react'
import {reducer} from './reducer'
import {initialState} from './state'

const AppContext = React.createContext(null)

export const AppContextProvider = ({children}) => {
  const [state, dispatchState] = useReducer(reducer, initialState)
  const value = [state, dispatchState]

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const appcontext = React.useContext(AppContext)
  if (appcontext === undefined) {
    throw new Error('useAppContext has to be used inside of a Context Provider')
  }
  return appcontext
}
