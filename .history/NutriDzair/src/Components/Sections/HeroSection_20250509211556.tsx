// import React from 'react'
// import Image from '../../assets/Images/Background_image.jpg'


// const HeroSection = () => {
//     return (
//         <section className="h-screen min-w-full flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Image})` }}>
//             <div className='flex flex-col items-center justify-between h-[max(45%,300px)] text-center '>
//                 <div className='flex flex-col items-center justify-center gap-3'>
//                     <h1 className='text-[4.8rem] text-gray mb-4 font-poppins font-bold leading-snug w-[20ch]'>
//                         Eat  Smart and Stay Healthy with <span className='text-[rgba(255,142,115,1)]'> NutriDzair</span>
//                     </h1>
//                     <div className='text-2xl px-[100px] text-gray font-poppins font-semibold leading-normal w-[677px] text-center'>
//                         Find meals tailored to your taste, budget, and health goals-all in one place. Tell me what matters most to you, and I’ll find the
//                         <span className='text-[rgba(255,142,115,1)]'> perfect meal!</span>
//                     </div>
//                 </div>
//                 <button 
//                     onClick={() => navigate('/formhero')}
//                     className='text-2xl mt-8 px-8 py-6 bg-[rgba(76,175,80,1)] hover:bg-green-700 text-white font-semibold md:text-2xl rounded-full transition-all duration-300'>
//                     Get Started with NutriDzair
//                 </button>
                
//             </div>
//         </section>
//     )
// }

// export default HeroSection

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Image from '../../assets/Images/Background_image.jpg';

const HeroSection = () => {
    const navigate = useNavigate(); // Initialize navigate

    return (
        <section className="h-screen min-w-full flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Image})` }}>
            <div className='flex flex-col items-center justify-between h-[max(45%,300px)] text-center '>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <h1 className='text-[4.8rem] text-gray mb-4 font-poppins font-bold leading-snug w-[20ch]'>
                        Eat Smart and Stay Healthy with <span className='text-[rgba(255,142,115,1)]'> NutriDzair</span>
                    </h1>
                    <div className='text-2xl px-[100px] text-gray font-poppins font-semibold leading-normal w-[677px] text-center'>
                        Find meals tailored to your taste, budget, and health goals-all in one place. Tell me what matters most to you, and I’ll find the
                        <span className='text-[rgba(255,142,115,1)]'> perfect meal!</span>
                    </div>
                </div>
                <button 
                    onClick={() => navigate('../form1.tsx')} // Now works!
                    className='text-2xl mt-8 px-8 py-6 bg-[rgba(76,175,80,1)] hover:bg-green-700 text-white font-semibold md:text-2xl rounded-full transition-all duration-300'>
                    Get Started with NutriDzair
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
