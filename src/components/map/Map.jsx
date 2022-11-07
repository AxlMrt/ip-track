import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './map.css';

function Map({ center }) {
  return (
        <MapContainer center={center} zoom={13} scrollWheelZoom={true} className="h-80 w-80">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
  );
}

export default Map;