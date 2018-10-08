import React from 'react';
import Navigation from '../Navigation';
import Home from '../Home';

const MainComponent = () => {
  const check = '2';
  return (
    <div className="container-fluid">
      <Navigation />
      <Home />
      {check}
    </div>
  );
};
export default MainComponent;
