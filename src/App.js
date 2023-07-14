import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
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
  const [mode, setMode] = useState("light");
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <TextForm heading = "Enter the text to analyse below" mode={mode} showAlert={showAlert} />,
    },
    {
      path: "/about",
      element: <About mode={mode} />,
    },
  ]);
  return (
    <>
<div className="container mt-3">
      <Navbar title="- D . J -" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <RouterProvider router={router} />
</div>
    </>
  );
}

export default App;
