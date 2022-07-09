import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import {transitionStageHandler} from '../store/slice/appSlice'

export const AnimationPage = ({ children }) => {
    const transitionStage = useSelector(state => state.appSlice.transitionStage)
    const dispatch = useDispatch()
    const controls = useAnimation()
    const variants = {
        hidden: {
            opacity: 0,
            left: '-1.25rem'
        },
        show: {
            opacity: 1,
            left: 0
        }
    }
    useEffect(() => {
        controls.start("show");
    },[])
    useEffect(() => {
        if (transitionStage === 'fadeOut'){
            controls.start("hidden");
            dispatch(transitionStageHandler("fadeIn"))
        }
    }, [transitionStage]);
    return (
        <motion.div
            className="fade"
            variants={variants}
            initial={{
                opacity: 0,
                left: '-1.25rem'
            }}
            animate={controls}
            transition={{
                duration: 0.5
            }}
        >
            {children}
        </motion.div>
    )
}

export default AnimationPage
