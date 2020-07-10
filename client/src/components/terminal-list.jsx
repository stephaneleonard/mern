import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const TerminalList = () => {
  const [terminals, setTerminals] = useState({ docs: [] });
  const position = [51.505, -0.09]

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/terminals',
    }).then((res) => {
      console.log(res.data);
      setTerminals(res.data.data);
    });
  });

  return (
    <Map center={position} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup.
          <br />
          Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
};

export default TerminalList;
