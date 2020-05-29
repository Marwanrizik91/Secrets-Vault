import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Feeds } from "./components/feeds";
import { Menubar } from "./components/menubar";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Navbar />
        <Feeds />
        <Menubar />
      </div>
    </RecoilRoot>
  );
}

export default App;
