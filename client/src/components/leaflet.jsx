import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Leaflet = ({ terminals }) => {
  return (
    <Map center={[45.421532, -75.697189]} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {terminals.docs.map((item) => (
        <Marker key={item._id} position={[item.latitude , item.longitude]}/>
      ))}
    </Map>
  );
};

export default Leaflet;
