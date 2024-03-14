"use client";
import { FormEventHandler, useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import MainTwo from "./MainTwo";

function App() {
  return (
    <div className="container " id="container">
      <div className="app">
        <Header />
        <Main />
        <MainTwo />
      </div>
    </div>
  );
}

export default App;
