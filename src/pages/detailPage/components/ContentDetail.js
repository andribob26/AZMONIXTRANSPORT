import React, { useRef, useState, useEffect } from 'react'

export const ContentDetail = () => {
    const ketRef = useRef()
    

    const showKet = (e) => {
        const ulHeight = ketRef.current.firstChild.offsetHeight
        if (ketRef.current.classList.contains("max-h-36")) {
            ketRef.current.classList.remove('max-h-36')
            ketRef.current.style.maxHeight = `${ulHeight}px`
            e.currentTarget.classList.add("textInVisible")
            e.currentTarget.nextSibling.classList.remove("textInVisible")
        } else {
            ketRef.current.style.maxHeight = null
            ketRef.current.classList.add('max-h-36')
            e.currentTarget.classList.add("textInVisible")
            e.currentTarget.previousSibling.classList.remove("textInVisible")
        }
    }
    return (
        <>
            <article className="font-semibold">
                <p>Harga tidak termasuk :</p>
                <div ref={ketRef} className="max-h-36 transition-all duration-500 overflow-hidden">
                    <ul className='list-disc ml-4'>
                        <li><p>Tiket parkir</p></li>
                        <li><p>Tiket tol</p></li>
                        <li><p>Tiping guide</p></li>
                        <li><p>Tiket masuk objek wisata</p></li>
                        <li><p>Pengeluaran pribadi</p></li>
                        <li><p>Tiket parkir</p></li>
                        <li><p>Tiket tol</p></li>
                        <li><p>Tiping guide</p></li>
                        <li><p>Tiket masuk objek wisata</p></li>
                        <li><p>Pengeluaran pribadi</p></li>
                    </ul>
                </div>
                <div className='relative'>
                    <button onClick={showKet} className='text-blue-400 transition-all duration-500'>Baca selengkapnya</button>
                    <button onClick={showKet} className='text-blue-400 absolute left-0 transition-all duration-500 textInVisible'>Perkecil</button>
                </div>
            </article>
        </>
    )
}

export default ContentDetail
