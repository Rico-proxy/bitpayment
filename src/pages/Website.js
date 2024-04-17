import React, { useEffect } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import { BsFillTelephoneMinusFill } from "react-icons/bs";
import Card from '../components/Card'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from "react-scroll-to-top";
import Hero from '../components/Hero'
import Message from '../components/Message';
import { BiMessageDetail } from "react-icons/bi";
import { BsClock } from "react-icons/bs";

import PreventBackNavigation from '../components/PreventBackNavigation2';
const Website = () => {

  useEffect(() => {
    AOS.init({
      // Global settings:
      delay: 200, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: false, // whether animation should happen only once - while scrolling down
    });
  }, []);
  const handleContextMenu = (event) => {
    event.preventDefault();
  };
  return (
    <div className='pb-[100px] md:pb-0 overflow-hidden nocopy flex flex-col min-h-screen bg-[#0f1b39]' onContextMenu={handleContextMenu}>
      <PreventBackNavigation/>
    <Navbar />
      
      <div id='home' data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      >
      <Hero/>
      </div>
      <section className='flex flex-col space-y-6'>
      <main className='flex justify-center pt-10 md:pt-32 px-10 md:px-[80px]'>
            <div className='flex flex-col space-y-3'>
                   <div 
                   className="relative font-bold text-2xl text-white text-center pb-6">
                     LIVE MARKET
                  <div data-aos="fade-up" className="line"></div>
                </div>
                <div className='flex flex-col gap-6 md:flex md:flex-row md:gap-3 pt-10'>
                  <div data-aos="zoom-in-left">
                  <Card/>
                  </div>
                  
                  <div data-aos="zoom-in-left">
                  <Card/>
                  </div>

                  <div data-aos="zoom-in-right">
                  <Card/>
                  </div>

                  <div data-aos="zoom-in-right">
                  <Card/>
                  </div>
                   
                    
                </div>
            </div>
    </main>
    <main id='about' className='flex justify-center pt-40 px-10  md:p-[80px]'>
            <div className='flex flex-col'>
                   <div data-aos="fade-down" className="relative font-bold text-2xl text-white text-center">
                     ABOUT COMPANY
                  <div data-aos="fade-up" className="line"></div>
                </div>
                <div className='flex flex-col gap-8 md:flex md:flex-row md:gap-6  text-white   items-center pt-12'>
                            <div data-aos="zoom-in-left" className="space-y-8 md:w-3/5">
                      <h1 className="text-2xl md:text-5xl font-semibold ">About The Company</h1>
                      <div className='flex flex-col space-y-3'>
                      <p className='text-sm font-extralight '>
                      BitPay Payment Systems is a bitcoin payment service provider based in Atlanta, Georgia, United States. It was founded in May 2011 by Tony Gallippi and Stephen Pair and provides payment processing services for merchants using Bitcoin and Bitcoin Cash. BitPay Payment Systems has been authorized to operate in the United Kingdom and Canada by Joaquin Almide, a retired authority figure.
                      </p>
                      </div>
                      <div className='text-sm font-extralight pt-4'>
                      <p>We are a full-service subsidiary and franchise of BitPay Payment Systems, focused on Electronic Credit Union and Private Banking, Crypto Bitcoin Transfer. Our headquarters are located in Northern Ireland, United Kingdom, with a subsidiary office in Ontario, Canada. Our Board of Directors and Senior Executive team are experienced international bankers and crypto technology experts, with a reputation of the highest stature and extensive experience in running financial institutions.</p>
                      </div>
                      
                    </div>
                    
                    <div data-aos="zoom-in-right" className="flex justify-center bg-[#060911] p-4">
                    <video width="820" height="440" controls>
                        <source src="assets/about.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                </div>
            </div>
    </main>
    <main className='flex justify-center min-h-screen pt-32 px-10 md:pt-0 md:p-[80px]'>
            <div className='flex flex-col'>
                   <div data-aos="fade-down" className="relative font-bold text-2xl text-white text-center">
                     How it Works
                  <div data-aos="fade-up" className=" line"></div>
                </div>
                <div className='grid grid-cols-1 gap-10 pt-10 md:grid md:grid-cols-4 md:gap-6 md:pt-40 md:px-10 text-white'>
                    <div className='flex flex-col items-center text-center space-y-4'>
                      <div data-aos="flip-left" className='flex justify-center items-center w-20 h-20 bg-[#c62a88] rounded-full mb-4'>
                        <p className='text-2xl font-bold'>1</p>
                      </div>
                      <p className='text-xl font-bold'>Wallet</p>
                      <p className='px-4 font-extralight'>
                      Quickly manage and access your funds with our user-friendly digital wallet.
                      </p>
                    </div>
                    {/* Repeat the above div with slight variations for 2, 3, and 4 */}
                    <div  className='flex flex-col items-center text-center space-y-4'>
                      <div data-aos="flip-left" className='flex justify-center items-center w-20 h-20 bg-[#c62a88] rounded-full mb-4'>
                        <p className='text-2xl font-bold'>2</p>
                      </div>
                      <p className='text-xl font-bold'>Safe & Secure</p>
                      <p className='px-4 font-extralight'>
                      Your transactions are secured with advanced encryption and anti-fraud technology.


                      </p>
                    </div>
                    <div  className='flex flex-col items-center text-center space-y-4'>
                      <div data-aos="flip-right" className=' flex justify-center items-center w-20 h-20 bg-[#c62a88] rounded-full mb-4'>
                        <p className='text-2xl font-bold'>3</p>
                      </div>
                      <p className='text-xl font-bold'>Buy & Sell</p>
                      <p className='px-4 font-extralight'>
                      Instant transactions with competitive rates for all your buying and selling needs.
                      </p>
                    </div>
                    <div  className='flex flex-col items-center text-center space-y-4'>
                      <div data-aos="flip-right" className=' flex justify-center items-center w-20 h-20 bg-[#c62a88] rounded-full mb-4'>
                        <p className='text-2xl font-bold'>4</p>
                      </div>
                      <p className='text-xl font-bold'>Flexibility</p>
                      <p className='px-4 font-extralight'>
                      Choosese how you pay with our adaptable payment solutions and multi-currency support.
                      </p>
                    </div>
                  </div>

            </div>
    </main>
    <platform id="services" className='min-h-screen pt-20 px-[10px] md:p-[80px]'>
      <div className='flex flex-col'>
                      <div data-aos="fade-down" className="relative font-bold text-2xl text-white text-center">
                            PLATFORM
                          <div data-aos="fade-up" className=" line"></div>
                        </div>
                   <div className='grid grid-cols-1 gap-[60px] md:grid md:grid-cols-2 md:gap-8 pt-20'>
                    <div data-aos="fade-zoom-in-left"  className='px-10 md:px-0 flex flex-col space-y-3'>
                          <div className='text-white md:text-2xl font-bold'>
                              <h1>
                              Prime Banking: Redefining Personalized Financial Excellence
                              </h1>
                          </div>
                          <div className='text-white font-light text-sm'>
                            <p>
                            
                            At our company, we are proud to offer comprehensive global Foreign Exchange (Forex) services that cater to a diverse clientele. Our expertise extends across a vast array of products, ensuring that we can meet a wide range of financial trading needs. From multinational corporations to individual investors, our clients enjoy access to the currency markets, allowing them to trade in a multitude of currencies.
                            </p>
                          </div>
                          <div className='pt-10 flex flex-col space-y-10'>
                                <div className='flex space-x-3 tet-center items-center text-white'>
                                    
                                      <div className=''>
                                          <p className='font-extralight text-[14px]'>Prime Banking is a bespoke financial service tailored for the discerning client who seeks more than just a transactional relationship with their financial institution. It represents the pinnacle of personalized banking, offering clients an exclusive gateway to a suite of premium products, dedicated service, and financial expertise.

                                          As part of our Prime Banking package, clients receive unparalleled attention from a dedicated Relationship Manager—a financial confidant equipped to provide expert advice and customized solutions that align with each client’s unique financial aspirations. The Relationship Manager serves as a single point of contact, ensuring a seamless and cohesive banking experience.</p>
                                      </div>
                                </div>
                             
                                
                                
                          </div>

                    </div>
                    <div data-aos="zoom-in-right" className="px-10 md:px-0 flex justify-center md:animate-[bounce_8s_ease-in_infinite]">
                      <img
                        src="/assets/platform.png"
                        alt="Digital Currency"
                        width={550}
                        height={200}
                        
                      />
                    </div>

            </div>
            <div data-aos="zoom-in-right" className='grid grid-cols-1 gap-[60px] md:grid md:grid-cols-2 md:gap-8 pt-20'>
                    <div className='md:order-2 px-10 md:px-0 flex flex-col space-y-3'>
                          <div className='text-white md:text-2xl font-bold'>
                              <h1>Private Banking: Exclusive Financial Stewardship for the Affluent Individual</h1>
                          </div>
                          <div className='text-white font-light text-sm'>
                            <p>
                            We provide personal attention from a dedicated Private Banker who is focused on you and your goals.
                            </p>
                          </div>
                          <div className='flex flex-col space-y-3'>
                                <div className='flex space-x-3 tet-center items-center text-white'>
                                      <div className=''>
                                          <p className='font-extralight text-[14px]'>Private Banking stands as the epitome of bespoke financial services, catering exclusively to the needs of high-net-worth individuals who require a more intimate and proactive approach to wealth management. This elite banking division is dedicated to providing a confidential and highly personalized experience, ensuring that each client's financial and lifestyle preferences are not just met, but exceeded.

                                        Our Private Banking clients are assigned a dedicated Wealth Manager, who acts as a trusted advisor and an extension of the client's financial conscience. This partnership is built on the foundations of discretion, expertise, and a deep understanding of the nuances of wealth. The Wealth Manager ensures a comprehensive assessment of the client's financial health, crafting strategies that span investment management, estate planning, tax optimization, and philanthropic endeavors.</p>
                                      </div>
                                </div>
                             
                                
                                
                          </div>

                    </div>
                    <div data-aos="zoom-left-left" className="order-1 px-10 md:px-0 flex justify-center md:animate-[bounce_6s_ease-in_infinite]">
                      <img
                        src="/assets/trader-img.png"
                        alt="Digital Currency"
                        width={550}
                        height={200}
                        className='responsive-image'
                      />
                    </div>

            </div>
      </div>
    </platform>
   
    <token className="min-h-screen pt-20 px-[10px] md:p-[80px]">
      <div className='flex flex-col'>
      <div data-aos="fade-down" className="pb-14 md:pb-0 font-bold text-2xl text-white text-center">
                            TOKEN
                          <div data-aso="fade-up" className=" line"></div>
                        </div>
                <div className='grid grid-cols-1 gap-6 md:grid md:grid-cols-2 md:pt-36'>
                  <div data-aos="zoom-in-left" className='flex flex-col text-center'>
                    <h1 className="md:text-2xl text-white md:mb-10  font-bold">Token Distribution</h1>
                  <div className="md:pt-20 px-5 md:px-0 flex justify-center md:animate-[bounce_8s_ease-in_infinite]">
                      <img
                        src="/assets/chat1.png"
                        alt="Digital Currency"
                        width={450}
                        height={200}
                        
                      />
                    </div>
                  </div>
               
                  <div data-aos="zoom-in-right" className='flex flex-col text-center'>
                    <h1 className="md:text-2xl text-white md:mb-10  font-bold">Fund Distribution</h1>
                  <div className="md:pt-20 px-5 md:px-0 flex justify-center md:animate-[bounce_8s_ease-in_infinite]">
                      <img
                        src="/assets/chat2.png"
                        alt="Digital Currency"
                        width={450}
                        height={200}
                        
                      />
                    </div>
                  </div>
            </div> 
      </div>


           
    </token>
      </section>
   
   
    
    
     <contact id="contact" data-aos="fade-down" className="bg-cover"  style={{
      backgroundImage: "url('assets/map.png')",
      
    }}>
              <div className="h-[60v] md:min-h-screen pt-10 md:pt-[200px]  w-full md:h-full flex  justify-center items-center bg-black/70
          backdrop-brightness-75 ">
          
          <div className="grid grid-cols-1 md:grid md:grid-cols-2 md:gap-32 text-white   ">
            <div data-aos="zoom-in-left" className="space-y-8 px-6">
              <h1 className="md:text-4xl font-bold tracing-widest">Contact Bitpay Payment Systems</h1>
             
              <div className=' font-extralight flex flex-col space-y-4'>
                  <p>
                  We at Bitpay Payment Systems Limited are dedicated to providing you with exceptional service and support. Whether you have questions about our payment solutions, need assistance with transactions, or require technical support, our team is here to help.


                  </p>
                  <p>
                  Reach out to us through any of the following channels:
                    </p>

                    <p>
                    Email: Drop us an email <span className='font-bold '>support@bps-ca.com</span><br/>
                    and we'll get back to you promptly.
                    </p>
                    <p>
                    Office Visit:  Unit 3, 21 Botanic Avenue, Belfast,
                        Northern Ireland, BT7 1JJ
                        United Kingdom
                    </p>
              </div>
            
              
            </div>
            <div data-aos="zoom-in-right" className='text-white pb-10'>
              <h1 className='flex justify-center text-xl font-bold md:text-2xl pt-10 md:pt-0 pb-2 md:pb-4'>Contact Us</h1>
                 <Message/>
            </div>
            
          </div>
          </div>        
     </contact>
     <footer className='pt-10   md:h-[60vh] bg-[#0f1b39] px-6 text-white'>
        <div className='grid grid-cols-1 md:grid md:grid-cols-3 py-5 gap-10'>
            <div className='flex flex-col justify-between'>
                  <div className='text-xl md:text-2xl font-bold'>
                    <h1>Bitpay Payment Systems</h1>
                  </div>
                  <div className='flex flex-col space-y-4 pt-6 font-extralight'>
                      <span className="">
                        <FaMapMarkerAlt className='inline-block mr-2'/>
                        Unit 3, 21 Botanic Avenue, Belfast,
                        Northern Ireland, BT7 1JJ
                        United Kingdom
                      </span>
                      <span>
                        <BsFillTelephoneMinusFill  className='inline-block mr-2'/>
                        Tel: +44 744 0356156
                      </span>
                      <span>
                        <BiMessageDetail  className='inline-block mr-2'/>
                        support@bps-ca.com
                      </span>
                      <span>
                        <BsClock  className='inline-block mr-2'/>
                        Bank Hours: 8AM – 5PM
                      </span>
                     
                  </div>
            </div>
            <div className='flex flex-col justify-between'>
                  <div className='text-xl md:text-2xl font-bold'>
                    <h1>Corresponnding Address</h1>
                  </div>
                  <div className='flex flex-col space-y-4 pt-6 font-extralight'>
                      <span>
                        <FaMapMarkerAlt className='inline-block mr-2'/>
                        157 Adelaide Street West, Ste 408,
                        Toronto, Canada, M5H 4E7
                      </span>
                      <span>
                        <BsFillTelephoneMinusFill  className='inline-block mr-2'/>
                        Tel: Tel: +1 (437) 524-6861
                      </span>
                      <span>
                        <BiMessageDetail  className='inline-block mr-2'/>
                        support@bps-ca.com
                      </span>
                      <span>
                        <BsClock  className='inline-block mr-2'/>
                        Bank Hours: 8AM – 5PM
                      </span>
                     
                  </div>
            </div>
            <div className='flex flex-col space-y-4'>
                  <div className='text-xl md:text-2xl font-bold'>
                    <h1>Policies</h1>
                  </div>
                  <div className='flex flex-col space-y-4 pt-2 font-extralight'>
                      <span>
                        <Link to='/cookies' className='hover:text-[#c62a88]'>Cookies Policy</Link>
                      </span>
                      <span>
                        <Link to='/privacy' className='hover:text-[#c62a88]'>Legal Policy</Link>
                      </span>
                      <span>
                        <Link to='/policy' className='hover:text-[#c62a88]'>Privacy Policy</Link>
                      </span>
                    
                     
                  </div>
            </div>
        </div>
        <div className='font-extralight'>
          <div className='grid grid-cols-1 gap-4 border-t pt-10 md:grid md:grid-cols-3 md:gap-10 text-sm '>
          <div><span className='font-bold'>©</span> Bitpay Payment Systems 2024</div>
          <div>
            <Link to='https://find-and-update.company-information.service.gov.uk/officers/TAHU7mM7Vk0jvcKaDWjfqin2CBc/appointments'>Link to View Registered Link in Uk</Link></div>
            <div>
            <Link to='https://find-and-update.company-information.service.gov.uk/company/NI648425' className=''>Link to view Corresponndence Link in Canada</Link>
          </div>
          </div>
          
               
        </div>
     </footer>
    
     <ScrollToTop
  smooth
  viewBox="0 0 19 20"
  svgPath="M329.277 616c-.582 0-1.055.448-1.055 1v2c0 .552.473 1 1.055 1 .583 0 1.055-.448 1.055-1v-2c0-.552-.472-1-1.055-1zm-1.055-6.657c0 .553.473 1 1.055 1 .583 0 1.055-.447 1.055-1v-5.136c0-.446.706-.669 1.039-.354l1.844 1.683c.412.39 1.142.39 1.554 0a.962.962 0 0 0 .003-1.414l-3.732-3.537a2.194 2.194 0 0 0-2.983 0l-.378.356-3.363 3.18c-.412.391-.426 1.025-.013 1.415a1.062 1.062 0 0 0 1.465 0l1.69-1.681c.333-.315.764-.092.764.354v5.134zm14.545 4.993l-4.134 2.157a1.086 1.086 0 0 1-1.33-.119.966.966 0 0 1 .137-1.517l1.258-.857h-8.964c-.583 0-1.058-.427-1.058-.98 0-.71.678-.979 1.05-.979l5.316-.008.405-4.317c.337-.957 1.287-1.527 2.331-1.329l3.75.332c.986.187 1.467 1.008 1.467 1.961v4.835c0 .329.058.634-.228.821z"
/>



    </div>
  )
}

export default Website