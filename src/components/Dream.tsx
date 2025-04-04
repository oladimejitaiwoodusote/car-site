import React from 'react';
import '../styles/Dream.css';
import { FaSearch } from "react-icons/fa";

function Dream(): React.JSX.Element {
  return (
    <div className='Dream'>
        <img className="Dream_image" src="/images/img1.jpeg" alt="Dream Car" />
        <div className='Dream_overlay'>
            <div className='Dream_content'>
            <h1>Get your dream <br/> Car</h1>
            <div className='Dream_stats'>
                <div className='Dream_stats_2'>
                    <h2>100+</h2>
                    <p>New Models</p>
                </div>
                <div className='Dream_stats_2'>
                    <h2>1 L +</h2>
                    <p>Customers</p>
                </div>
            </div>
            </div>            
            <div className='Dream_search'>
                <input type="text" placeholder='What are you looking for?'/>
                <button><FaSearch/></button>
            </div>
        </div>
    </div>
  )
}

export default Dream;
