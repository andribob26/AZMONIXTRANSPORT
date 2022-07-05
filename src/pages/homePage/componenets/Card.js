import React from 'react'
import Icon from '@mdi/react'
import { useNavigate } from 'react-router-dom'
import { mdiCarSeat, mdiClockTimeNineOutline, mdiStar } from '@mdi/js'


export const Card = () => {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/detail/hai")
  }

  return (
    <div className='p-4 md:w-1/2 lg:w-1/4'>
      <div className='border border-blue-400 rounded-xl p-2 box-border'>
        <img
          className='h-36 w-full object-cover bg-gray-300'
          src='https://cdn.futuready.com/artikel/media/2020/01/08131922/mobil_bumblebee_11.jpg'
          alt=''
        />
        <div className='mt-3'>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col'>
              <h1 className='font-bold'>Kijang</h1>
              <p className='flex font-semibold'><span><Icon path={mdiStar} size={1} color={"#FFD700"} /></span>4.5</p>
            </div>
            <button onClick={handleNavigate} className='border border-blue-400 rounded-xl px-4 font-semibold hover:bg-blue-400 transition-all duration-500'>
              Book
            </button>
          </div>
          <div className='flex justify-between mt-3 font-semibold text-xs'>
            <p className='flex justify-center items-center'>
              <span>
                <Icon path={mdiCarSeat} size={1} />
              </span>
              15 Seat
            </p>
            <p className='flex justify-center items-center'>
              <span>
                <Icon path={mdiClockTimeNineOutline} size={1} />
              </span>
              12 Jam
            </p>
            <p className='flex justify-center items-center'>Rp.610.000-</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
