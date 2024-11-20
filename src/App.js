import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import About from "./views/About";
import Project from "./views/Project";
import Contact from "./views/Contact";

function App() {
  useEffect(() => {
    // Disable right-click (context menu)
    const disableRightClick = (event) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", disableRightClick);

    // Disable specific keyboard shortcuts (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U)
    const disableShortcuts = (event) => {
      if (
        (event.ctrlKey && event.shiftKey && event.key === "I") || // Disable Ctrl+Shift+I
        (event.ctrlKey && event.shiftKey && event.key === "J") || // Disable Ctrl+Shift+J
        (event.ctrlKey && event.shiftKey && event.key === "C") || // Disable Ctrl+Shift+C
        (event.ctrlKey && event.key === "U") || // Disable Ctrl+U
        event.key === "F12" // Disable F12
      ) {
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", disableShortcuts);

    // Cleanup the event listeners on component unmount
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableShortcuts);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/project"} element={<Project />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
