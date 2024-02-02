import React from 'react'
import './About.css';
import Admin from './Admin.jpg'
function About() {
  return (
    <div>
      <div className="Raj">
        <div className="heading">
            <h1>
                About Us
            </h1>
        </div>
        <div className="container">
            <div className="raj-content">
                <h2>Welcome to  E-krishak & Ideality company! We are dedicated to providing Website and Mobile Application Developoment to our customers.</h2>
                <h4>
                    Welcome to our organization, a dynamic and innovative company that brings together the worlds of Research and Development (R&D) and E-commerce. Our passion for discovery, cutting-edge technology, and customer-centric experiences drives our commitment to creating a meaningful impact in both industries.
                </h4>
                <p>E Krishak is an e-commerce and Research & Development organization, which designs and develops mobile applications, websites and IoT based electronics solutions for various sectors like agriculture, home automation, robotics etc.

                    Our e-commerce platform is designed keeping in mind the needs of farmers and retailers, providing a user friendly interface to sell agriculture products online from the home of farmers or online agriculture by retailers from home Buying products makes all these complex processes very easy. Here is a great option to buy and sell a variety of agricultural products and high quality agricultural products such as vegetables, fruits, grains and dairy products!</p>
                <button className="cta-button" id="toggleButton">Show More</button>
                <div id="moreInfo">
                    <h2>Our Mission</h2>
                    <p>At our organization, we envision a future where cutting-edge technologies and sustainable practices coexist harmoniously to transform agricultural farmer's and improve lives. Through our R&D initiatives, we seek to pioneer innovative solutions that address global challenges and promote a sustainable future for generations to come.

                        In the realm of E-commerce, our vision is to be a trailblazer in delivering exceptional customer experiences. We strive to redefine the way farmer's and trader's sell and buy online agricultural products, offering convenience, reliability, and a diverse selection of products that cater to various interests and lifestyles.</p>
        
                    <h2>Our Team</h2>
                    <p>We have a talented and passionate team dedicated to achieving our goals. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
                </div>
            </div>
           
            <div className="raj-img">
                <img src={Admin} alt="Admin"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About
