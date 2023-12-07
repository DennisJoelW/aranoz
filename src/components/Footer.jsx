import React from 'react'
import './footer.css'

function Footer() {
    return(
        <div className='container footer'>
            <div className='row footer-content'>
                <div className='col-lg-2 footer-content-items'>
                    <h2 className=''>Top Products</h2>
                    <p>Managed Website</p>
                    <p>Manage Reputation</p>
                    <p>Power Tools</p>
                    <p>Marketing Service</p>
                </div>
                <div className='col-lg-2 footer-content-items'>
                    <h2 className=''>Quick Links</h2>
                    <p>Jobs</p>
                    <p>Brand Assets</p>
                    <p>Investor Relations</p>
                    <p>Terms of Service</p>
                </div>
                <div className='col-lg-2 footer-content-items'>
                    <h2 className=''>Features</h2>
                    <p>Jobs</p>
                    <p>Brand Assets</p>
                    <p>Investor Relations</p>
                    <p>Terms of Service</p>
                </div>
                <div className='col-lg-2 footer-content-items'>
                    <h2 className=''>Resources</h2>
                    <p>Guides</p>
                    <p>Research</p>
                    <p>Experts</p>
                    <p>Agencies</p>
                </div>
                <div className='col-lg-4 footer-content-items'>
                    <h2 className=''>Newsletter</h2>
                    <p>Heaven fruitful doesn't over lesser in <br/> days. Appear creeping </p>

                    <input type='email' placeholder='Email Address'></input>
                    <button type='button' className='footer-content-items-button'>Subscribe</button>
                </div>
            </div>
            <div className='footer-credit'>
                <p>Copyright ©2023 All rights reserved | This template is originally by <a href='https://colorlib.com/'>Colorlib</a>, website made by <span>Dennis Joel</span></p>
            </div>
        </div>

    )
}

export default Footer
