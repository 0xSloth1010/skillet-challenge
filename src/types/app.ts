export type ColorType =
  | 'primary'
  | 'secondary'
  | 'purple'
  | 'yellow'
  | 'pink'
  | 'blue'
  | 'blueLight'
  | 'green'
  | 'orange'
  | 'cyan'
  | 'gray'
  | 'red'
  | 'greenLight'

export type Collection = {
  address: string
  description: string
  discord_url: Maybe<string>
  external_url: string
  image_url: string
  name: string
  slug: string
  twitter_username: string
  instagram_username?: string
  schema_name: string
  symbol: string
  banner_image_url?: string
}

export type Asset = {
  token_id: string
  image_url: string
}
