import classNames from 'classnames'

import IconList from './iconList'
import { IconProps, colorClasses } from './types'

export const Icon = ({
  className,
  color = 'primary',
  spin = false,
  name,
  size = 24,
  onClick,
}: IconProps) => {
  const IconComp = IconList[name] || IconList.question

  return (
    <IconComp
      className={classNames(
        'transition-all',
        colorClasses[color],
        spin ? 'animate-spin' : 'animate-none',
        onClick ? 'cursor-pointer' : '',
        className,
      )}
      size={size}
      onClick={onClick}
    />
  )
}
