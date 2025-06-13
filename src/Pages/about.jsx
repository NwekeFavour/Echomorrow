import React from 'react';
import Navbar from '../components/user/navbar';
import List from '../components/List';
import Footer from '../components/footer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function About(props) {
    return (
        <div>
            <Navbar/>
            <div className='divabout flex items-center'>
                <div className=''>
                    <div className='md:ps-10 sm:ps-8 ps-5'>
                        <p className="m-0  text-lime-100 font-bold md:text-[50px] lg:text-[60px] sm:text-[26px] text-[24px]">About Us</p>
                        <p className="m-0  text-lime-100">At EchoToTomorrow, we believe that every person carries a story worth preserving, not just<br/> for the world, but for themselves.</p>
                    </div>
                </div>
            </div>
            <div className='flex my-3 justify-center'>
                <div className='md:w-[70%] md:my-5 text-center'>
                    <p className="m-0 md:text-[20px] text-lime-950 sm:text-[18px] text-[16px]">We created this platform as a digital time capsule, a place where you can pause, reflect, and speak to the person you’re becoming. Whether you’re filled with hope, uncertainty, ambition, or even doubt, your words matter. And your future self deserves to hear them.</p>
                </div>
            </div>
            <div>
                <div className='mx-5'>
                    <p className="m-0 md:text-[40px]  sm:text-[30px] text-[28px] text-center text-lime-950">Why We Built This?</p>
                    <p className="m-0 text-lime-950">Life moves fast. In chasing dreams, overcoming struggles, or simply surviving the day, it’s easy to lose sight of how far you've come.</p>
                    <div>
                        <p className="m-0 mb-6 text-lime-950">We wanted to build a space where:</p>
                        <List/>
                    </div>
                    <div className='flex justify-end md:my-5 my-3'>
                        <p className="m-0 text-lime-950">
                            Because reflection isn’t a luxury, it’s a tool for growth.
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-black my-4 p-5'>
                <div>
                    <p className="m-0 md:text-[40px]  sm:text-[30px] text-[28px] text-start ps-5 text-lime-50">Our Vision</p>
                    <p className='m-0 text-justify text-lime-50'>Our vision is to create a meaningful space where individuals can pause, reflect, and connect with themselves by writing letters to their future selves. We aim to empower people to document their thoughts, dreams, and intentions in the present, and rediscover them in the future as reminders of growth, resilience, and purpose. Through this platform, we hope to foster self-awareness, emotional clarity, and a deeper sense of personal journey over time.</p>
                </div>
                <div>
                    <p className="m-0 md:text-[40px]  sm:text-[30px] text-[28px] text-start ps-5 text-lime-50">FAQ</p>
                    <div>
                        <Accordion className='my-2'>
                            <AccordionSummary
                            className='!bg-lime-50'
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography component="span">What is this platform about?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                It's a digital space where you can write and schedule a letter to your future self — for a month, a year, or even a decade from now.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='my-2'>
                            <AccordionSummary
                            className='!bg-lime-50'
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography component="span">Is my letter private?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Yes. All letters are completely private by default. Only you can access and read them unless you choose to make them public or share them.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='my-2'>
                            <AccordionSummary
                            className='!bg-lime-50'
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography component="span">How will I receive my letter in the future?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Your letter will be delivered via email (or in-app notification, if enabled) on the date you selected when writing it.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='my-2'>
                            <AccordionSummary
                            className='!bg-lime-50'
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography component="span">Can I edit or delete my letter after writing it?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Yes, you can edit or delete a letter as long as it hasn't been sent yet. You’ll find these options in your dashboard.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
                <Footer/>
        </div>
    );
}

export default About;