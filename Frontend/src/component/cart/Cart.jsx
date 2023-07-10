import React from 'react';
import {FaWindowClose } from 'react-icons/fa';
import { FaShoppingBasket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './cart.css'
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch()
  const cartdata = useSelector(state => state.cart.carts);
  console.log(cartdata);
  const data = useSelector(state => state.cart.countvalue);
  console.log(data)
  return (
    <div className='allcartbox'>
        <div className='leftcartbox'></div>
        <div className='rightcartbox'>
        <div className='topcartbox'>
            <p>YOUR BAG</p>
            <h6>{data} Item</h6>
        </div>
        <div className='centercartbox'>
           {(data === 0) ?<h5><FaShoppingBasket/></h5> : null } 
            {
              cartdata.map((val,ind)=>{
                return (
                  <div>
                  <div style={{textAlign:'End'}}><button onClick={()=>{dispatch({type:"REMOVE",payload:ind,count:val.count})}}> <FaWindowClose/></button></div>

                    <div>
                    <img src={val.src} style={{height:'100px',width:'80px'}}/>
                    <h4>Name : {val.name}</h4>
                    <p>Price : {val.price}</p>
                    <p>Quantity : {val.count}</p>
                    </div>
                  </div>
                )
              })
            }
        </div>
        {(data === 0) ? <h1>Your Bag Is Empty</h1> :<>
        <Link to='/viewbag'> <button>view bag</button></Link>
       
        <Link to='/checkout'><button>checkout</button></Link></>
  }
    </div>
    </div>
   
  )
}

export default Cart