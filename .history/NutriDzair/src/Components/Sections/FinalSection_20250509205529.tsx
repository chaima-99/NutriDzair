import React from 'react'
import footerBgImage from '../../assets/Images/footer_bg.jpg'


const FinalSection = () => {
    return (
        <section className='h-screen min-w-full flex flex-col items-center justify-center ' style={{ backgroundImage:`url('../../assets/Images/footer_bg.jpg')` }}>
            <h1 className='text-[4.8rem] text-white mb-4 font-poppins font-bold leading-snug w-[15ch] text-center'>What are you waiting for ?</h1>
            <button className='text-2xl mt-10 px-8 py-6 bg-[rgba(76,175,80,1)] hover:bg-green-700 text-white font-semibold md:text-2xl rounded-full transition-all duration-300'>
                Get Started with NutriDzair
            </button>
        </section>
    )
}

export default FinalSection
