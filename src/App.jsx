import React, { useEffect } from "react";
import { Home } from "./pages/Home";
import { Skills } from "./pages/Skills";
import { About } from "./pages/About";
import { Project } from "./pages/Project";
import { Contact } from "./pages/Contact";

export const App = () => {  
  return (
    <main>
        <Home />
        <Skills />
        <About />
        <Project/>
        <Contact/>
      </main>
  );
};
