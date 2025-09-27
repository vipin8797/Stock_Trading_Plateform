import React from 'react';

function Stats() {
    return (
        <div className="container p-3">
          <div className="row">
            <div className="col-6 p-5">
              <h1 className=" fs-2 mb-5">Trust with Confidence</h1>
              <h2 className="fs-4">Customer-first always</h2>
              <p className="text-muted">That's why 1.3+ crore customer Trust Zerodha with 3.5 lakh crore worth of equity inverstments.</p>

              <h2 className="fs-4">No spams or gimmicks</h2>
              <p className="text-muted">That's why 1.3+ crore customer Trust Zerodha with 3.5 lakh crore worth of equity inverstments.</p>

              <h2 className="fs-4">The Zerodha Universe</h2>
              <p className="text-muted">That's why 1.3+ crore customer Trust Zerodha with 3.5 lakh crore worth of equity inverstments.</p>

              <h2 className="fs-4">Do better with money</h2>
              <p className="text-muted">That's why 1.3+ crore customer Trust Zerodha with 3.5 lakh crore worth of equity inverstments.</p>

           </div>
            <div className="col-6 p-5">
              <img src="/media/images/ecosystem.png" style={{width:"90%"}}></img>
              <div className="text-center">
                <a href="" className="mx-5 " style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                <a href="" style={{textDecoration:"none"}}>Try Kite</a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Stats;