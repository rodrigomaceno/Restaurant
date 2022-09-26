import React from 'react';
import Footer from '../footer';
import Confirm from '../components/confirmB';

function Checkout() {
  return (
    <>
    <div className='container '>
        <div className='card myCard alignC'>
            <div className='card-header'>Review Your Order</div>
            <div className='card-body'><p className='card-text'> </p></div>
            <Confirm/>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Checkout