import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { AxiosError } from 'axios'

import { ValidationErrors } from 'store/types'

import { Asset, Collection } from 'types/app'

const BASE_URL = 'https://skillet-interview-express-rng3tbs6qq-wl.a.run.app'

export const getCollection = createAsyncThunk<
  Collection[],
  void,
  { rejectValue: ValidationErrors }
>('skillet/getCollections', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/getCollections`)
    return response.data
  } catch (err) {
    const error = err as AxiosError<ValidationErrors>

    if (!error.response) throw err

    return rejectWithValue(error.response.data)
  }
})

export const getCollectionAssets = createAsyncThunk<
  Asset[],
  string,
  { rejectValue: ValidationErrors }
>('skillet/getCollectionAssets', async (address, { rejectWithValue }) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/getCollectionAssets?collectionAddress=${address}`,
    )
    return response.data
  } catch (err) {
    const error = err as AxiosError<ValidationErrors>

    if (!error.response) throw err

    return rejectWithValue(error.response.data)
  }
})
