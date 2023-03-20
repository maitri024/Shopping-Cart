import React, { useEffect, useState } from 'react'
import './style.css'
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { add_cart, decrement_qnty, del_cart} from '../redux/cartSlice';



const Shoppingcart = () => {
  const [data, setData] = useState([])
  const { id } = useParams();
  // console.log(id)

  const history = useNavigate()
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items)
  // console.log(cartItems)

  const compare = () => {
    let comparedata = cartItems.filter((e) => {
      return e.id == id
    })
    setData(comparedata)
    console.log("hellooo",comparedata)
  }

  const delitems = (id) => {
    dispatch(del_cart(id))
    history("/")
  }

  useEffect(() => {
    compare()
  }, [cartItems])


  useEffect(() => {
    compare();
  }, [id])

  return (
    <div>
      <div className='container mt-2'>
        <h1>Items Details Page</h1>
        <section className='container mt-3 d-flex'>
          <div className='itemsdetails'>
            {
              data.map((ele) => {
                return (
                  <>
                    <div className='itemsimg'>
                      <img src={ele.imgdata}></img>
                    </div>
                    <div className='details'>
                      <Table>
                        <tr>
                          <td>
                            <p><strong>Restaurant:</strong>{ele.rname}</p>
                            <p><strong>Price:</strong>₹{ele.price}</p>
                            <p><strong>Dishes:</strong>{ele.address}</p>
                            <p><strong>Total:</strong>₹<strong>{ele.price * ele.qnty}</strong></p>
                            <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                              <span style={{ fontSize: 24 }} onClick={ele.qnty <=1 ? ()=>delitems(ele.id) : ()=>dispatch(decrement_qnty(ele))}>-</span>
                              <span style={{ fontSize: 24 }}>{ele.qnty}</span>
                              <span style={{ fontSize: 24 }} onClick={() =>dispatch(add_cart(ele))}>+</span>
                            </div>

                          </td>
                          <td>
                            <p><strong>Rating:</strong><span style={{ backgroundColor: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating}★</span></p>
                            <p><strong>Order Review:</strong><span >{ele.somedata}</span></p>
                            <p><strong>Remove:</strong><span style={{ color: "red", fontSize: "25px" }}><MdDelete onClick={() => delitems(ele.id)} style={{ cursor: "pointer" }} /></span></p>
                          </td>
                        </tr>
                      </Table>
                    </div>
                  </>
                )
              })
            }

          </div>
        </section>
      </div>
    </div>

  )

  
}

export default Shoppingcart
