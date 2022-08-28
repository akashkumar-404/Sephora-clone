import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, PinInput, PinInputField, Spinner, Stack } from "@chakra-ui/react"
  

import {useNavigate} from "react-router-dom"

 
    
 function Otp({Open,setOpen}){
  const navigate = useNavigate()

       const handleSubmit=()=>{
         setTimeout(()=>{
           alert('Your Order is Successfull');
           navigate("/")
         },2000)
           


       }
    const onClose = () => {
        setOpen(false);
      };
    return(
       <>
       <Modal style={{padding:"10px"}} isOpen={Open} size="xl" onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign="center">OTP</ModalHeader>

            <ModalHeader marginTop="-20px" textAlign="center" fontSize="16px" >Enter OTP Here</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <HStack marginLeft="170px">
            <PinInput  otp>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
            </PinInput>
            </HStack>
            <Box marginTop="20px">

         <Button onClick={handleSubmit} marginLeft="220px" colorScheme='teal' variant='outline' >Submit </Button>
            </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
       </>
    )
 }
 export default Otp 