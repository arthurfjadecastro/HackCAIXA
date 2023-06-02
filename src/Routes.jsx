import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";



const AppRoutes = (props) => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={Home} />
            </Routes>
        </BrowserRouter>

    );
};

export default AppRoutes;