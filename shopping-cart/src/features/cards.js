import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './cardsdata';
import { add_cart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';


const Cards = () => {
  const[data,setData]=useState(Cardsdata)

  const dispatch = useDispatch()

  
    return (
        <div className='container mt-3'>
            <h1>Add to Cart Projects</h1>
            <div className='row d-felx justify-content-center align-items-center'>
{
    data.map((element,id)=>{
        return(
            <>
            <Card style={{ width: '22rem',border:"none",marginTop:4,marginLeft:2,marginRight:2 }}>
                                    <Card.Img variant="top" src={element.imgdata}style={{height:"16rem"}}/>
                                    <Card.Body>
                                        <Card.Title>{element.rname}</Card.Title>
                                        <Card.Text>
                                          Price:₹{element.price}
                                        </Card.Text>
                                        <div className='button_div d-flex justify-content-center'>
                                        <Button variant="primary" className='col-lg-12' 
                                        onClick={() => dispatch(add_cart(element))}>Add To Cart</Button>

                                        </div>
                                    </Card.Body>
                                </Card>
            </>
        )
    })
}

                            
            </div>

        </div>
    )
}

export default Cards
