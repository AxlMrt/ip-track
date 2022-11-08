import React from 'react';
import Info from '../IP-info/Info';
import Map from '../map/Map';
import Config from '../../config';

function Geolocation({ location }) {
  const [ipData, setIpData] = React.useState({});
  const center = {
    lat: ipData.location ? ipData.location.lat : 51.505,
    lng: ipData.location ? ipData.location.lng : -0.09,
  }

  React.useEffect(() => {
    const response = fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${Config.api.key}&ipAddress=${location}`
    );
    response.then((data) => data.json()).then((info) => setIpData(info));
  }, [location]);

  return (
    <>
      {
        (ipData.location != null && ipData.location != null) &&
        <Map center={center}/>
      }
      <div className='infos'>
        <Info ipData={ipData}/>
      </div>
    </>  
  );
}

export default Geolocation;