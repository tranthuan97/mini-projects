import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Todo2 = props => {
  const state = useSelector(state => state.info);
  console.log('🚀 -  -°˜° ~ state', state)
  return (
    <div>
      123123
    </div>
  );
};

Todo2.propTypes = {

};

export default Todo2;