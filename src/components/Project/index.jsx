import React from 'react';
import Navigation from '../Navigation';

const ProjectComponent = () => {
  const check = '1';
  return (
    <div className="container-fluid">
      <Navigation />
      <div>{check}</div>
    </div>
  );
}
export default ProjectComponent;