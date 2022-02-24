const initState = {
  name: 'thuan'
};

const informationReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INFORMATION':

      return state

    default:
      return state;
  }
}

export default informationReducer;