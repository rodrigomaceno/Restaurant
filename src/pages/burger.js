import React from 'react'
import Footer from '../footer';
import Item from '../components/foodItem';

function Burger() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            
            <Item {...{ingredients: 'tomato, parmesan, olives', title: 'The Fun Pasta Entree', image:"https://media-cdn.tripadvisor.com/media/photo-s/14/aa/b7/00/20180914-185718-largejpg.jpg"}}/>
            <Item {...{ingredients: 'tomato, parmesan, olives', title: 'The Fun Pasta Entree', image:"https://media-cdn.tripadvisor.com/media/photo-s/14/aa/b7/00/20180914-185718-largejpg.jpg"}}/>
            <Item {...{ingredients: 'tomato, parmesan, olives', title: 'The Fun Pasta Entree', image:"https://media-cdn.tripadvisor.com/media/photo-s/14/aa/b7/00/20180914-185718-largejpg.jpg"}}/>
            <Item {...{ingredients: 'tomato, parmesan, olives', title: 'The Fun Pasta Entree', image:"https://media-cdn.tripadvisor.com/media/photo-s/14/aa/b7/00/20180914-185718-largejpg.jpg"}}/>
            
            
            
            
        </div>


        <div className='row center'>
            <div className='col-md'>
            <img width={'350px'} src='https://media-cdn.tripadvisor.com/media/photo-s/14/aa/b7/00/20180914-185718-largejpg.jpg'/>
            </div>
            <div className='col-md'>
            <img width={'350px'} src='https://media-cdn.tripadvisor.com/media/photo-s/14/aa/b7/00/20180914-185718-largejpg.jpg'/>
            </div>
            <div className='col-md'>
            <img width={'350px'} src='https://media-cdn.tripadvisor.com/media/photo-s/14/aa/b7/00/20180914-185718-largejpg.jpg'/>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Burger