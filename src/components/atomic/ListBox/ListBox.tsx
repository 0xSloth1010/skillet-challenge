import { Fragment, useEffect, useState } from 'react'

import { Listbox as HeadlessListbox } from '@headlessui/react'
import classNames from 'classnames'
import { Box, Icon, Typography } from 'components'

import { ListBoxProps } from './types'

export const ListBox = ({ value, options, onChange }: ListBoxProps) => {
  const [selectedVal, setSelectedVal] = useState(value)

  useEffect(() => {
    if (value !== selectedVal) setSelectedVal(value)
  }, [value, selectedVal])

  return (
    <HeadlessListbox
      value={selectedVal}
      onChange={onChange ? onChange : setSelectedVal}
    >
      <HeadlessListbox.Button
        className={classNames(
          'flex flex-row py-2.5 outline-none',
          'border border-solid border-dark-border hover:border-dark-typo-gray',
          'outline-none focus:outline-none',
        )}
      >
        {selectedVal}
      </HeadlessListbox.Button>
      <HeadlessListbox.Options className="rounded-xl border border-solid border-dark-border hover:border-dark-typo-gray">
        {options.map((option, index) => (
          <HeadlessListbox.Option key={option} value={option} as={Fragment}>
            {({ active, selected }) => (
              <Box
                className={classNames(
                  'cursor-pointer space-x-2 p-2',
                  active ? 'bg-blue-500 text-white' : 'bg-white/80 text-black',
                  { 'rounded-t-xl': index === 0 },
                  { 'rounded-b-xl': index === options.length - 1 },
                )}
              >
                {selected ? (
                  <Icon color={active ? 'white' : 'purple'} name="checkmark" />
                ) : (
                  <div className="w-6 h-6" />
                )}
                <Typography
                  className={active ? '!text-white' : '!text-black'}
                  fontWeight="light"
                >
                  {option}
                </Typography>
              </Box>
            )}
          </HeadlessListbox.Option>
        ))}
      </HeadlessListbox.Options>
    </HeadlessListbox>
  )
}
