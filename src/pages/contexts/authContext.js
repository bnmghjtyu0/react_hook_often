import React, { useReducer, useContext } from 'react'

const AuthStateContext = React.createContext()
const AuthDispatchContext = React.createContext()

const reducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case 'INCREASE':
            return { ...state, count: state.count + 1 }
        case 'DECREASE':
            return { ...state, count: state.count - 1 }
        case 'INCREASE_BY':
            return state.count + action.payload
        default:
            throw new Error(`Unknown action: ${action.type}`)
    }
}

const initialState = {
    account: '',
    password: '',
}

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AuthDispatchContext.Provider value={dispatch}>
            <AuthStateContext.Provider value={state}>
                {children}
            </AuthStateContext.Provider>
        </AuthDispatchContext.Provider>
    )
}

const useAuth = () => useContext(AuthStateContext)
const useDispathAuth = () => useContext(AuthDispatchContext)

export { AuthProvider, useAuth, useDispathAuth }