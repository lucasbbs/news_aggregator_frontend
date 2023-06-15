/* eslint-disable import/no-anonymous-default-export */
import React, { createContext, useContext } from 'react'
import toastr from 'toastr'

interface ProviderProps {
    children: React.ReactNode
}

interface MessagesContextProps {
    showMessage: (message: string, type: ToastrType) => void
    clearMessages: () => void
}

const MessagesContext = createContext<MessagesContextProps>({} as MessagesContextProps)

const useMessages = () => {

    const showMessage = (message: string, type: ToastrType) => {
        toastr.options = {
            positionClass : 'toast-top-full-width',
            hideDuration: 300,
            timeOut: 5000,
        }
        toastr[type](message)
    }

    const clearMessages = () => {
        toastr.clear()
    }

    return {
        showMessage, clearMessages
    }
}

export function MessagesProvider({ children }: ProviderProps) {
    const messages = useMessages()
    return (
        <MessagesContext.Provider value={messages}>
            {children}
        </MessagesContext.Provider>
    )
}

export default () => useContext(MessagesContext)
