import { useMemo } from 'react'

import { Box, Icon, Typography } from 'components/atomic'

import { useCollection } from 'store/collection/hooks'

import { parseIpfsImgUrl } from 'helpers/string'

import { AssetCardProps } from './types'

export const AssetCard = ({ address }: AssetCardProps) => {
  const { assets, collections } = useCollection()

  const activeCollection = useMemo(
    () => collections.find((collection) => collection.address === address),
    [address, collections],
  )

  return (
    <Box col>
      {assets && assets?.[address] && activeCollection && (
        <Box className="w-full mb-8" row alignCenter justify="between">
          <Typography variant="h3">{activeCollection.name}</Typography>
          <Box className="space-x-2" row>
            {activeCollection.external_url && (
              <a
                href={activeCollection.external_url}
                target="_blank"
                rel="noreferrer"
              >
                <Box className="border border-solid border-dark-border p-2 rounded-md">
                  <Icon name="website" />
                </Box>
              </a>
            )}
            {activeCollection.discord_url && (
              <a
                href={activeCollection.discord_url}
                target="_blank"
                rel="noreferrer"
              >
                <Box className="border border-solid border-dark-border p-2 rounded-md">
                  <Icon name="discord" />
                </Box>
              </a>
            )}
            {activeCollection.twitter_username && (
              <a
                href={`https://twitter.com/${activeCollection.twitter_username}`}
                target="_blank"
                rel="noreferrer"
              >
                <Box className="border border-solid border-dark-border p-2 rounded-md">
                  <Icon name="twitter" />
                </Box>
              </a>
            )}
          </Box>
        </Box>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {assets &&
          assets?.[address] &&
          assets[address].map((asset) => {
            const isIpfs = asset.image_url.startsWith('ipfs://')

            return (
              <Box
                key={asset.token_id}
                className="border border-solid border-dark-border"
                center
                col
              >
                <img
                  className="p-2 object-contain h-52"
                  src={
                    isIpfs ? parseIpfsImgUrl(asset.image_url) : asset.image_url
                  }
                  alt=""
                />
                <Box
                  className="w-full p-2 border-t border-solid border-dark-border"
                  center
                >
                  <Typography>Token ID: {asset.token_id}</Typography>
                </Box>
              </Box>
            )
          })}
      </div>
    </Box>
  )
}
