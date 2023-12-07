import React from 'react';
import ReactDOM from 'react-dom/client';
import mainScreen from './mainScreen.css';
import sofaPic from './images/sofa.webp'

function MainScreen() {
    return (
        <section className="main-section">
        <div className="container tampilansofa">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row align-items-center">
                        <div className="col-lg-5 woodsofa">
                            <h1>Wood & <br></br> Cloth Sofa</h1>

                            <p className="pwood">Nullam tempor elit venenatis ligula sagittis ultricies Aenean <br></br> lacinia congue nisl venenatis ligula quis porta. <br></br> Sed eu gravida urna.</p>

                            <button type="button" className="btn btn-primary">PURCHASE</button>

                        </div>

                        <div className="col-lg-7">
                            <img src={sofaPic} alt="" className='sofaPic'></img>
                        </div>
                    </div>

                  </div>
                  <div className="carousel-item">
                    <div className="row align-items-center">
                        <div className="col-lg-5 woodsofa">
                            <h1>Sofa <br></br> Brand New</h1>

                            <p className="pwood">Nullam tempor elit venenatis ligula sagittis ultricies Aenean <br></br> lacinia congue nisl venenatis ligula quis porta. <br></br> Sed eu gravida urna.</p>

                            <button type="button" className="btn btn-primary">PURCHASE</button>

                        </div>

                        <div className="col-lg-7">
                            <img src={sofaPic} alt=""></img>
                        </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row align-items-center">
                        <div className="col-lg-5 woodsofa">
                            <h1>Sofa <br></br> Biru Baru</h1>

                            <p className="pwood">Nullam tempor elit venenatis ligula sagittis ultricies Aenean <br></br> lacinia congue nisl venenatis ligula quis porta. <br></br> Sed eu gravida urna.</p>
                            <button type="button" className="btn btn-primary">PURCHASE</button>

                        </div>

                        <div className="col-lg-7">
                            <img src={sofaPic} alt=""></img>
                        </div>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
        </div>
    </section>
    )
}

export default MainScreen;
