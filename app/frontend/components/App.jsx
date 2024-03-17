import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from "~/routes";
import NavBar from "~/components/NavBar";


const App = () => {

    return <Router>
        <div>
            <NavBar/>
        </div>
        <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={<route.component/>}/>
            ))}
        </Routes>
    </Router>;
};

export default App;