import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/loginPage";
import { MiniDrawer } from "./components/layout";
import { Orders } from "./components/buyurtmalar/buyurtmalar";
import { ListCard } from "./components/mahsulotlar/maxsulotlar";
import { Category } from "./components/categoriyalar/categoriyalar";

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
            path="/login"
            element={<LoginPage setUserActivated={setUserActivated} />}
          />
          <Route
            path="/"
            element={userActivated ? <MiniDrawer /> : <Navigate to="/login" />}
          >
            {userActivated ? (
              <>
                <Route path="/buyurtmalar" element={<Orders />} />
                <Route path="/maxsulotlar" element={<ListCard />} />
                <Route path="/kategoriyalar" element={<Category />} />
              </>
            ) : null}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
