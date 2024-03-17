import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from "~/routes";
import NavBar from "~/components/NavBar";
import AuthService from "@/services/AuthService";


const App = () => {
    const user = AuthService.getCurrentUser();

    return <Router>
        <div>
            {user && <NavBar/>}
        </div>
        <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={<route.component/>}/>
            ))}
        </Routes>
    </Router>;
};

export default App;