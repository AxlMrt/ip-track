import React from 'react';
import Header from './components/header/Header';
import Geolocation from './components/IP-loc/Geolocation';

function App() {
  const [ipValue, setIpValue] = React.useState('8.8.8.8');
  const [updated, setUpdated] = React.useState(ipValue);

  function handleClick() {
    setUpdated(ipValue);
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
      <Geolocation location={updated}/>
    </div>
  );
}

export default App;
