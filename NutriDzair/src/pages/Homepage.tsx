import React from 'react'
import HeroSection from '../Components/Sections/HeroSection.tsx'
import AboutSection from '../Components/Sections/AboutSection.tsx'


const Homepage = () => {
    return (
        <div className='overflow-y-auto w-screen h-screen overflow-x-hidden'>

            <HeroSection />
            <AboutSection />
        </div>
    )
}

export default Homepage
