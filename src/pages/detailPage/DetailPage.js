import React from 'react'
import Header from '../../components/Header'
// import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiArrowLeftBoldOutline } from '@mdi/js'
import ContentDetail from '../detailPage/components/ContentDetail'
import Contact from '../detailPage/components/Contact'
import ImageGallery from 'react-image-gallery'
import AnimationPage from '../../components/AnimationPage'

const images = [
  {
    original:
      'https://cdn.futuready.com/artikel/media/2020/01/08131922/mobil_bumblebee_11.jpg',
    thumbnail:
      'https://cdn.futuready.com/artikel/media/2020/01/08131922/mobil_bumblebee_11.jpg'
  },
  {
    original:
      'https://asset.kompas.com/crops/APPNjTBPgKtL_lzsfwhwOaEPOZQ=/0x0:872x581/750x500/data/photo/2021/06/03/60b8728731d27.jpg',
    thumbnail:
      'https://asset.kompas.com/crops/APPNjTBPgKtL_lzsfwhwOaEPOZQ=/0x0:872x581/750x500/data/photo/2021/06/03/60b8728731d27.jpg'
  },
  {
    original:
      'https://asset.kompas.com/crops/aL8BEuHHZdMaulV0gokYqhdHSQ4=/88x144:1186x876/780x390/data/photo/2021/11/16/619292f1d0773.jpeg',
    thumbnail:
      'https://asset.kompas.com/crops/aL8BEuHHZdMaulV0gokYqhdHSQ4=/88x144:1186x876/780x390/data/photo/2021/11/16/619292f1d0773.jpeg'
  },
  {
    original:
      'https://pict-b.sindonews.net/dyn/620/pena/news/2022/02/08/120/680163/mobil-buatan-indonesia-ini-mengaspal-di-luar-negeri-nxo.jpg',
    thumbnail:
      'https://pict-b.sindonews.net/dyn/620/pena/news/2022/02/08/120/680163/mobil-buatan-indonesia-ini-mengaspal-di-luar-negeri-nxo.jpg'
  }
]

export const DetailPage = () => {
  // const { id } = useParams()
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(-1)
  }
  return (
    <AnimationPage>
      <Header>
        <div className='flex justify-center relative'>
          <button onClick={handleNavigate} className='absolute left-0'>
            <Icon
              path={mdiArrowLeftBoldOutline}
              size={1}
              color='rgb(96 165 250)'
            />
          </button>
          <h1 className='font-extrabold text-base'>Order Detail</h1>
        </div>
      </Header>
      <div className='mt-4'>
        <ImageGallery
          items={images}
          showPlayButton={false}
          showNav={false}
          showFullscreenButton={false}
        />
      </div>
      <div className='flex py-4 font-bold'>
        <button>
          <h1>Syarat dan ketentuan</h1>
        </button>
        {/* <button>
          <h1>Review</h1>
        </button> */}
      </div>
      <ContentDetail />
      <Contact />
    </AnimationPage>
  )
}

export default DetailPage
