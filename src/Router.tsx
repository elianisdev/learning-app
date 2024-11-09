import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from './pages/Login';


export const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};