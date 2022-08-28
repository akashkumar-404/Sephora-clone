import { Alert, Box, Button, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react"
import { useState } from "react";
import Otp from "./OtpModal";

function PayModal({isOpen,setIsOpen}) {
    const [Open,setOpen]=useState(false)
    const onClose = () => {
        setIsOpen(false);
      };
      const handleData=()=>{
        let cardnumber=document.getElementById("cardnumber").value
        let month=document.getElementById("month").value
        let year=document.getElementById("year").value
        let first=document.getElementById("first").value
        let last=document.getElementById("last").value
          if(cardnumber!==""&&month!==""&&year!==""&&first!==""&&last!==""){
            setOpen(true)
          }
          else{
            alert('Fill the Details');
          }
      }
    return (
      <>
        <Modal style={{padding:"10px"}} isOpen={isOpen} size="xl" onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign="center">CheackOut</ModalHeader>
            <ModalHeader >Payment Method</ModalHeader>
            <ModalHeader marginTop="-20px" fontSize="16px" >Add New Credit or<br/> Debit cart</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Stack spacing='24px'>
              <Box>
                <Input
                  id="cardnumber"
                  type="tel"  maxlength="19" 
                  placeholder='Card Number*'
                />
              </Box>
              <Box display="flex" gap="10px">

                <Input id="month" w="100PX" placeholder="MM*"/>
                <Input id="year" w="100PX" placeholder="YY*"/>
                <Input type="number" w="120PX" placeholder="CVV/CVC*"/>
              </Box>

              <Box display="flex" gap="20px">
              <Input id="first" w="250PX" placeholder="First Name"/>
              <Input id="last"  w="250PX" placeholder="Last Name"/>  
              </Box>
              <button onClick={()=>handleData()} style={{display:"block",marginLeft:"150px" ,backgroundColor:"black",color:"white",width:"40%",borderRadius:"1.4rem",padding:"5px"}}>Place Order</button>
            </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
        <Otp Open={Open} setOpen={setOpen}/>
      </>
    )
  }
  export default PayModal