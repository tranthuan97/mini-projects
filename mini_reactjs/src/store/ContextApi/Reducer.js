const initState = {
  name: '',
  age: '',
}

const Reducer = (state, action) => {
  const newState = { ...state };

  switch (action.type) {

    case 'UPDATE_NAME_SUCCESS':
      newState.name = action.payload.name;
      return newState;
    case 'UPDATE_AGE_SUCCESS':
      
      newState.age = action.payload.age;
      return newState;

    default:
      break;
  }
}

export { initState };

export default Reducer;