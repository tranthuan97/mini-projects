import React from 'react';
import PropTypes from 'prop-types';
import { useContextApi } from '../../store/ContextApi/hooks';

const Information = props => {
  const [state, dispatch] = useContextApi();

  return (
    <div>
      <p>show my information</p>
      <p>name: {state.name}</p>
      <p>age: {state.age}</p>
    </div>
  );
};

Information.propTypes = {

};

export default Information;