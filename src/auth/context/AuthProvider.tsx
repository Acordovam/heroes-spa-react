import React, {useReducer} from 'react';
import { AuthContext } from './AuthContext';
import {authReducer} from "./authReducer";
import {types} from "../types/types";
const initialState = {
    logged: false
}
const init = () => {
   const user = JSON.parse(localStorage.getItem('user') ?? 'null')
    if(user){
        return {
            logged: !!user,
            user
        }
    }
    return {
        logged: false
    }
}
export const AuthProvider = ({children}:any) => {
    const [authState, dispatch] = useReducer(authReducer, initialState, init);
    const login = (name: string) =>{
        const user = {
            id: 'ABC',
            name: name
        }
        const action = {
            type: types.login,
            payload: user
        }
        localStorage.setItem('user', JSON.stringify(user))
        dispatch(action);
    }
    const logout = () => {
        const action = {
            type: types.logout
        }
        localStorage.removeItem('user')
        dispatch(action)
    }
    return (
      <AuthContext.Provider value={
          {login, logout, ...authState }
      }>{children}</AuthContext.Provider>
    );
};
