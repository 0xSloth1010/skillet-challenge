import { useCallback } from 'react'

import { useAppSelector, useAppDispatch } from 'store/store'

import * as actions from './actions'

export const useCollection = () => {
  const collectionState = useAppSelector(({ collection }) => collection)
  const dispatch = useAppDispatch()

  const getCollections = useCallback(() => {
    dispatch(actions.getCollection())
  }, [dispatch])

  const getCollectionAssets = useCallback(
    (address: string) => {
      dispatch(actions.getCollectionAssets(address))
    },
    [dispatch],
  )

  return {
    ...collectionState,
    getCollections,
    getCollectionAssets,
  }
}
