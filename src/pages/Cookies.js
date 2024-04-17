import React from 'react'
import Navbar from '../components/Navbar'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsFillTelephoneMinusFill } from 'react-icons/bs'
import { BiMessageDetail } from 'react-icons/bi'
import { BsClock } from 'react-icons/bs'
import ScrollToTop from 'react-scroll-to-top'
import { Link } from 'react-router-dom'

const Cookies = () => {
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
                <h1 className='text-white  text-3xl '>GDPR COMPLIANT NOTIFICATION</h1>
                <div className='space-x-2 flex flex-row text-white md:space-x-4 text-[13px]'>
                    <Link to='/'>Home</Link>
                    <Link to='/'>BITPAYMENT SYSTEMS</Link>
                    <Link to=''>COOKIES</Link>
                </div>

            </div>
        </header>
        <section className='px-6 flex flex-col space-y-6 pt-20 md:px-20 pb-6'>
                <div className='font-light'>
                    <p>
                    If you register your email with us and give your consent to receive information from us. We will only send relevant and time-sensitive information on our products, services, thought leadership, industry newsletters and invitations to our events (‘collectively known as marketing material’), We have updated to our Privacy Policy to reflect the new requirements set forth in General Data Protection Regulation (GDPR) 2016/679, a regulation in EU law on data protection and privacy for all individuals within the European Union and the European Economic Area.
                    </p>
                </div>
                
                <div className='flex flex-col'>
                    <p className='font-bold'>Choice & Opt Out:</p>
                    <p>
                    We communicate with Clients who subscribe to our services on a regular basis via email, and we also communicate by phone to resolve customer complaints or investigate suspicious activity transactions. We may use your email address to confirm your opening of an account, to send you notice of payments, to send you information about changes to our products & services, and to send notices and disclosures as required by law. In most cases, users cannot opt-out of these communications, but they will be primarily informational in nature rather than promotional. We provide you with the opportunity to exercise an opt-out choice if you do not want to receive other types of communication from us such as emails or updates from us regarding new services and products offered on this website.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-bold'>Email:</p>
                    <p>
                    You can choose not to receive any more email messages at any time. Based on how your email is set up, information about you may be transmitted automatically when you send an email to Support@bps-ca.com
                    </p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-bold'>Use of Cookies:</p>
                    <p>
                    When you visit the website, BITPAYMENT SYSTEMS places a "cookie" on the hard drive of your computer to track your visit. A cookie is a small data file that is transferred to your hard drive through your web browser that can only be read by the website that placed the cookie on your hard drive. The cookie acts as an identification card and allows our website to identify you and to record your preferences. The cookie allows us to track your visit to the website so that we can better understand your use of our website so that we can customize and tailor the website to better meet your needs. Most web browsers are set to accept cookies. However, on most web browsers you may change this setting to have your web browser either: (1) notify you prior to a website placing a cookie on your hard drive so that you can decide whether or not to accept the cookie; or (2) automatically prevent the placing of a cookie on your hard drive. It should be noted that if cookies are not accepted, you may not be able to access some of the web pages found on the website.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-bold'>Inquiries and Updating:</p>
                    <p>
                    We need your help in keeping the personal data you have shared with us accurate and up to date. If you are a registered user, you may make these updates through your account or by sending an email to info@bitpaypaymentsystems.com.
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

export default Cookies