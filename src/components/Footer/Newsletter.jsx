import React from 'react'
import "./Newsletter.css";
import SubHeading from "../SubHeading/SubHeading";

const Newsletter = () => {
    return (
        <div className="app__newsletter">
            <div className="app__newsletter-heading">
                <SubHeading title="Newsletter" />
                <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
                <p class="p__opensans">And never miss latest Events!!</p>
            </div>
            <div class="app__newsletter-input flex__center">
                <input type="e-mail" placeholder="Enter your email address" />
                <button className="custom__button">Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter;
