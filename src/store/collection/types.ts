import { Asset, Collection } from 'types/app'

export interface State {
  isCollectionLoading: boolean
  collections: Collection[]
  isAssetsLoading: boolean
  assets: Record<string, Asset[]>
  error: Maybe<string>
}
