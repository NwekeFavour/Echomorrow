import React from 'react';
import Navbar from '../components/user/navbar';
import Career from '../../public/img/hero.webp'
import Writer from '../../public/img/Writer.svg'
import Calendar from '../../public/img/calendar.svg'
import Reflect from '../../public/img/reflect.svg'
import Working from '../../public/img/working.svg'
import Button from '@mui/material/Button';
import Quote from '../components/quote';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
function Home(props) {
    return (
        <div>
            <Navbar/>
            <div className="lg:ms-17 sm:ms-6 xl:ms-20 lg:mt-5 md:mt-4 sm:mt-3 md:ms-14 sm:flex gap-5 items-center justify-between">
                <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0"  className="sm:hidden mx-20 flex justify-center my-7">
                    <img className="w-[300px] lg:h-[452.66px]" src={Career} alt="career-progress-img" />
                </div>
                <div className="lg:w-[40%] sm:mx-0 mx-10 md:w-[50%]">
                    <p className="m-0 xl:text-[52.6px] lg:text-[50.5px] md:leading-[50px] lg:leading-[60px] md:text-[40px] sm:text-[30px] font-bold">Write a Letter to the Future You</p>
                    <p className="m-0 lg:mt-4 md:mt-3 mt-2">Preserve a moment, a dream, or a feeling, and let your future self rediscover it. Send a message across time, to be delivered on the date you choose.</p>
                    <div className="md:mt-4 sm:mt-3 mt-2 ">
                        <Link to={"/write-a-letter"} className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary !text-gray-200 w-full !bg-black sm:!px-7 md:py-2 py-2 lg:py-3 md:!px-10 css-1uent87-MuiButtonBase-root-MuiButton-root inline-flex items-center justify-center no-underline">Write A Letter</Link>
                    </div>
                </div>
                <div className="sm:flex hidden">
                    <img className="xl:w-[846px] lg:w-[700px] md:w-[500px] lg:h-[592.66px]" src={Career} alt="career-progress-img" />
                </div>
            </div>
            <div className="div my-3 flex items-center justify-center">
                <div className="flex sm:w-[500px] items-center justify-center">
                    <p className="m-0 lg:text-[26px] sm:text-[20px] text-[18px] italic break-words   text-wrap text-center text-lime-100">
                        Writing a letter to your future self is a powerful way to reflect on your journey and stay connected to your goals.
                    </p>
                </div>
            </div>
            <div className="md:mt-20 mt-14 sm:mt-18">
                <div data-aos="fade-up">
                    <p className="m-0 xl:text-[40px] text-[25px] lg:text-[35px] md:text-[32px] sm:text-[28px] text-center">How It Works?</p>
                </div>
                <div className="md:mt-5 lg:mx-26 mx-10 md:mx-24 sm:mx-20 xl:mx-30">
                    <div className="flex gap-10 md:my-0 mt-2 items-center justify-between">
                        <div>
                            <p className="m-0 xl:text-[42.9px] text-[20px] leading-[30px] lg:text-[38px] md:text-[32px] sm:text-[26px]  xl:tracking-[7px] xl:leading-[50px]">Write Your Personal Letter.</p>
                        </div>
                        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                            <img className="xl:w-[450px] w-[220px] lg:w-[400px] md:w-[350px] sm:w-[258px] md:h-[300px] xl:h-[492px]" src={Writer} alt="writer-img" />
                        </div>
                    </div>
                    <div className="flex gap-10 md:my-0 my-6 items-center justify-between" > 
                        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                            <img className="xl:w-[450px] w-[220px] lg:w-[400px] md:w-[350px] sm:w-[258px] md:h-[300px] xl:h-[492px]" src={Calendar} alt="calendar-img" />
                        </div>
                        <div>
                            <p className="m-0 xl:text-[42.9px] leading-[30px]  text-[20px] lg:text-[38px] md:text-[32px] sm:text-[26px] xl:tracking-[7px] xl:leading-[50px]">Set a future delivery date.</p>
                        </div>
                    </div>
                    <div className="flex gap-10  md:my-0 my-6 items-center justify-between">
                        <div>
                            <p className="m-0 text-[20px] leading-[30px]  xl:text-[42.9px] lg:text-[38px] md:text-[32px] sm:text-[26px] xl:tracking-[7px] xl:leading-[50px]">Relax, we’ll deliver it to your inbox.</p>
                        </div>
                        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                            <img className="xl:w-[450px] w-[220px] lg:w-[400px] md:w-[350px] sm:w-[258px] md:h-[300px] xl:h-[492px]" src={Working} alt="working-img" />
                        </div>
                    </div>
                     <div className="flex gap-10  md:my-0 my-6 items-center justify-between">
                        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                            <img className="xl:w-[450px] w-[220px] lg:w-[400px] md:w-[350px] sm:w-[258px] md:h-[300px] xl:h-[492px]" src={Reflect} alt="reflect-img" />
                        </div>
                        <div>
                            <p className="m-0 text-[20px] leading-[30px]  xl:text-[42.9px] lg:text-[38px] md:text-[32px] sm:text-[26px] xl:tracking-[7px] xl:leading-[50px]">Reflect when you receive it.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-5'>
                <Quote />
            </div>
            <div data-aos="fade-in" className='div mb-6 flex justify-center items-center'>
                <div className=''>
                    <div className='flex items-center justify-center'>
                        <p className="text-lime-100 m-0 lg:text-[42.9px] md:text-[35px] sm:text-[30px] text-[25px]">Ready to talk to the future you?</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <p className="text-lime-100 m-0">Include a CTA button: <Link className='bg-gray-100 px-3 rounded-[20px] py-2 border-3 text-black'><code>Start Writing</code></Link> </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;