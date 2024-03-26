import { useState } from "react";
import Nav from "./components/nav/Nav";
import "./App.css";
import ChatInterface from "./components/chatInterface/ChatInterface";
import History from "./components/history/History";

function App() {
  return (
    <>
      <div>
        <Nav />
        <div className="container-fluid">
          <div className="row">
            <div className="col-9">
              <ChatInterface />
            </div>
            <div className="col-3">
              <History />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
