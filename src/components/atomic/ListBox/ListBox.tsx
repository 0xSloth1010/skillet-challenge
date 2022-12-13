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
      <div className="relative w-full">
        <HeadlessListbox.Button
          className={classNames(
            'w-full relative flex flex-row py-2.5 outline-none',
            'border border-solid border-dark-border hover:border-dark-typo-gray',
            'outline-none focus:outline-none',
          )}
        >
          {selectedVal}
        </HeadlessListbox.Button>
        <HeadlessListbox.Options className="w-full absolute rounded-xl border border-solid border-dark-border hover:border-dark-typo-gray z-50">
          {options.map((option, index) => (
            <HeadlessListbox.Option key={option} value={option} as={Fragment}>
              {({ active, selected }) => (
                <Box
                  className={classNames(
                    'w-full cursor-pointer space-x-2 p-2',
                    active
                      ? 'bg-light-gray-light text-black'
                      : 'bg-white text-black',
                    { 'rounded-t-xl': index === 0 },
                    { 'rounded-b-xl': index === options.length - 1 },
                  )}
                >
                  {selected ? (
                    <Icon color="purple" name="checkmark" />
                  ) : (
                    <div className="w-6 h-6" />
                  )}
                  <Typography className="!text-black" fontWeight="light">
                    {option}
                  </Typography>
                </Box>
              )}
            </HeadlessListbox.Option>
          ))}
        </HeadlessListbox.Options>
      </div>
    </HeadlessListbox>
  )
}
