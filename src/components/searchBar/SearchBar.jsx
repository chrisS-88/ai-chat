import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="row text-center search-section">
      <div className="col-10">
        <input className="user-input" type="text" placeholder="How can I help?" />
      </div>
      <div className="col-2">
        <button type="submit" className="send-btn">
          Send
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
