import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assests/hero.jpg';
import {RiShoppingBagFill } from 'react-icons/ri';
import {BsArrowRight} from 'react-icons/bs';
import { motion } from 'framer-motion'

const Hero = () => {
    const transition ={duration:3, type:"spring"}
  return (
    <div className={css.container}>


    {/* left side  */}
    <div className={css.h_sides}>
        <span className={css.text1}>skin protection cream </span>

        <div className={css.text2}>
            <span>Trendy collection</span>
            <span> 
            
            Wholesaler rate of cosmetic products on lipstick & face powder
            </span>
        </div>
    </div>


    {/* middle side */}

    <div className={css.wrapper}>
    <motion.div 
    transition={transition}
    initial ={{bottom: "2rem"}}
    whileInView={{bottom: "0rem"}}
    className={css.blueCircle}>
        
    </motion.div>



       <motion.img 
       transition={transition}
       initial={{bottom: "-3rem"}}
       whileInView={{bottom: "3rem"}}
       src={HeroImg} alt="" width={600}/>



        <motion.div 
        transition={transition}
        initial={{right: "4%"}}
       whileInView={{right: "-10%"}}
        className={css.cart2}>
            <RiShoppingBagFill  />

            <div className={css.signup}>
                <span> Best Signup Offer    </span>
            <div>
            <BsArrowRight />
            </div>

        </div></motion.div>
        
    </div>


    {/* Right Side */}
    <div className={css.h_sides}>
        <div className={css.traffic}>
            <span>1.5m</span>
            <span>Monthly Traffic</span>
        </div>

        <div className={css.customer}>
            <span>100k</span>
            <span>Happy Customer</span>
        </div>
    </div>
      
    </div>
  )
}

export default Hero
