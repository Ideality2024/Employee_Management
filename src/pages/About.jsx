import React from 'react'
import './About.css';
import Admin from './Admin.jpg'
function About() {
  return (
    <div>
      <div className="Raj overflow-hidden">
        <div className="heading">
            <h1 className='text-orange-500 text-center mt-[35px] md:text-[55px] text-3xl'>
                About Us
            </h1>
        </div>
        <div className="container w-[95%] md:m-[65px] p-[15px] flex md:flex-row flex-col-reverse justify-center items-center shadow ">
            <div className="raj-content flex-1 md:w-[600px] m-[0px,25px] ">
                <h2 className='md:mb-[20px] mt-3 md:mt-0 text-[#333] md:text-[28px] text-lg'>Welcome to  E-krishak & Ideality company! We are dedicated to providing Website and Mobile Application Developoment to our customers.</h2>
                <h4>
                    Welcome to our organization, a dynamic and innovative company that brings together the worlds of Research and Development (R&D) and E-commerce. Our passion for discovery, cutting-edge technology, and customer-centric experiences drives our commitment to creating a meaningful impact in both industries.
                </h4>
                <p className='md:text-[20px] mt-3 md:mt-0 leading-1.5 text-[#666] '>E Krishak is an e-commerce and Research & Development organization, which designs and develops mobile applications, websites and IoT based electronics solutions for various sectors like agriculture, home automation, robotics etc.

                    Our e-commerce platform is designed keeping in mind the needs of farmers and retailers, providing a user friendly interface to sell agriculture products online from the home of farmers or online agriculture by retailers from home Buying products makes all these complex processes very easy. Here is a great option to buy and sell a variety of agricultural products and high quality agricultural products such as vegetables, fruits, grains and dairy products!</p>
                <button className="text-white p-1 cta-button inline-block bg-orange-500 md:p-[12px,24px] rounded text-[20px]  mt-2 border-none cursor-pointer duration-0.3s ease-in hover:bg-orange-500 scale-[1.1] " id="toggleButton">Show More</button>
                <div className="moreInfo block mt-[20px]">
                    <h2>Our Mission</h2>
                    <p>At our organization, we envision a future where cutting-edge technologies and sustainable practices coexist harmoniously to transform agricultural farmer's and improve lives. Through our R&D initiatives, we seek to pioneer innovative solutions that address global challenges and promote a sustainable future for generations to come.

                        In the realm of E-commerce, our vision is to be a trailblazer in delivering exceptional customer experiences. We strive to redefine the way farmer's and trader's sell and buy online agricultural products, offering convenience, reliability, and a diverse selection of products that cater to various interests and lifestyles.</p>
        
                    <h2>Our Team</h2>
                    <p>We have a talented and passionate team dedicated to achieving our goals. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
                </div>
            </div>
           
            <div className="img flex-1 md:w-[50px] m-auto h-[50%]">
                <img className='w-[100%] h-auto rounded ml-[5px] mr-[15px] mt-[5px] mb-[5px]  ' src={Admin} alt="Admin"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About
