import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomePage = props => {
  return (
    <div>
      <div>Navigate to exac page</div>
      <div> <Link to="/calculator">Calculator</Link></div>
      <div><Link to="/colorful">Colorful</Link></div>
    </div>
  );
};

HomePage.propTypes = {

};

export default HomePage;