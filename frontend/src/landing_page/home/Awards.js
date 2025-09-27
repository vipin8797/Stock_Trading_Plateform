import React from 'react';

function Awards() {
    return ( 
       <div  className="container mt-5">
          <div className="row p-5">
            <div className="col-6">
                <img src="/media/images/largestBroker.svg"></img>
            </div>
            <div className="col-6 p-5 ">
                <h1>Largest Sock Broker in India.</h1>
                <p>2+ millions Zerodha clients contribute to over 15% of all retial order volume in indai daily by trading and investing in:</p>
               <div className="row">
                    <div className="col-6">
                        <ul>
                            <li>Future and Options</li>
                            <li>Commodity and Derivatives</li>
                            <li>Currency Derivatives</li>
                        </ul>
                    </div>
                    <div className="col-6">
                         <ul>
                            <li>Stocks & IPOs</li>
                            <li>Direct Mutual funds</li>
                            <li>Bonds & Gov. Securities</li>
                        </ul>
                    </div>
               </div>
               <img src="/media/images/pressLogos.png" style={{width:"90%"}}></img>
            </div>
          </div>
       </div>
     );
}

export default Awards;