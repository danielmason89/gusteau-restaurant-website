import React from 'react'
import "./Chef.css";
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => {
    return (
        <div className="app__bg app__wrapper section__padding">
            <div className="app__wrapper_img app__wrapper_img-reverse">
                <img src={images.chef} alt="Chef Kevin" />
            </div>
            <div className='app__wrapper_info'>
                <SubHeading title="Chef's Word" />
                <h1 className="headtext__cormorant">
                    What we believe im
                </h1>
                <div className='app__chef-content'>
                    <div className='app__chef-content_quote'>
                        <img src={images.quote} alt="quote" /> ;
                        <p className='p__opensans'>I love food!</p>
                    </div>
                    <p className='p__opensans'>And so does my staff...</p>
                </div>
                <div className='app__chef-sign'>
                    <p>Kevin Luo</p>
                    <p className='p__opensans'>Chef & Owner</p>
                    <img src={images.sign} alt="sign" />
                </div>
            </div>
        </div>
    )
}

export default Chef;
