import React from 'react';
import PropTypes from 'prop-types';
import { useContextApi } from '../../store/ContextApi/hooks';
import Information from './Information';

const Todo = props => {
  const [state, dispatch] = useContextApi();

  return (
    <div>
      <p>This is todo list using context api</p>

      <Information />
      <button onClick={() => dispatch({ type: 'UPDATE_NAME_SUCCESS', payload: { name: 'Trần Thuận' } })}>Đổi tên</button>
      <button onClick={() => dispatch({ type: 'UPDATE_AGE_SUCCESS', payload: { age: 25 } })}>Đổi tuổi</button>
    </div>
  );
};

Todo.propTypes = {

};

export default Todo;