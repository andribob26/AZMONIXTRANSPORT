import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import DetailPage from './pages/detailPage/DetailPage';
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
function App() {
  return (
    <div className="relative">
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </div>
  );
}


function Content() {
  const location = useLocation();
  // const dispatch = useDispatch()
  // const transitionStage = useSelector(state => state.appSlice.transitionStage)

  // const [displayLocation, setDisplayLocation] = useState(location);
  // const [transitionStage, setTransistionStage] = useState("fadeIn");

  // useEffect(() => {

  //   console.log(location !== displayLocation)
  //   if (location.pathname !== displayLocation.pathname) {
  //     dispatch(transitionStageHandler("fadeOut"))
  //   }

  // }, [location, displayLocation]);

  // useEffect(() => {
  //   console.log(displayLocation);
  // })

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
