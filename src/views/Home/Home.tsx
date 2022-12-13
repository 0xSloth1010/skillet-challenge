import { useEffect, useMemo, useState } from 'react'

import { AssetCard, Box, ListBox, Typography } from 'components'

import { useCollection } from 'store/collection/hooks'

import { getCollectionOptions } from 'helpers/collection'

import Logo from 'assets/logo.png'

import { placeholder } from './types'

export const Home = () => {
  const [collectionOption, setCollectionOption] = useState(placeholder)
  const { assets, collections, getCollections, getCollectionAssets } =
    useCollection()

  const activeCollection = useMemo(() => {
    const collection = collections.find(
      (item) => item.name === collectionOption,
    )

    return collection
  }, [collections, collectionOption])

  const options = useMemo(() => {
    return getCollectionOptions(collections)
  }, [collections])

  useEffect(() => {
    if (collections.length === 0) getCollections()
  }, [collections, getCollections])

  useEffect(() => {
    if (activeCollection && !assets?.[activeCollection.address]) {
      getCollectionAssets(activeCollection.address)
    }
  }, [
    activeCollection,
    assets,
    collections,
    collectionOption,
    getCollectionAssets,
  ])

  return (
    <Box className="space-y-16">
      <Box className="w-full mx-auto mt-12" col>
        <Box className="my-12" center>
          <img
            className="w-auto h-12 md:h-20 object-contain"
            src={Logo}
            alt="logo"
          />
        </Box>
        <Typography>
          Tired of listing your NFTs and waiting for them to sell?
        </Typography>
        <Typography>
          Skillet allows you to immediately sell your NFTs at the best price
          across Web3.
        </Typography>
        <Box className="w-full my-12" col>
          <ListBox
            value={collectionOption}
            options={[placeholder, ...options]}
            onChange={setCollectionOption}
          />
        </Box>
        {activeCollection && <AssetCard address={activeCollection.address} />}
      </Box>
    </Box>
  )
}
