import {combineReducers} from 'redux'
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SelectionReducer'

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
})

// console.log(store.getState()); if we get state
// {libraries: []} we get an empty array from libraries
