import React from 'react';
import Map from '../map/Map';

function Geolocation({ location }) {
  const [ipData, setIpData] = React.useState({});

  const center = {
    lat: ipData.location ? ipData.location.lat : 51.505,
    lng: ipData.location ? ipData.location.lng : -0.09,
  }

  React.useEffect(() => {
    const response = fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_LQ4ypg67ukaMPtx5iQjpVg0J5PKaU&ipAddress=${location}`
    );
    response.then((data) => data.json()).then((info) => setIpData(info));
  }, [location]);

  return (
    <>
      {
        (ipData.location != null && ipData.location != null) &&
        <Map center={center}/>
      }
    </>
    
  );
}

export default Geolocation;