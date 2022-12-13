import { Header } from 'components'

import { LayoutProps } from './types'

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-elliptical w-full flex-grow min-h-[calc(100vh-64px)]">
      <Header />
      <div className="w-full h-full flex-grow pt-20 max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  )
}
