import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextAreaForm from "./components/TextAreaForm";
import Alerts from "./components/Alerts";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1750);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#323436";
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <div>
        <Navbar
          title="Textutils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alerts alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextAreaForm
                  mode={mode}
                  showAlert={showAlert}
                  heading="Enter the text to be analyzed."
                />
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
