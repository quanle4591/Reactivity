import { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/app/layout/navbar/Navbar";
import Body from "./components/app/layout/body/Body";

const App = () => {
  const childRef = useRef();

  const setCreateMode = () => {
    if (childRef.current) {
      //@ts-ignore
      childRef.current.createNewActivity();
    }
  };
  return (
    <div>
      <header>
        <Navbar setCreateMode={setCreateMode} />
      </header>
      <div>
        <Body ref={childRef} />
      </div>
    </div>
  );
};

export default App;
