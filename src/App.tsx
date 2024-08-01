import React, { useEffect, useState } from "react";
import Router from "./routes/Router";
import { CookiesProvider } from "react-cookie";

function App() {
  const [sizeClass, setSizeClass] = useState("min-w-96 max-w-screen-sm");

  useEffect(() => {
    if (window.location.pathname.includes("admin")) {
      setSizeClass("w-full"); // Change this to your desired desktop size classes
    } else {
      setSizeClass("min-w-96 max-w-screen-sm");
    }
  }, []);

  return (
    <CookiesProvider>
      <div className={`${sizeClass} mx-auto`}>
        <Router />
        <div id="modal" />
      </div>
    </CookiesProvider>
  );
}

export default App;
