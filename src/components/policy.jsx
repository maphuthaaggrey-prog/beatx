import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import React from 'react';
import { Helmet } from 'react-helmet';

const Policy = () => {





    const handleGoBack = () => {
        window.history.back(); // Navigate to the previous page
    };
    return ( 

<>
<Helmet>
    <title>Policy</title>
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
                            <h1 className="about-heading">Privacy Policy</h1>
                            <p className='developer-bio'> At Veteran Beatx, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.</p>
                            <br />
                            <h3 style={{fontSize:"17px", marginTop: '1em', marginBottom: '7px'}}>1. Information We Collect</h3>
                            <p className='developer-bio'>1.1. Personal Information: When you submit the contact form, we collect your name, email address, phone number, and message.</p>
                            <br />
                            <p className='developer-bio'>1.2. Usage Data: We may collect information about how you interact with the website, such as your IP address, browser type, and pages visited.</p>
                            <h3 style={{fontSize:"17px", marginTop: '1em', marginBottom: '7px'}}>2. How We Use Your Information</h3>
                            <p className='developer-bio'>We use your personal information to respond to your inquiries or requests and Improve our website and services.</p>
                            <p className='developer-bio'>We do not sell, trade, or rent your personal information to third parties.</p>
                            <h3 style={{fontSize:"17px", marginTop: '1em', marginBottom: '7px'}}>3. Data Security</h3>
                            <p className='developer-bio'>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
                            <p className='developer-bio'>However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee its absolute security.</p>
                            <h3 style={{fontSize:"17px", marginTop: '1em', marginBottom: '7px'}}>4. Changes to Privacy Policy</h3>
                            <p className='developer-bio'>We may update this Privacy Policy from time to time. Your continued use of the website after changes are posted constitutes your acceptance of the revised policy.</p>
                            <br />

         
                </div>               
            </div>
            <p  style={{marginTop: '7em', bottom: '0px', color: 'grey', textAlign: "center"}}>@2025, Veteran Beatxx, All rights reserved</p>

        </main>


</>




     );
}

 
export default Policy;