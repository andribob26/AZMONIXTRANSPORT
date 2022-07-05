import React from 'react'
import Icon from '@mdi/react'
import { mdiMagnify } from '@mdi/js'

export const Search = () => {
  return (
    <div className='relative py-3'>
      <input
        className='border outline-none pl-10 pr-2 py-1 w-full rounded-xl border-blue-400'
        type='text'
        placeholder='Search...'
      />
      <button className='absolute left-0 translate-x-2 translate-y-[2px] p-1 '>
        <Icon path={mdiMagnify} size={1} />
      </button>
    </div>
  )
}

export default Search
