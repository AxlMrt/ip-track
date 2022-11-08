import React from "react";

function Header({ ipValue, handleChange, handleClick }) {
  
  const ipRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;

  return (
    <header className="header h-2/5">
      <h1 className="font-medium text-white text-2xl">IP Address Tracker</h1>
      <div className="setInput tablet:w-72">
        <input
          className="rounded-l-xl pl-6 w-full"
          type="text"
          name=""
          value={ipValue}
          onChange={handleChange}
          placeholder="Entrez une adresse IP"
        />
        <button onClick={handleClick} className="bg-black p-5 rounded-r-xl hover:bg-neutral-800"><img src="./assets/icon-arrow.svg"/></button>
      </div>
        
    </header>
  );
};

export default Header;