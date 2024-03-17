import React from 'react'
import css from './Footer.module.css'
import Logo from "../../assests/logo2.jpg"
import {
    
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UserIcon,
    LinkIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
    <hr/>

    <div className={css.cFooter}>
        <div className={css.logo}>
            <img src={Logo} alt=""/>
            <span>Glamour+</span>
        </div>
        <div className={css.block}>
            <div className={css.detail}>
                <span>Contact Us </span>
                <span className={css.pngLine}>
                    <LocationMarkerIcon className={css.icon}/>
                    Sector-D, R.K Puram, Delhi
                </span>

                
            </div>

            <div className={css.detail}>
                
                <span className={css.pngLine}>
                    <PhoneIcon className={css.icon}/>
                    234-456-2245
                </span>

                
            </div>
        </div>

        <div className={css.block}>
            <div className={css.detail}>
                <span>Account</span>
                <span className={css.pngLine}>
                    <LoginIcon className={css.icon}/>
                    Sign In
                </span>
            </div>
        </div>


        <div className={css.block}>
            <div className={css.detail}>
                <span>Company</span>
                <span className={css.pngLine}>
                    <UserIcon className={css.icon}/>
                    <a href='/about'>
                    <p>About us</p>
                    </a>
                </span>
            </div>
    </div>

        <div className={css.block}>
            <div className={css.detail}>
                <span>Resources</span>
                <span className={css.pngLine}>
                    <LinkIcon className={css.icon}/>
                    <p>Safety Privacy & Terms</p>
                </span>
            </div>
    </div>

    </div>

<div className={css.copyRight}>
<span>Copyright 2024 by Glamour, Inc.</span>
<span>All right reserved</span>
</div>
</div>      
    
  );
}

export default Footer
