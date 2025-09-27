import React from 'react';
 
function Team() {
    return (  
        <div className="container">
           <div className="row p-5 text-center">
           <h1 className="mb-5" style={{fontSize:"35px"}}>People</h1>
           <div className="col text-center p-5">
                <img src="/media/images/nithinKamath.jpg" style={{borderRadius:"100%",width:"60%"}}></img>
                <h2 className="mt-2">Nithin Kamath</h2>
                <p>Founder & CEO</p>
           </div>

           <div className="col p-5 fs-5 text-muted ">
           <p> Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

<p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

<p>Playing basketball is his zen.</p>

<p>Connect on <a href="">HomePage</a>/<a href="">Trading Q&A</a>/<a href="">Twitter</a></p>
           </div>
           </div>
        </div>
    );
}

export default Team;