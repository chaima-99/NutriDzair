#import React from 'react'
import HeroSection from '../Components/Sections/HeroSection.tsx'
import AboutSection from '../Components/Sections/AboutSection.tsx'
import FeaturesSection from '../Components/Sections/FeaturesSection.tsx'
import FinalSection from '../Components/Sections/FinalSection.tsx'


const Homepage = () => {
    return (
        <div className='overflow-y-auto w-screen h-screen overflow-x-hidden'>

            <HeroSection />
            <AboutSection />
            <FeaturesSection />
            <FinalSection />
        </div>
    )
}

export default Homepage
