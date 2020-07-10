import React, { useState, useEffect } from 'react';


const TerminalList = () => {

  return (
    <ul>
      {terminals.docs.map((item) => (
        <li>{item.address}</li>
      ))}
    </ul>
  );
};

export default TerminalList;
