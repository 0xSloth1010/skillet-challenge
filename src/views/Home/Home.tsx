import { useMemo, useState } from 'react'

import { Box, ListBox, Typography } from 'components'

import { getCollectionOptions } from 'helpers/collection'

import Logo from 'assets/logo.png'

import { collections, placeholder } from './types'

export const Home = () => {
  const options = useMemo(() => {
    return getCollectionOptions(collections)
  }, [])

  const [collectionOption, setCollectionOption] = useState(placeholder)

  return (
    <Box className="space-y-16">
      <Box className="mx-auto mt-12" col>
        <Box className="py-8" center>
          <img className="w-auto h-20 object-contain" src={Logo} alt="logo" />
        </Box>
        <Typography>
          Tired of listing your NFTs and waiting for them to sell?
        </Typography>
        <Typography>
          Skillet allows you to immediately sell your NFTs at the best price
          across Web3.
        </Typography>
        <Box className="w-full my-8" col>
          <ListBox
            value={collectionOption}
            options={[placeholder, ...options]}
            onChange={setCollectionOption}
          />
        </Box>
      </Box>
    </Box>
  )
}
