import { combineReducers } from '@reduxjs/toolkit'

/* PLOP_INJECT_IMPORT */
import { reducer as collectionReducer } from './collection/slice'

const rootReducer = combineReducers({
  /* PLOP_INJECT_REDUCER */
  collection: collectionReducer,
})

export default rootReducer
