import { CountProvider } from './countContext'
import { AuthProvider } from './authContext'


const AppProvider = ({ children }) => {
    return (
        <CountProvider>
            <AuthProvider >
                {children}
            </AuthProvider >
        </CountProvider>
    )
}

export default AppProvider