import classNames from 'classnames'
import { Box, Button } from 'components'

import Logo from 'assets/logo.png'

export const Header = () => {
  return (
    <header
      className={classNames(
        'flex items-center justify-between border-b py-4 backdrop-blur-lg',
        'fixed left-0 top-0 right-0 min-h-[64px] z-[150] duration-500',
        'border-dark-header-border bg-header/80',
      )}
    >
      <Box
        className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8"
        alignCenter
        justify="between"
      >
        <img
          className="w-8 h-8 object-cover object-left"
          src={Logo}
          alt="logo"
        />

        <Button isFancy>Connect Wallet</Button>
      </Box>
    </header>
  )
}
