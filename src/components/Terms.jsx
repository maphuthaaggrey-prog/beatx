import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import React from 'react';
import { Helmet } from 'react-helmet';

const Terms = () => {

    
    const handleGoBack = () => {
        window.history.back(); // Navigate to the previous page
    };
    return ( 

<>
        <Helmet>
            <title>Terms and Conditions</title>
        </Helmet>

<main id="song-wrap">
                <div className="navbar">
                    <a href="#close" className="back" id="back-button" onClick={handleGoBack}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </a>
                    <i>
                        <Link to="/"><img src={logo} id="search-icon" /></Link>
                    </i>
                </div>
            <div className="main-content">
                    <div className="about-hero">
                            <h1 className="about-heading">Terms and Conditions</h1>
                            <p className='developer-bio'>These Terms and Conditions govern your use of our website, located at www.veteranbeatx.co.za , and any related services provided by Veteran Beatx.</p>
                            <br />
                            <p className='developer-bio'>By accessing or using our website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website.</p>
                            <h3 style={{fontSize:"17px", marginTop: '1em', marginBottom: '7px'}}>1. Intellectual Property</h3>
                            <p className='developer-bio'>All content on this website, including but not limited to beats, music productions, projects, text, graphics, logos, images, and software, is the property of Veteran Beatx or its licensors and is protected by copyright and other intellectual property laws.</p>
                            <br />
                            <p className='developer-bio'> You may not reproduce, distribute, modify, or create derivative works of any content without prior written consent from Veteran Beatx.</p>
                            <h3 style={{fontSize:"17px", marginTop: '1em', marginBottom: '7px'}}>2. Use of Website</h3>
                            <p className='developer-bio'>You must not use the website in any way that could damage, disable, or impair its functionality, attempt to gain unauthorized access to any part of the website or its related systems  or use automated tools (e.g., bots, scrapers) to access or interact with the website without permission.</p>
                            <h3 style={{fontSize:"17px", marginTop: '1em', marginBottom: '7px'}}>3. Contact Form</h3>
                            <p className='developer-bio'>By submitting the contact form, you agree to provide accurate and complete information.</p>
                            <p className='developer-bio'>Veteran Beatx will use the information you provide solely for the purpose of responding to your inquiry or request and you must not use the contact form to send spam, malicious content, or any material that violates these Terms and Conditions.</p>
                            <h3 style={{fontSize:"17px", marginTop: '1em', marginBottom: '7px'}}>4. Limitation of Liability</h3>
                            <p className='developer-bio'>Veteran Beatx makes no warranties or representations about the accuracy or completeness of the content on the website. To the fullest extent permitted by law, Veteran Beatx shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the website or its content.</p>
                            <h3 style={{fontSize:"17px", marginTop: '1em', marginBottom: '7px'}}>5. Changes to terms and Conditions</h3>
                            <p className='developer-bio'>Veteran Beatx reserves the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on the website. Your continued use of the website after changes are posted constitutes your acceptance of the revised terms.</p>
                            <br />

         
                </div>               
            </div>
            <p  style={{marginTop: '7em', bottom: '0px', color: 'grey', textAlign: "center"}}>@2025, Veteran Beatxx, All rights reserved</p>
        </main>


</>




     );
}
 
export default Terms;