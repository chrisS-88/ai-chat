import React, { useState } from "react";
import "./ChatInterface.css";
import SearchBar from "../searchBar/SearchBar";

function ChatInterface() {
  return (
    <div className="chat-interface">
      <div className="chat-title">
        <h6>Chat Interface</h6>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 search-bar">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;
