import React from 'react'
import MainCrosel from "../../components/HomeCarousel/MainCrosel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import {kurtaPage1} from "../../../Data/mens_kurta";

const HomePage = () => {
    return (
        <div>
            <MainCrosel/>

            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarousel data={kurtaPage1} sectionName={"Men's Kurta"}/>
                <HomeSectionCarousel data={kurtaPage1} sectionName={"Men's Shoes"}/>
                <HomeSectionCarousel data={kurtaPage1} sectionName={"Men's Shirt"}/>
                <HomeSectionCarousel data={kurtaPage1} sectionName={"Women's Saree"}/>
                <HomeSectionCarousel data={kurtaPage1} sectionName={"Women's Dress"}/>
            </div>
        </div>
    )
}

export default HomePage;