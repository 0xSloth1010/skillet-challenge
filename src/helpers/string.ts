export const parseIpfsImgUrl = (url: string) => {
  return url.replace('ipfs://', 'https://ipfs.io/ipfs/')
}
