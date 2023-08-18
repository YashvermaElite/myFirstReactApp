import { useState } from "react";
import "./App.css";
import FormText from "./components/FormText";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#08040b";
      showAlert("DarkMode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode has been enabled", "success");
    }
  };
  return (
    <>
    <BrowserRouter>
      <Navbar title="Yasna" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        
      
      <Routes>
        <Route path="/" element={<FormText
          showAlert={showAlert}
          heading="Enter text to modify"
          mode={mode}
        />} />
      </Routes>
      </div>
      
      <Routes>
        <Route exact path="/about" element={<About heading = "About Us" mode={mode}/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
