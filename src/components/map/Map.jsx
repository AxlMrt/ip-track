import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './map.css';

function Map({ipData}) {
  console.log(ipData);

  return (
    <MapContainer center={[ipData ? ipData.lat : 51.505, ipData ? ipData.lng : -0.09]} zoom={13} scrollWheelZoom={true} className="h-80 w-80">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[ipData ? ipData.lat : 51.505, ipData ? ipData.lng : -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;