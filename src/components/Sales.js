import React from 'react';
import ReactDOM from 'react-dom/client';
import sale from './images/sale.webp';
import salesStyle from './salesStyle.css';

var countDown = new Date("Dec 7, 2023 15:20:20").getTime(); // menentukan count down tanggal tujuan

var x = setInterval(function(){ // set interval for update the count down every 1 second

    var now = new Date().getTime(); // mendapatkan time hari ini dan jam ini
    var distance = countDown - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + "d ";
    document.getElementById("hours").innerHTML = hours + "h ";
    document.getElementById("minutes").innerHTML = minutes + "m ";
    document.getElementById("seconds").innerHTML = seconds + "s ";


})

export default function Sales() {
    return (
        <div className='container-fluid sale'>
            <div className='container sale-container'>
                <div className='row align-items-center row-sales'>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <img src={sale} className='sale-image'></img>
                    </div>
                    <div className='col-lg-6 justify-content-center'>
                        <h2 className='sale-title'>Weekly Sale on 60% <br></br>Off All Products</h2>
                        <div className='d-flex count-down'>
                            <div className='d-flex flex-column'>
                                <p>DAYS</p>
                                <h2 id="days"></h2>
                            </div>|
                            <div className='d-flex flex-column'>
                                <p>HOURS</p>
                                <h2 id="hours"></h2>
                            </div>|
                            <div className='d-flex flex-column'>
                                <p>MINUTES</p>
                                <h2 id="minutes"></h2>
                            </div>|
                            <div className='d-flex flex-column'>
                                <p>SECONDS</p>
                                <h2 id="seconds"></h2>
                            </div>
                        </div>
                        <button type="button" class="button-buy">BUY NOW</button>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}