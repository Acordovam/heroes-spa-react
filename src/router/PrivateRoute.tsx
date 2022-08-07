import React, {useContext} from 'react';
import {AuthContext} from "../auth";
import {Navigate, useLocation} from "react-router-dom";

export const PrivateRoute = ({children}: any) => {
    const {logged}: any = useContext(AuthContext);
    const {pathname, search}: any = useLocation()
    const lastPath = pathname + search
    localStorage.setItem('lastPath', lastPath)
    return logged? children:<Navigate to="/login"/>
};
