import React, { useEffect, useRef } from 'react'
import Header from '../../components/Header'
import Search from '../homePage/componenets/Search'
import Category from '../homePage/componenets/Category'
import Card from '../homePage/componenets/Card'
import { motion, useAnimation } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import {transitionStageHandler} from '../../store/slice/appSlice'
import AnimationPage from '../../components/AnimationPage'

export const HomePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const categoryRef = useRef()
    const mainRef = useRef()

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (categoryRef.current != null) {
                if (window.pageYOffset >= 112) {
                    categoryRef.current.classList.add('categoryFixed')
                    mainRef.current.classList.add('pt-[6.375rem]')
                } else {
                    categoryRef.current.classList.remove('categoryFixed')
                    mainRef.current.classList.remove('pt-[6.375rem]')
                }
            }
        })
    }, [])

    const handleNavigate = ()=>{
        dispatch(transitionStageHandler("fadeOut"))
        setTimeout(() => {
            navigate("/detail/hai")
        }, 500);
    }

    return (
        <AnimationPage>
            <Header>
                <h1 className="font-extrabold text-base">Welcome</h1>
                <h1 className="font-semibold text-base">Bali, Indonesia</h1>
                <p className="font-medium text-xs">Top Rental</p>
            </Header>
            <div ref={categoryRef} className="bg-white">
                <Search />
                <Category />
            </div>
            <main ref={mainRef} className="mt-4 md:flex flex-wrap">
                <Card handleNavigate={handleNavigate}/>
                <Card handleNavigate={handleNavigate}/>
                <Card handleNavigate={handleNavigate}/>
                <Card handleNavigate={handleNavigate}/>
                <Card handleNavigate={handleNavigate}/>
                <Card handleNavigate={handleNavigate}/>
                <Card handleNavigate={handleNavigate}/>
                <Card handleNavigate={handleNavigate}/>
                <Card handleNavigate={handleNavigate}/>
                <Card handleNavigate={handleNavigate}/>
            </main>
        </AnimationPage>
    )
}

export default HomePage
