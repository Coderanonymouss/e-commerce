import React from 'react'
import {mainCarouselData} from "./MainCarouselData"
import AliceCarousel from "react-alice-carousel"
import 'react-alice-carousel/lib/alice-carousel.css';
import {shouldDisableButtons} from "react-alice-carousel/lib/utils";

const MainCrosel = () =>{

    const items = mainCarouselData.map((item) =>
        <img className='cursor-pointer' role="presentation" src={item.image} alt=""/>)

    return (
        <AliceCarousel
        items={items}
        disableButtonControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        />
    )
}
export default MainCrosel