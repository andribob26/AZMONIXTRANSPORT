import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import DetailPage from './pages/detailPage/DetailPage'
function App () {
  useEffect(() => {
    sessionStorage.setItem('isReload', true)
  }, [])

  return (
    <div className='relative'>
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </div>
  )
}

function Content () {
  const location = useLocation()
  return (
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/detail/:id' element={<DetailPage />} />
      </Routes>
  )
}

export default App
