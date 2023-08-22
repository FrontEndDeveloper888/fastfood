import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import { MiniDrawer } from './components/layout';

function App() {
    const [userActivated, setUserActivated] = useState(false);

    useEffect(() => {
        const isUserActivated = localStorage.getItem("userActivated") === "true";
        setUserActivated(isUserActivated);
    }, []);

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route
                        path="/kirish"
                        element={
                            userActivated ? (
                                <Navigate to="/home" replace />
                            ) : (
                                <LoginPage setUserActivated={setUserActivated} />
                            )
                        }
                    />
                    <Route
                        path="/home"
                        element={
                            userActivated ? (
                                <MiniDrawer />
                            ) : (
                                <Navigate to="/kirish" replace state={{ from: "/home" }} />
                            )
                        }
                    />
                    <Route path="/" element={<Navigate to={userActivated ? "/home" : "/kirish"} replace />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
