import React from 'react';

function Pricing() {
    return ( 
       <div className="container p-5">
        <div className="row">
            <div className="col-4">
               <h1 className="mb-3">Unbeatable Price</h1>
               <p>We poinered the concept of discount breaking and price transparency in india.Flat Fee and no hiddne charges</p>
               <a href="" className="mx-5 " style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
            <div className="col-2"></div>
            <div className="col-6">
                  <div className="row">
                     <div className="col p-3 border text-center">
                        <h1 className="mt-3"><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                        <p>Free equity delivery and <br/> direct mutual funds</p>
                     </div>
                     <div className="col p-3 border text-center">
                        <h1 className="mt-3"><i class="fa-solid fa-indian-rupee-sign"></i>2</h1>
                        <p>Intraday F&Q</p>
                     </div>
                  </div>
            </div>
        </div>
       </div>
     );
}

export default Pricing;