import React from "react";
import Geolocation from "../IP-loc/Geolocation";

function Header() {
  const [ip, setIp] = React.useState({
    ip: undefined,
  });

  function handleInput(event) {
    const { value, name } = event.target;
    setIp((current) => ({
      ...current,
      [name]: value,
    }))
  }
  console.log(ip.ip)
  return (
    <header className="App-header">
        <h1>IP Address Tracker</h1>
        <input 
          type="text"
          name="ip"
          value={ip.ip}
          onChange={handleInput}
        />
        <Geolocation location={ip}/>
    </header>
  );
};

export default Header;