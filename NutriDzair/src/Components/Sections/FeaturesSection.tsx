import React from 'react'
import dish1 from '../../assets/images/dish1.png'
import dish2 from '../../assets/images/dish2.png'
import dish3 from '../../assets/images/dish3.png'

const FeaturesSection = () => {
  return (
    <section className='h-[130dvh] min-w-full flex bg-[#ffffff] items-center justify-center p-10'>
      <div className='flex flex-col items-center justify-around h-[90%] text-center'>
        <h1 className='text-[4.8rem] text-[rgba(85,85,85,1)] mb-4 font-poppins font-bold leading-snug w-[20ch]'>
          What it provides
        </h1>
        <div className='relative h-fit overflow-visible flex items-center justify-center gap-10'>
          <div className='flex flex-col items-center justify-between h-[75%] text-center gap-10 mt-20'>
            <div className='flex flex-col items-center justify-center gap-3'>
              <h1 className='text-[2rem] text-[rgba(255,142,115,1)] mb-4 font-poppins font-semibold leading-snug w-[20ch]'>
                Authentic Algerian Cuisine & More
              </h1>
              <img
                src={dish1}
                alt="dish1"
                className='w-[300px] h-auto top-0 right-0'
              />
            </div>
            <p className='text-[1.4rem] text-[rgba(153,153,153,1)] font-poppins font-normal leading-normal w-[25ch] text-center'>Discover both traditional Algerian dishes and international meals, tailored to your health and taste preferences.</p>
          </div>
          
          <div className='flex flex-col items-center justify-between h-[75%] text-center gap-10 -mt-32 z-10'>
            <div className='flex flex-col items-center justify-center gap-3'>
              <h1 className='text-[2rem] text-[rgba(255,142,115,1)] mb-4 font-poppins font-semibold leading-snug w-[20ch]'>
                Variety You'll Love
              </h1>
              <img
                src={dish2}
                alt="dish2"
                className='w-[300px] h-auto top-0 right-0'
              />
            </div>
            <p className='text-[1.4rem] text-[rgba(153,153,153,1)] font-poppins font-normal leading-normal w-[25ch] text-center'>Enjoy a mix of flavors, from comforting classics to new discoveries, ensuring you never get bored with your meals!</p>
          </div>
          
          <div className='flex flex-col items-center justify-between h-[75%] text-center gap-10 mt-20'>
            <div className='flex flex-col items-center justify-center gap-3'>
              <h1 className='text-[2rem] text-[rgba(255,142,115,1)] mb-4 font-poppins font-semibold leading-snug w-[20ch]'>
                Balanced & Nutritious Meals
              </h1>
              <img
                src={dish3}
                alt="dish3"
                className='w-[300px] h-auto top-0 right-0'
              />
            </div>
            <p className='text-[1.4rem]  text-[rgba(153,153,153,1)] font-poppins font-normal leading-normal w-[25ch] text-center'>Get recommendations that fit your dietary needs, whether you want to eat healthier, gain energy, or maintain balance.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection