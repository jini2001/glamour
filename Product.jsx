import React, { useState } from 'react'
import css from './Product.module.css'
import Plane from '../../assests/plane.png'
import { ProductsData } from '../../Data/product';
import {useAutoAnimate} from '@formkit/auto-animate/react'

const Product = () => {
    const [parent] = useAutoAnimate()

    const [MenuProducts, setMenuProducts]  = useState (ProductsData);

    const filter = (type) => {
        setMenuProducts(ProductsData.filter((product)=>product.type===type))
    }
  return (
    <div className={css.container}>
    <img src={Plane} alt=''/>
    <h1> Our Fearture Products</h1>

    <div className={css.products}>
        <ul className={css.menu}>
            <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
            <li onClick={()=>filter("skin care")}>Skin Care</li>
            <li onClick={()=>filter("conditioners")}>Conditioners</li>
            <li onClick={()=>filter("Foundation")}>Foundations</li>
        </ul>
        <div className={css.lists} ref={parent}>
        { MenuProducts.map((product, i) => (
                <div className={css.product}>
                
                
                    <span  class="center">{product.name}</span>
                    <span>{product.detail}</span>
                

                <span>{product.price}$</span>
                <div class="btn"> Shop Now</div>
               
            <img src={product.img} alt='' className='img-p' />


                </div>
            ))
        }

        </div>
    </div>
    
    </div>
  )
}

export default Product
