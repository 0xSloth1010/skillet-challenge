import { createSlice } from '@reduxjs/toolkit'

import { getCollection, getCollectionAssets } from './actions'
import { State } from './types'

const initialState: State = {
  isCollectionLoading: false,
  collections: [],
  isAssetsLoading: false,
  assets: {},
  error: null,
}

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCollection.pending, (state) => {
        state.isCollectionLoading = true
        state.error = ''
      })
      .addCase(getCollection.fulfilled, (state, { payload }) => {
        state.isCollectionLoading = false
        state.collections = payload
      })
      .addCase(getCollection.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.errorMessage
        } else {
          state.error = action.error.message
        }
      })
      .addCase(getCollectionAssets.pending, (state) => {
        state.isAssetsLoading = true
        state.error = ''
      })
      .addCase(getCollectionAssets.fulfilled, (state, { payload, meta }) => {
        state.isAssetsLoading = false
        state.assets = {
          ...state.assets,
          [meta.arg]: payload,
        }
      })
      .addCase(getCollectionAssets.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.errorMessage
        } else {
          state.error = action.error.message
        }
      })
  },
})

export const { reducer, actions } = collectionSlice

export default collectionSlice
