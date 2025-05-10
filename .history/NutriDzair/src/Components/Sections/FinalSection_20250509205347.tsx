import React from 'react'

const FinalSection = () => {
    return (
        <section className='h-screen min-w-full flex flex-col bg-[rgba(221,221,221,1)] items-center justify-center ' style={{ background:`url('../../assets/Images/footer..jpg')` }}>
            <h1 className='text-[4.8rem] text-white mb-4 font-poppins font-bold leading-snug w-[15ch] text-center'>What are you waiting for ?</h1>
            <button className='text-2xl mt-10 px-8 py-6 bg-[rgba(76,175,80,1)] hover:bg-green-700 text-white font-semibold md:text-2xl rounded-full transition-all duration-300'>
                Get Started with NutriDzair
            </button>
        </section>
    )
}

export default FinalSection
