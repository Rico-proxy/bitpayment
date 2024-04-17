import React from 'react'
import Navbar from '../components/Navbar'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsFillTelephoneMinusFill } from 'react-icons/bs'
import { BiMessageDetail } from 'react-icons/bi'
import { BsClock } from 'react-icons/bs'
import ScrollToTop from 'react-scroll-to-top'
import { Link } from 'react-router-dom'

const Legal = () => {
  return (
    <div className='min h-screen'>
        <header className='bg-black h-[30vh] flex flex-col justify-around'>
           <div>
           <Navbar/>
            </div>
            <div className='px-6 flex flex-col space-y-3 md:px-20 md:flex md:flex-row md:justify-between md:items-center'>
            <div className="pb-5 text-[17px] font-bold md:hidden flex-col">
                <img
                src="/assets/logo.svg"
                alt="Digital Currency"
                width={150}
                height={150}
                />
                <div>
                <p className="text-white italic">Payment Systems</p>
                </div>
            </div>
                <h1 className='text-white  text-3xl '>Legal Notice</h1>
                <div className='space-x-2 flex flex-row text-white md:space-x-4 text-[13px]'>
                    <Link to='/'>Home</Link>
                    <Link to='/'>BITPAYMENT SYSTEMS</Link>
                    <Link to=''>Legal</Link>
                </div>

            </div>
        </header>
        <section className='px-6 flex flex-col space-y-6 pt-20 md:px-20 pb-10'>
                <div className='font-light'>
                    <p>
                    The information contained in this website is for general guidance on matters of interest only. The application and impact of laws can vary widely based on the specific facts involved. Given the changing nature of laws, rules and regulations, and the inherent risks of electronic communication, there may be delays, omissions or inaccuracies in information in this website.
                    </p>
                </div>
                
                <div className='flex flex-col'>
                  
                    <p>
                    ©2019 BITPAYMENT SYSTEMS - All rights reserved. Unless otherwise noted, “BITPAY PAYMENT SYSTEMS” and all other marks used in this presentation are trademarks of Bitpay Payment Systems (Panama), S.A. (the “Company”). Any reproduction or dissemination of any feature of this presentation, in whole or in part, or any use of this presentation for any unlawful purposes, is strictly prohibited. The information provided on this website is provided solely for general knowledge purposes. This website is not intended to be a comprehensive review of all matters and developments concerning the Company. The Company assumes no responsibility for its completeness, accuracy and currency. Although information used on this website is believed to be accurate as at the date hereof, it may not be accurate when read. The Company does not undertake to update any of the information provided in this presentation. For current information please contact the Company.
                    </p>
                </div>
                <div className='flex flex-col'>
                    
                    <p>
                    THIS WEBSITE IS PROVIDED “AS IS” WITHOUT ANY EXPRESS OR IMPLIED WARRANTY OF ANY KIND, INCLUDING WARRANTIES OF MERCHANTABILITY, NONINFRINGEMENT OF INTELLECTUAL PROPERTY, OR FITNESS FOR ANY PARTICULAR PURPOSE. IN NO EVENT SHALL THE COMPANY, ITS DIRECTORS, OFFICERS OR EMPLOYEES BE LIABLE FOR ANY DAMAGES WHATSOEVER (INCLUDING, WITHOUT LIMITATION, DAMAGES DUE TO LOSS OF PROFITS OR BUSINESS INTERRUPTION) DUE TO THE READER’S USE OF THIS PRESENTATION.
                    </p>
                </div>
                <div className='flex flex-col'>
                  
                    <p>
                    This website is not to be construed as an offer to sell, or a solicitation of an offer to buy securities of the Company. An offer to sell, or a solicitation of an offer to buy securities of the Company can only be made by a broker-dealer registered in all jurisdictions in which such an offer is being made and only if such offer is otherwise made in accordance with all applicable securities laws, regulations, and rules of any kind whatsoever. The information in this presentation is not intended in any way to qualify, modify or supplement any prospectus or other information disclosed under the corporate and securities legislation of any jurisdiction applicable to the Company. No securities commission has in any way passed on any of the information contained on this website. The Company has provided links from this website to several other websites which are arms-length to the Company. The viewer should be aware that in linking to these outside websites, he or she is leaving the Company’s website and that the Company is not responsible for the content of any other website. 
                    </p>
                </div>
                
              
        </section>
        <footer className='pt-10   md:h-[60vh] bg-[#0f1b39] px-20 text-white'>
        <div className='grid grid-cols-1 md:grid md:grid-cols-3 py-5 gap-10'>
            <div className='flex flex-col justify-between'>
                  <div className='text-xl md:text-2xl font-bold'>
                    <h1>BitPayment Systems</h1>
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
                        Tel: +1 437524-6861
                      </span>
                      <span>
                        <BiMessageDetail  className='inline-block mr-2'/>
                        Support@bps-ca.com
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
                        <Link to='/cookies' className='hover:text-black'>Cookies Policy</Link>
                      </span>
                      <span>
                        <Link to='/legal' className='hover:text-black'>Legal Policy</Link>
                      </span>
                      <span>
                        <Link to='/policy' className='hover:text-black'>Privacy Policy</Link>
                      </span>
                    
                     
                  </div>
            </div>
        </div>
        <div className='font-extralight'>
          <div className='grid grid-cols-1 gap-4 border-t pt-10 md:grid md:grid-cols-3 md:gap-10 text-sm '>
          <div><span className='font-bold'>©</span> BitPayment Systems  2024</div>
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

export default Legal