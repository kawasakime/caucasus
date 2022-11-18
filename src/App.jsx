import React, { createContext } from "react";

import Contacts from "./components/Contants/Contacts";
import Header from "./components/Header";
import Info from "./components/Info";
import Sections from "./components/Sections";
import BurgerMenu from "./components/BurgerMenu";

import "./scss/app.scss";
export const BurgerContext = createContext();

function App() {
  const [burgerIsOpen, setBurgerIsOpen] = React.useState(false);
  return (
    <div className="App">
      <BurgerContext.Provider value={{ burgerIsOpen, setBurgerIsOpen }}>
        <BurgerMenu />
        <Header />
      </BurgerContext.Provider>
      <Info />
      <Sections />
      <Contacts/>
    </div>
  );
}

export default App;
