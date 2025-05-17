import React from 'react'
import AboutPlate from '../../assets/images/AboutPlate.png'
import Rectangle from '../../assets/images/Rectangle.png'
import GreenFloatingLeaves1 from '../../assets/images/GreenFloatingLeaves1.png'
import GreenFloatingLeaves2 from '../../assets/images/GreenFloatingLeaves2.png'
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
    const navigate = useNavigate();
    return (
        <section className='h-[120dvh] min-w-full flex bg-[#ffffff] items-center justify-center p-10'>
            <div className='flex flex-col items-center justify-between h-[80%] text-center gap-20'>
                <h1 className='text-[4.8rem] text-[rgba(85,85,85,1)] mb-4 font-poppins font-bold leading-snug w-[20ch]'>
                    About NutriDzair
                </h1>

                <div className='relative w-screen h-fit overflow-visible flex items-center justify-center'>
                    <img
                        src={Rectangle}
                        alt="Rectangle"
                        className='absolute w-[75%] -top-[0px] h-[500px] object-cover z-[1]'
                    />
                    <div className='relative w-[80dvw]  flex items-center justify-between gap-3  p-10 z-[2]'>
                        <div className='relative flex items-center justify-center'>
                            <img
                                src={AboutPlate}
                                alt="About Plate"
                                className='w-[450px] h-auto'
                            />
                            <img
                                src={GreenFloatingLeaves1}
                                alt="Green Floating Leaves 1"
                                className='absolute w-[250px] h-auto top-0 right-0'
                            />
                            <img
                                src={GreenFloatingLeaves2}
                                alt="Green Floating Leaves 2"
                                className='absolute w-[200px] h-auto bottom-0 left-0'
                            />
                        </div>

                        <div className='flex flex-col items-center text-left'>
                            <p className='text-2xl px-[50px] text-[rgba(153,153,153,1)] font-poppins font-semibold leading-normal w-[max(70ch)] mb-4'>
                                <span className='text-[rgba(255,142,115,1)]'>NutriDzair</span> is your AI-powered food companion, designed to help Algerian households make healthier, more balanced meal choices without compromising on taste. Whether you’re craving a traditional Algerian dish or looking for a nutrient-packed meal to fit your goals, <span className='text-[rgba(255,142,115,1)]'>NutriDzair</span> curates the best options for you.
                            </p>
                            <p className='text-2xl px-[50px] text-[rgba(153,153,153,1)] font-poppins font-semibold leading-normal w-[max(70ch)] mb-4'>
                                Get quick, clear details about the nutritional value of every meal so you always make an informed choice.
                                Eat smarter, enjoy more, and discover meals that fit your lifestyle—only with <span className='text-[rgba(255,142,115,1)]'>NutriDzair</span>!
                            </p>

                            <button className='text-2xl mt-8 px-8 py-6 bg-[rgba(76,175,80,1)] hover:bg-green-700 text-white font-semibold md:text-2xl rounded-full transition-all duration-300'
                            onClick={() => navigate('/meal-planner')}>
                                Get Started with NutriDzair
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection