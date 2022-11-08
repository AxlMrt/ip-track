import React from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import L from "leaflet";
import ChangeView from './ChangeView';

function Map({ center }) {
  const marker = L.icon({
    iconUrl: './assets/icon-location.svg',
    iconSize: [45, 55],
  });

  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={true} className="h-3/5 w-full">
      <ChangeView center={center} zoom={13}/>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} icon={marker}>
        <Popup>
          Your position
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;