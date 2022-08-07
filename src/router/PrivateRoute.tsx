import React, {useContext} from 'react';
import {AuthContext} from "../auth";
import {Navigate} from "react-router-dom";

export const PrivateRoute = ({children}: any) => {
    const {logged}: any = useContext(AuthContext);
    return logged? children:<Navigate to="/login"/>
};
