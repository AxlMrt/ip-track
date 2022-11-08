import React from 'react';
import Header from './components/header/Header';
import Geolocation from './components/IP-loc/Geolocation';

function App() {
  const [ipValue, setIpValue] = React.useState('');
  const [updated, setUpdated] = React.useState(ipValue);

  function handleClick() {
    const ipRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
    if (ipRegex.test(ipValue)) setUpdated(ipValue);
    if (!ipRegex.test(ipValue) && ipValue === "") alert('Please, enter a valid IP');
  }

  function handleChange(event) {
    setIpValue(event.target.value);
  }

  return (
    <div className="w-screen h-screen">
      <Header
        ipValue={ipValue}
        updated={updated}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <Geolocation location={updated} />
    </div>
  );
}

export default App;
