import React from 'react';
import Map from '../map/Map';

function Geolocation({ location }) {
  const [ipData, setIpData] = React.useState({});

  React.useEffect(() => {
    const response = fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_XUvJji9P6uZF3ce93qR00P0RFCsFY&ipAddress=${location}`
    );
    response.then((data) => data.json()).then((info) => setIpData(info))
  
  }, [location]);

  return (
    <Map ipData={ipData.location}/>
  );
}

export default Geolocation;