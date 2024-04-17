import React from 'react'
import Navbar from '../components/Navbar'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsFillTelephoneMinusFill } from 'react-icons/bs'
import { BiMessageDetail } from 'react-icons/bi'
import { BsClock } from 'react-icons/bs'
import ScrollToTop from 'react-scroll-to-top'
import { Link } from 'react-router-dom'

const Policy = () => {
  return (
    <div className='min h-screen  '>
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
                <h1 className='text-white  text-3xl '>Privacy Policy</h1>
                <div className='space-x-2 flex flex-row text-white md:space-x-4 text-[13px]'>
                    <Link to='/'>Home</Link>
                    <Link to='/'>BITPAYMENT SYSTEMS</Link>
                    <Link to=''>PRIVACY</Link>
                </div>

            </div>
        </header>
        <section className='px-6 flex flex-col space-y-6 pt-20 md:px-20 pb-6'>
                <div className='font-light'>
                    <p>
                    BitPayment Systems  is committed to respecting the privacy of visitors to its website and remains committed to ensuring its compliance under Bill No. 665 of August 20, 2017, which regulates the protection of personal data, was approved by the National Assembly on October 24, 2018 and is—at the time of this writing—awaiting the President’s approval in order to become law ("Draft Data Protection Law"). In compliance with these statutes, BitPayment Systems  has developed this Website Privacy Statement (the "Privacy Policy"), which applies to the personal information that is collected, used and disclosed on BitPayment Systems 's website.
                    </p>
                </div>
                <div className='font-normal'>
                    <p>
                    By using this website, you are consenting to the collection, use and disclosure of your personal information in accordance with the terms set out below. You may modify or withdraw your consent at any time, subject to legal or contractual restrictions and reasonable notice, by contacting our privacy officer in the manner set forth below.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-bold'>What is "personal information"?</p>
                    <p>
                    
                        For the purposes of this Privacy Policy, personal information means information in any form that can identify an individual and information about an individual, for example your name, address, phone number and email address. This does not include business contact information (such as an individual's name, title, business address, business phone and fax number) when such information is collected, used or disclosed for the purpose of business communications.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-bold'>What personal information do we collect?</p>
                    <p>
                    
                    We do not involuntarily collect any personal information of individuals. We collect and maintain personal information of visitors to this website only when it is submitted voluntarily, and even then, we are limited to the use of this information only for the purpose stated.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-bold'>When do we disclose personal information?</p>
                    <p>
                    
                    BitPayment Systems  never discloses personal information to third parties. Your personal information is used only for HOC purposes, to contact you or send you information about us. We may disclose your personal information to employees and contractors hired by us who may require such information to assist us in establishing, maintaining and managing our relationship with you. We automatically collect statistics about Internet service networks used to access our website, including the IP address and domain used to access our website, the type and version of your browsers, the website you came from to access our website, the page you entered and exited at, any website page that is viewed by that IP address and what country you are from. This information that is collected is used for a number of different purposes including tracking the number of visitors to the site, monitoring our website's performance, and for our business purposes such as working to continually upgrade our website.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-bold'>How do we use "cookies"?</p>
                    <p>
                    
                    When you visit the website, BitPayment Systems  places a "cookie" on the hard drive of your computer to track your visit. A cookie is a small data file that is transferred to your hard drive through your web browser that can only be read by the website that placed the cookie on your hard drive. The cookie acts as an identification card and allows our website to identify you and to record your preferences. The cookie allows us to track your visit to the website so that we can better understand your use of our website so that we can customize and tailor the website to better meet your needs. Most web browsers are set to accept cookies. However, on most web browsers you may change this setting to have your web browser either: (1) notify you prior to a website placing a cookie on your hard drive so that you can decide whether or not to accept the cookie; or (2) automatically prevent the placing of a cookie on your hard drive. It should be noted that if cookies are not accepted, you may not be able to access some of the web pages found on the website.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-bold'>How is your personal information protected?</p>
                    <p>
                    
                    BitPayment Systems  endeavours to maintain physical, technical and procedural safeguards that are appropriate to the sensitivity of the personal information in question. These safeguards are designed to prevent your personal information from loss and unauthorized access, copying, use, modification or disclosure. Unfortunately, data transmissions over the Internet are not 100% secure. As a result, while we strive to protect your personal information, we do not represent, warrant or guarantee that personal information will be protected against loss, misuse, interception or alteration and do not accept any liability for personal information submitted to us via the Internet, nor for your or any third parties' use or misuse of personal information. Any personal information you transmit to us will be at your own risk.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-bold'>Privacy policies of other websites.</p>
                    <p>
                    
                    BitPayment Systems  website may contain links to other websites that may be subject to less stringent privacy standards. We assume no responsibility for the privacy practices, policies or actions of the third parties that operate these websites. We are not responsible for how such third parties collect, use or disclose your personal information.
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

export default Policy