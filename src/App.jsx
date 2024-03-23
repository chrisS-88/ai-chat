import { useState } from "react";
import Nav from "./components/nav/Nav";
import "./App.css";
import ChatInterface from "./components/chatInterface/ChatInterface";

function App() {
  return (
    <>
      <Nav />
      <ChatInterface />
    </>
  );
}

export default App;
