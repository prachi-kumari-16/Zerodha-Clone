
import React from 'react';

function Universe() {
  return (  
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>

        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="Media/Images/smallcaseLogo.png" className="universe-img img-fluid" alt="Smallcase" />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="Media/Images/streakLogo.png" className="universe-img img-fluid" alt="Streak" />
          <p className="text-small text-muted mt-2">Algo & strategy platform</p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="Media/Images/sensibullLogo.svg" className="universe-img img-fluid" alt="Sensibull" />
          <p className="text-small text-muted mt-2">Options trading platform</p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="Media/Images/zerodhaFundhouse.png" className="universe-img img-fluid" alt="Fundhouse" />
          <p className="text-small text-muted mt-2">Asset management</p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="Media/Images/goldenpiLogo.png" className="universe-img img-fluid" alt="GoldenPi" />
          <p className="text-small text-muted mt-2">Bonds trading platform</p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="Media/Images/dittoLogo.png" className="universe-img img-fluid" alt="Ditto" />
          <p className="text-small text-muted mt-2">Insurance</p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}}>Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;
