import { useRef, forwardRef, RefObject } from 'react'

import classNames from 'classnames'

import { Box, Icon, Typography } from 'components/atomic'

import { InputProps } from './types'

const DEFAULT_ICON_SIZE = 16

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      error,
      border,
      className,
      containerClassName,
      disabled,
      icon,
      onChange,
      placeholder,
      prefix,
      stretch,
      suffix,
      symbol,
      value,
      ...restProps
    }: InputProps,
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const focus = () => {
      const inputInstanceRef = (ref as RefObject<HTMLInputElement>) || inputRef
      inputInstanceRef?.current?.focus?.()
    }

    return (
      <Box className={classNames(stretch ? 'w-full' : 'w-fit')} col>
        <Box
          className={classNames(
            'flex flex-row py-2.5 transition-all',
            'border-light-border-primary focus-within:border-dark-typo-gray dark:border-dark-border hover:border-dark-typo-gray dark:hover:border-dark-typo-gray dark:focus-within:border-dark-typo-gray',
            border ? 'border-solid' : 'border-none',
            stretch ? 'w-full' : 'w-fit',
            {
              'px-2 border rounded-2xl': border === 'rounded',
              'border-0 border-b': border === 'bottom',
            },
            containerClassName,
          )}
          onClick={focus}
          alignCenter
        >
          {prefix &&
            (typeof prefix === 'string' ? (
              <Typography variant="caption-xs" color="secondary">
                {prefix}
              </Typography>
            ) : (
              prefix
            ))}

          {icon && (
            <Icon
              className={classNames('mr-2', {
                'ml-2': border === 'rounded',
              })}
              color="secondary"
              size={DEFAULT_ICON_SIZE}
              name={icon}
            />
          )}

          <input
            disabled={disabled}
            ref={ref || inputRef}
            className={classNames(
              'font-primary bg-transparent dark:placeholder-dark-typo-gray dark:text-dark-typo-primary placeholder-light-typo-gray text-light-typo-primary transition-colors',
              'border-none font-normal text-[14px] focus:outline-none',
              stretch ? 'w-full' : 'md:w-52',
              { 'md:w-48': icon && !stretch, 'cursor-not-allowed': disabled },
              className,
            )}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...restProps}
          />

          {symbol && (
            <Typography variant="caption-xs" className="pr-2">
              {symbol}
            </Typography>
          )}
          {suffix &&
            (typeof suffix === 'string' ? (
              <Typography variant="caption-xs" color="secondary">
                {suffix}
              </Typography>
            ) : (
              suffix
            ))}
        </Box>

        {error && (
          <Typography
            className="pt-2 pl-2"
            fontWeight="semibold"
            variant="caption"
            color="red"
          >
            {error}
          </Typography>
        )}
      </Box>
    )
  },
)
