import React, { useState } from 'react'
import BannerSlider from './Components/BannerSlider'
import MenuMap from './Components/MenuMap'
import YoutubeVideos from './Components/YoutubeVideos'
import TabsWithModals from './Components/TabsWithModals'
import TabsWithCards from './Components/TabsWithCards'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import "./App.css"
import TabComponent from './Components/TabComponent'
import ModalComponent from './Components/TabsWithModals'
import TabWithCards from './Components/TabsWithCards'

const App = () => {


  const [activeTab, setActiveTab] = useState(null);

  const openModal = (modalName) => {
    setActiveTab(modalName);
  };

  const closeModal = () => {
    setActiveTab(null);
  };


  const slides = [
    {
      imageSrc:'https://wowslider.com/sliders/demo-10/data/images/autumn_leaves.jpg',
      altText: 'Image 1',
      title: 'Slide 1 Title',
      description: 'Description for Slide 1',
    },
    {
      imageSrc: 'https://wowslider.com/sliders/demo-10/data/images/forest.jpg',
      altText: 'Image 2',
      title: 'Slide 2 Title',
      description: 'Description for Slide 2',
    },
  ];
  const interval = 3000; 


  return (
    <div>
      <div className='navbar-menu'>
        <Navbar />
        <MenuMap />
      </div>
      <BannerSlider slides={slides} interval={interval}/>
      <YoutubeVideos />
      <TabComponent activeTab={activeTab} onTabClick={openModal} />

    <ModalComponent activeTab={activeTab} closeModal={closeModal} />
      <TabsWithCards/>
      <Footer />
    </div>
  )
}

export default App