import React from 'react';
import Navbar from '../components/user/navbar';

function Contact(props) {
    return (
        <div>
            <Navbar/>
            <div className='divabout flex items-center'>
                <div className=''>
                    <div className='md:ps-10 sm:ps-8 ps-5'>
                        <p className="m-0  text-lime-100 font-bold md:text-[50px] lg:text-[60px] sm:text-[26px] text-[24px]">Contact Us</p>
                        <p className="m-0  text-lime-100">We’d love to hear from you! Whether you're curious about how the platform works, need help sending your letter,<br/> or want to share your story, our inbox is always open.</p>
                    </div>
                </div>
            </div>
            <div className='my-5'>
                <p className="text-center sm:text-[40px] text-lime-950 text-[30px] italic">"Your future self is waiting to hear from you."</p>
            </div>
            <div>
                <div className="p-4 mx-3 sm:mx-auto max-w-3xl rounded-lg border-gray-50 shadow-md dark:bg-white lg:p-8">
                    <form>
                        <div className="grid md:gap-8 md:grid-cols-2">
                            <div className="mb-6">
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-lime-950">First name</label>
                                <input required="" type="text" id="first_name" placeholder="John" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-lime-950">Last name</label>
                                <input required="" type="text" id="last_name" placeholder="Doe" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-lime-950">Email address</label>
                            <input required="" type="email" id="email" placeholder="john.doe@company.com" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-lime-950">Subject</label>
                            <input required="" type="text" id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Subject name" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-lime-950">Message</label>
                            <textarea required="" id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                        </div>
                        <div className="mb-6">
                            <div>
                                <div className="grecaptcha-badge" data-style="bottomright">
                                    <div className="grecaptcha-logo">
                                        <iframe title="reCAPTCHA" width="256" height="60" role="presentation" name="a-f5e5x8wpcw24" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcKn58eAAAAAFD-lFXQHCSkdJ9V76lq3KLyNygU&amp;co=aHR0cHM6Ly9mbG93Yml0ZS5jb206NDQz&amp;hl=en&amp;type=image&amp;v=GUGrl5YkSwpBsxsF3eY665Ye&amp;theme=light&amp;size=invisible&amp;badge=bottomright&amp;cb=3zzwwjnoovbo"></iframe>
                                    </div>
                                    <div className="grecaptcha-error"></div>
                                    <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" ></textarea>
                                </div>
                            </div>
                        </div>
                        <p className="mb-6 text-sm text-lime-950">By submitting this form you agree to our 
                            <a className="text-blue-600 dark:text-blue-500 hover:underline" href="/terms-and-conditions/">Terms &amp; conditions</a>
                            and our 
                            <a className="text-blue-600 dark:text-blue-500 hover:underline" href="/privacy-policy/">Privacy Policy</a>
                             which explains how we may collect, use and disclose your personal information including to third parties.
                        </p>
                        <button className="text-white font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center bg-lime-950" type="submit"><span className="flex justify-center items-center">Send message</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;