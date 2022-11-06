import React from 'react';

function Geolocation({ location }) {
  const [ipData, setIpData] = React.useState({});
  console.log(Number(location))
  React.useEffect(() => {
    async function getIP() {
      try {
        const response = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_XUvJji9P6uZF3ce93qR00P0RFCsFY&ipAddress=${location.ip}`,
          { mode: 'cors'}
        );
        const data = response.json();
        data.then((data) => setIpData({data}));
      }

      catch(err) {
        throw new Error("Adresse IP non valide");
      }
    };

    getIP();
  }, []);

  console.log(ipData.data)
}

export default Geolocation;