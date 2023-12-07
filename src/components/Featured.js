import React from 'react';
import ReactDOM from 'react-dom/client';
import featured from './featured.css';
import kursi1 from './images/kursi1.webp';
import kursi2 from './images/kursi2.webp';
import feature3 from './images/feature_3.png.webp';
import sofakuning from './images/sofakuning.webp';

export default function Featured() {
    return(
        <div className='container feature'>

            <h2 className='text-center feature-title'>Featured Category</h2>
            <div className='row align-items-center feature-div'>

                <div className='col-lg-7 col-sm-12 feature-top'>
                    <p className='feature-p1'>Premium Quality</p>
                    <p className='feature-p2'>Latest Chair</p>
                    <img src={kursi1} className='kursi1'></img>
                    <a href='#' className='explore'>
                        <p>EXPLORE NOW</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </a>
                </div>

                <div className='col-lg-4 col-sm-12 feature-top2'>
                    <p className='feature-p1'>Premium Quality</p>
                    <p className='feature-p2'>Latest Chair</p>
                    <img src={kursi2} className='kursi2'></img>
                    <a href='#' className='explore'>
                        <p>EXPLORE NOW</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </a>
                </div>

                <div className='col-lg-4 col-sm-12 feature-top top3'>
                    <p className='feature-p1'>Premium Quality</p>
                    <p className='feature-p2'>Latest Chair</p>
                    <img src={feature3} className='kursi2'></img>
                    <a href='#' className='explore'>
                        <p>EXPLORE NOW</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </a>
                </div>

                <div className='col-lg-7 col-sm-12 feature-top top4'>
                    <p className='feature-p1'>Premium Quality</p>
                    <p className='feature-p2'>Latest Sofa</p>
                    <img src={sofakuning} className='kursi1'></img>
                    <a href='#' className='explore'>
                        <p>EXPLORE NOW</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </a>
                </div>

            </div>
        </div>
    )
}