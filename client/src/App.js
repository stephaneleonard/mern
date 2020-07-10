import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Leaflet from './components/leaflet';

function App() {
  const [terminals, setTerminals] = useState({ docs: [] });

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/terminals',
    }).then((res) => {
      console.log(res.data.data);
      setTerminals(res.data.data);
    });
  }, []);

  if (terminals.docs.length == 0) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="App">
        <h1>Terminals</h1>
        <Leaflet terminals={terminals} />
      </div>
    );
  }
}

export default App;
