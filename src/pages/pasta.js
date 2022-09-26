import React from 'react'
import Footer from "../footer";
import Item from '../components/foodItem';

// Pasta page
function Pasta() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            
            <Item {...{ingredients: 'tomato, parmesan, olives', title: 'The Fun Pasta Entree', image:"https://www.cookwithmanali.com/wp-content/uploads/2014/11/Hakka-Noodles-1-500x500.jpg"}}/>
            <Item {...{ingredients: 'tomato, parmesan, olives', title: 'The Fun Pasta Entree', image:"https://www.cookwithmanali.com/wp-content/uploads/2014/11/Hakka-Noodles-1-500x500.jpg"}}/>
            <Item {...{ingredients: 'tomato, parmesan, olives', title: 'The Fun Pasta Entree', image:"https://www.cookwithmanali.com/wp-content/uploads/2014/11/Hakka-Noodles-1-500x500.jpg"}}/>
            <Item {...{ingredients: 'tomato, parmesan, olives', title: 'The Fun Pasta Entree', image:"https://www.budgetbytes.com/wp-content/uploads/2009/12/Garlic-Noodles-Skillet.jpg"}}/>
            
            
            <Item {...{ingredients: 'tomato, parmesan, olives', title: 'The Fun Pasta Entree', image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/simple-sesame-noodles-1597268176.jpg?crop=0.501xw:1.00xh;0.152xw,0&resize=640:*"}}/>
            
        </div>


        <div className='row center'>
            <div className='col-md'>
            <img width={'350px'} src='https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?resize=960,872?quality=90&resize=556,505'/>
            </div>
            <div className='col-md'>
            <img width={'350px'} src='https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?resize=960,872?quality=90&resize=556,505'/>
            </div>
            <div className='col-md'>
            <img width={'350px'} src='https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?resize=960,872?quality=90&resize=556,505'/>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Pasta