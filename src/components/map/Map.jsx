import React from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import ChangeView from './ChangeView';


function Map({ center }) {
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={true} className="h-3/5 w-full">
      <ChangeView center={center} zoom={13}/>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          Position of the IP address
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;