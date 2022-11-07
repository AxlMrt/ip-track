import React from "react";

function Header({ ipValue, handleChange, handleClick }) {
  
  const ipRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;

  return (
    <header className="App-header">
        <h1>IP Address Tracker</h1>
        <input 
          type="text"
          name=""
          value={ipValue}
          onChange={handleChange}
          placeholder="Entrez une adresse IP"
        />
        <button onClick={handleClick}>Recherche</button>
    </header>
  );
};

export default Header;