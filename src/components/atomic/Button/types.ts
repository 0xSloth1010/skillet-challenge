import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
  ReactNode,
} from 'react'

import { TextTransform } from 'components/atomic'

import { ColorType } from 'types/app'

export type ButtonTypes = 'default' | 'outline' | 'borderless'
export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg'
export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'tint'
  | 'warn'

export type VariantClasses = Record<ButtonVariants, string>
export type SizeClasses = Record<ButtonSizes, string>

export type ButtonProps = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'type'
> & {
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  loading?: boolean
  tooltip?: string
  size?: ButtonSizes
  textColor?: ColorType | 'primaryBtn' | 'secondaryBtn'
  transform?: TextTransform
  type?: ButtonTypes
  stretch?: boolean
  variant?: ButtonVariants
  startIcon?: ReactNode
  endIcon?: ReactNode
  isFancy?: boolean
  error?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}
