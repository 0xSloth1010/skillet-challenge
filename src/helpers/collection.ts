import { Collection } from 'types/app'

export const getCollectionOptions = (collections: Collection[]) => {
  return collections.map((collection) => collection.name)
}
