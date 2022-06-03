import React from 'react'
import "./Menu.css";
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';

const Menu = () => {
    return (
        <section className="app__specialMenu flex__center section__padding" id="menu">
            <header className="app__specialMenu-title">
                <SubHeading title="Menu That Fits Your Palette" />
                <h1 className='headtext__cormorant'>Today&apos;s Special</h1>
            </header>
            <main className='app__specialMenu-menu'>
                <div className='app__specialMenu-menu_wine flex__center'>
                    <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
                    <div className='app__specialMenu_menu_items'>
                        {data.wines.map((wine, index) => (<MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />))}
                    </div>
                </div>
                <div className="app__specialMenu-menu_img">
                    <img src={images.menu} alt="menu__img" />
                </div>

                <div className='app__specialMenu-menu_cocktails flex__center'>
                    <p className='app__specialMenu-menu_heading'>Cocktails</p>
                    <div className='app__specialMenu_menu_items'>
                        {data.cocktails.map((cocktail, index) => (<MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />))}
                    </div>
                </div>

            </main >
            <div style={{ marginTop: "15" }}>
                <button type="button" className='custom__button'>View More</button>
            </div>
        </section>
    )
}

export default Menu;
