import React from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import ChangeView from './ChangeView';


function Map({ center }) {
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={true} className="h-80 w-80">
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