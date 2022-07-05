import React from 'react'
import Icon from '@mdi/react'
import {mdiAccountCircleOutline, mdiPhoneInTalk, mdiMessageProcessing} from '@mdi/js'

export const Contact = () => {
    return (
        <>
            <div className='flex items-center rounded-xl mt-4 border border-blue-400'>
                <div className='flex items-center flex-1'>
                    <div className='p-2'>
                        <Icon
                            path={mdiAccountCircleOutline}
                            size={1}
                        />
                    </div>
                    <div className="text-xs">
                        <h1 className='font-semibold'>AZMONIX TRANSPORT</h1>
                        <p>Tour Guide</p>
                    </div>
                </div>
                <div className="p-2 hover:bg-blue-400 cursor-pointer border m-1 border-blue-400 rounded-xl">
                    <Icon
                        path={mdiMessageProcessing}
                        size={1}
                    />
                </div>
                <div className="p-2 hover:bg-blue-400 cursor-pointer border border-blue-400 mr-1 rounded-xl">
                    <Icon
                        path={mdiPhoneInTalk}
                        size={1}
                        color="rgb(34 197 94)"
                    />
                </div>
            </div>
        </>
    )
}

export default Contact
