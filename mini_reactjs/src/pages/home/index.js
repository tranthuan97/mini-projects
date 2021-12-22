import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomePage = props => {
  return (
    <div>
      <div>Navigate to exac page</div>
      <Link to="/calculator">Calculator</Link>
    </div>
  );
};

HomePage.propTypes = {
  
};

export default HomePage;