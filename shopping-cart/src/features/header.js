import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import { NavLink } from "react-router-dom";
import Fade from '@mui/material/Fade';
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { add_cart, decrement_qnty, del_cart } from "../redux/cartSlice";

const Header = () => {
  const [price, setPrice] = useState(0);

  const cartItems = useSelector(state => state.cart.items)


  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const total = () => {
    let price = 0;
    cartItems.map((ele, k) => {
      price = ele.price * ele.qnty + price
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total])

  const delitems = (id) => {
    dispatch(del_cart(id))
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to='/cart' className="text-decoration-none text-light">Add to Cart</NavLink>
          <Nav className="me-auto" style={{ marginLeft: "24px" }}>
            <NavLink to="/" className="text-decoration-none text-light"> Home</NavLink>
          </Nav>
          <Badge badgeContent={cartItems.length} color="primary"
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>

            <FaShoppingCart style={{ fontSize: 25, cursor: "pointer", color: "white" }} />
          </Badge>
        </Container>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {
            cartItems.length ?
              <div className="card_details">
                <Table>
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Restaurant Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartItems.map((element) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <NavLink to={`/cart/${element.id}`} onClick={handleClose}><img src={element.imgdata} style={{ width: "5rem", height: "5rem" }}></img>
                                </NavLink>
                              </td>
                              <td>
                                <p>{element.rname}</p>
                                <p>Price:₹{element.price}</p>
                                <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                              <span style={{ fontSize: 24 ,cursor:"pointer"}} onClick={()=>dispatch(decrement_qnty(element))}>-</span>
                              <span style={{ fontSize: 24 }}>{element.qnty}</span>
                              <span style={{ fontSize: 24,cursor:"pointer" }} onClick={() =>dispatch(add_cart(element))}>+</span>
                            </div>
                              </td>

                              <td>
                                <MdDelete style={{ fontSize: "23px", cursor: "pointer" }} onClick={() => delitems(element.id)} />
                              </td>

                            </tr>
                          </>
                        )
                      })
                    }
                    <p className="text-center">Total:₹{price}</p>
                  </tbody>
                </Table>
              </div> :
              <div className="card_detail">
                <ImCross style={{ position: "absolute", top: 2, right: 1, fontSize: 15, cursor: "pointer" }} onClick={handleClose} />
                <p style={{ width: "150px", height: "10px" }}>Your cart is empty</p>
              </div>
          }


        </Menu>
      </Navbar>
    </>
  )

}

export default Header