import React, { useRef } from 'react'
import Icon from '@mdi/react'
import { mdiCircle } from '@mdi/js';

export const Category = () => {

    return (
        <div className="no-scrollbar font-semibold flex overflow-x-auto justify-between pb-5">
            <div className="whitespace-nowrap cursor-pointer first:ml-0 last:mr-0 mx-3 flex flex-col items-center relative">Rental Sport
            <span className="absolute -bottom-4">
                <Icon path={mdiCircle} size='1rem' color="rgb(96 165 250)" />
            </span></div>
            <div className="whitespace-nowrap cursor-pointer first:ml-0 last:mr-0 mx-3">Rental</div>
            <div className="whitespace-nowrap cursor-pointer first:ml-0 last:mr-0 mx-3">Rental Mini Copper</div>
            <div className="whitespace-nowrap cursor-pointer first:ml-0 last:mr-0 mx-3">Sewa Toyota Hiace 15 Seat</div>
            <div className="whitespace-nowrap cursor-pointer first:ml-0 last:mr-0 mx-3">Rent New Alphard Facelit</div>
        </div>
    )
}

export default Category