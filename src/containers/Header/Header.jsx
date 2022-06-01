import React from 'react'
import "./Header.css";
import images from "../../constants/images";
import { SubHeading } from "../../components";

const Header = () => {
    return (
        <div className="app__header app__wrapper section__padding id='home'">
            <div className="app__wrapper_info">
                <SubHeading title="Chase the new flavour" />
                <h1 className="app__header-h1">The Key to Fine Dining</h1>
                <p className="p__opensans" style={{ margin: " 2rem 0" }}>
                    Meet the flavours of the future.
                    <br />
                    French cuisine meets Japanese, fusion.
                </p>
                <button type="button" className='custom__button'>Explore Menu</button>
            </div>
            <figure className="app__wrapper_img">
                <img src={images.welcome} alt="marjoram-salmon-with-lemon-couscous" />
            </figure>
        </div >
    )
}

export default Header;
