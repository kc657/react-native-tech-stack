import {combineReducers} from 'redux'
import LibraryReducer from './LibraryReducer'

export default combineReducers({
  libraries: LibraryReducer
})

// console.log(store.getState()); if we get state
// {libraries: []} we get an empty array from libraries
