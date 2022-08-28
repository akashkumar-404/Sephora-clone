

import { Button, Divider, Heading, Img, Input, Link } from '@chakra-ui/react'
import {AddIcon, ChevronRightIcon, InfoIcon, MinusIcon} from  "@chakra-ui/icons"
import styles from './Cart.module.css'
import { useState } from 'react'
import PayModal from './PayModal'
import axios from 'axios'
import { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
  
function getData(){
  return axios.get("https://obscure-stream-21364.herokuapp.com/user")
}
function DeleteData({id}){
  return axios.delete(`https://obscure-stream-21364.herokuapp.com/user/${id}`)
}

  function Cart(){
    let sum=0
    let sum1=0+sum
    const[data,setData]=useState([])
    const [total,setTotal]=useState([])
    const [count,setCount]=useState(1)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleClick = () => {
      setIsModalVisible(true);
    };
      const handleGetData=()=>{
         getData().then((res)=>setData(res.data)).catch((err)=>console.log(err))

      }
    useEffect(()=>{
      handleGetData()
    },[])
     
    const handleDelete=(id)=>{
         DeleteData({id}).then((res)=>{
          handleGetData()
         })
    }
    return (
      <> 
        <Navbar/>
        <div className={styles.cartbox}>
              <Heading as="h4" size="lg" marginLeft="120px" marginTop="50px">
                My Basket
              </Heading>
          <div className={styles.cartmain}>
            <div style={{width:"60%"}}>
                <div className={styles.program}>
                <Heading as="h4" fontWeight="bold" size="sm">The Sephora Credit Card Program</Heading>
                 <div style={{display:"flex",width:"95%",margin:"auto",justifyContent:"space-evenly",padding:"5px"}}>
                    <Img w="40px" src="https://www.sephora.com/contentimages/creditcard/cardicon/CreditCard.svg" alt="" />
                 <p style={{fontSize:"14px" }}>Save 25% on this order when you open and use either Sephora Credit Card today*</p>
                 <button className={styles.btn}>
                      SEE DETAILS
                 </button>
                 </div>
                 <p style={{fontSize:"12px" }} >*Subject to credit approval. Exclusions apply.</p>
                </div>
                <div className={styles.shipped}>
                <Heading as="h4" size="md">
                Get It Shipped 
              </Heading>
                
             <div style={{marginBottom:'80px'}} className={styles.shadow}>
               <div style={{width:"60%",marginLeft:"30px"}}>
               Enjoy free shipping with code FREESHIP.Free Returns, see details/exclusions.*
               </div>

                   <div className={styles.sample}>
                        <div>
                            <p>Get 2 free sample(s) with every order</p>
                            <h4>SELECT YOUR SAMPLE(S)﻿</h4>
                        </div>
                        <div>
                        <p>You now have 0 Beauty Insider points</p>

                          <h4>REDEEM YOUR REWARDS﻿</h4>

                        </div>
                   </div> 
                      {/* here put your cart data make a div*/}
                    {data.map((item)=>
                         <div className={styles.cartitem}>
                            <img width="100px" src={item.image} alt="" />
                              <div key={item.id} >
                              <h4>{item.title}</h4>
                              <p>{item.description}</p>
                              <p >ITEM { Math.floor(Math.random()*12000)}</p>
                              <Button w="10px" h="20px" disabled={count===1}  onClick={()=>setCount(count-1)}><MinusIcon fontSize="10px"/></Button>
                              <Button  w="10px" h="20px" fontSize="10px">{count}</Button>
                              <Button  w="10px" h="20px" onClick={()=>setCount(count+1)}><AddIcon fontSize="10px"/></Button>
                               <button onClick={()=>handleDelete(item.id)}  className={styles.remove}>Remove</button>
                              </div>
                             <h5 style={{marginLeft:"280px"}}>${sum=item.price*count}.00</h5>
                                
                         </div>
                    )}  
                    

                </div>

                </div>
          </div>
                <div style={{border:"0px solid none",width:"40%"}}>
                    <div className={styles.pay}>
                      <div className={styles.checkout} > 
                      <p>Merchandise Subtotal</p>
                          <h6>${sum}.00</h6>
                      </div>
                      <div className={styles.checkout} > 
                      <p>Shipping & Handling <InfoIcon bg="gray" color="white" border="1px solid gray" borderRadius="50%" /></p>
                          <h6>TBD</h6>
                      </div>
                      <div className={styles.checkout} > 
                      <p>Estimated Tax & Other Fees <InfoIcon bg="gray" color="white" border="1px solid gray" borderRadius="50%" /></p>
                          <h6>TBD</h6>
                      </div>
                      <Divider w="90%" margin="auto" orientation='horizontal' />
                      <div className={styles.total} > 
                      <h6>Estimated Total</h6>
                          <h6>${sum}.00</h6>
                      </div>
                      <p style={{fontSize:"12px",color:"gray",marginTop:"20px",marginLeft:"20px"}}>Shipping & taxes calculated during checkout</p>
                      <Button onClick={()=>handleClick()} display="block"  width="90%" h="45px" margin="auto" marginTop="20px" borderRadius="1.4rem" colorScheme='red' padding="5px" >Checkout Shipped Items</Button>
                      <Button className={styles.btn1} display="block" bg="transparent" color="black" colorScheme="none" justifyContent="center"  width="90%" h="45px" margin="auto" marginTop="10px" borderRadius="1.4rem" border="2px solid black" padding="px">Pay with<Img w="100px" display="block" alignItems="center" marginLeft="170px" marginTop="-20px" src='https://www.sephora.com/img/ufe/logo-paypal.svg'/></Button>
                    </div>
                    <div className={styles.promo}>
                           <Link style={{fontSize:"12px",marginLeft:"190px"}}>View featured offers <ChevronRightIcon/></Link>
                           <Input  fontSize="14px" marginLeft="10px"  w="65%" h="45px" focusBorderColor='black' placeholder='Promo or Reward Code' /> 
                           <button className={styles.btn2}> Apply</button>
                    </div>
                </div>
          </div>
        </div>
       
        <Footer/>
        <PayModal isOpen={isModalVisible}
                  setIsOpen={setIsModalVisible}/>
      </>
    );
  }
  export default Cart
