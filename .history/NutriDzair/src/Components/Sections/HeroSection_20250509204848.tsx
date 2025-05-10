// import React from 'react'

// const HeroSection = () => {
//     return (
//         <section className="h-screen min-w-full flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${'../../assets/Images/Background_image.jpg'})` }}>
//             <div className='flex flex-col items-center justify-between h-[max(45%,300px)] text-center '>
//                 <div className='flex flex-col items-center justify-center gap-3'>
//                     <h1 className='text-[4.8rem] text-[rgba(85,85,85,1)] mb-4 font-poppins font-bold leading-snug w-[20ch]'>
//                         Eat  Smart and Stay Healthy with <span className='text-[rgba(255,142,115,1)]'> NutriDzair</span>
//                     </h1>
//                     <div className='text-2xl px-[100px] text-[rgba(153,153,153,1)] font-poppins font-semibold leading-normal w-[677px] text-center'>
//                         Find meals tailored to your taste, budget, and health goals-all in one place. Tell me what matters most to you, and I’ll find the
//                         <span className='text-[rgba(255,142,115,1)]'> perfect meal!</span>
//                     </div>
//                 </div>
//                 <button className='text-2xl mt-8 px-8 py-6 bg-[rgba(76,175,80,1)] hover:bg-green-700 text-white font-semibold md:text-2xl rounded-full transition-all duration-300'>
//                     Get Started with NutriDzair
//                 </button>
                
//             </div>
//         </section>
//     )
// }

// export default HeroSection


import React from 'react'
// Import the image using relative path based on your project structure
// Option 1: Using public folder (if your image is in the public directory)
// No import needed, just reference directly in the style

const HeroSection = () => {
    return (
        <section 
            className="h-screen min-w-full flex items-center justify-center bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url('../../assets/Images/Background_image.jpg')` }} // Assuming the image is in public/images folder
        >
            {/* Overlay to ensure text remains readable over image */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            
            <div className="flex flex-col items-center justify-between h-3/5 text-center relative z-10">
                <div className="flex flex-col items-center justify-center gap-3">
                    <h1 className="text-5xl text-white mb-4 font-bold leading-snug max-w-4xl">
                        Eat Smart and Stay Healthy with <span className="text-orange-300">NutriDzair</span>
                    </h1>
                    <div className="text-xl px-6 text-gray-100 font-medium leading-normal max-w-2xl text-center">
                        Find meals tailored to your taste, budget, and health goals—all in one place. Tell me what matters most to you, and I'll find the
                        <span className="text-orange-300"> perfect meal!</span>
                    </div>
                </div>
                <button className="text-xl mt-8 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300">
                    Get Started with NutriDzair
                </button>
            </div>
        </section>
    )
}

export default HeroSection
