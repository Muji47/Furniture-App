import React from 'react'
import Bestchoice from '../home/Bestchoice';
import Categories from '../home/Categories';
import Featuredproducts from '../home/Featuredproducts';
import Homeoverview from '../home/Homeoverview';
import Picmover from '../home/Picmover';
import Products from '../home/Products';
import Reviews from '../home/Reviews';
import Navbarbase from '../home/Navbarbase';
import '../home/Backgroundhead.css'

export default function Home({Product}) {
    
  
    return (
      <div >
        <Navbarbase/>
        <Picmover />
        <Products  category={'Shop by category'}><Categories products={Product}/></Products>
        <Products  category={'Featured Products'}><Featuredproducts products={Product}/></Products>
        <Homeoverview Data={Product} />
        <Reviews/>
        <Bestchoice/>
        
      </div>
    );
  }




