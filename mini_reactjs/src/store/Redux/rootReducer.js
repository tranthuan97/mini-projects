import { combineReducers } from 'redux'
import informationReducer from './Reducers/informationReducer'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  info: informationReducer,
})

export default rootReducer