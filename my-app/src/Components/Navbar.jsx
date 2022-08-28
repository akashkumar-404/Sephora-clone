import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import {Link, useNavigate} from "react-router-dom"
import {Navigate} from "react-router-dom"
import React, { useContext } from "react";
import { ChakraProvider,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, } from "@chakra-ui/react";
import { Button,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useState } from "react";
import ReactLeafCarousel from "./Body";
import Footer from "./Footer";
import axios from "axios";
import { AuthContext } from "./AppContext";
;

const getData=(data={})=>{   
    return axios.post("https://reqres.in/api/login",{
      email:data.email,
      password:data.password
    })
  }

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   const {isAuth,loginUser}=useContext(AuthContext)
   const navigate=useNavigate()

   const handleLogin=()=>{
    getData({email:email,password:password}).
    then((res)=>loginUser(email,"ABCD"))
    .catch((err)=>console.log(err))

 }
 
    //const [isClick, setClick] = useState(false);
    // const { isOpen, onOpen, onClose} = useDisclosure();
    const { 
        isOpen: isOpenModal, 
        onOpen: onOpenModal, 
        onClose: onCloseModal 
    } = useDisclosure()
    const { 
        isOpen: isOpenModal1, 
        onOpen: onOpenModal1, 
        onClose: onCloseModal1 
    } = useDisclosure()
    const { 
        isOpen: isOpenModal2, 
        onOpen: onOpenModal2, 
        onClose: onCloseModal2 
    } = useDisclosure()
    const { 
        isOpen: isOpenModal3, 
        onOpen: onOpenModal3, 
        onClose: onCloseModal3 
    } = useDisclosure()
    const { 
        isOpen: isOpenModal4, 
        onOpen: onOpenModal4, 
        onClose: onCloseModal4 
    } = useDisclosure()
    const { 
        isOpen: isOpenModal5, 
        onOpen: onOpenModal5, 
        onClose: onCloseModal5 
    } = useDisclosure()
    const { 
        isOpen: isOpenModal6, 
        onOpen: onOpenModal6, 
        onClose: onCloseModal6 
    } = useDisclosure()
    const { 
        isOpen: isOpenModal7, 
        onOpen: onOpenModal7, 
        onClose: onCloseModal7 
    } = useDisclosure()
    const { 
        isOpen: isOpenModal8, 
        onOpen: onOpenModal8, 
        onClose: onCloseModal8 
    } = useDisclosure()
    const { 
        isOpen: isOpenModal9, 
        onOpen: onOpenModal9, 
        onClose: onCloseModal9 
    } = useDisclosure()
    const { 
        isOpen: isOpenModal10, 
        onOpen: onOpenModal10, 
        onClose: onCloseModal10 
    } = useDisclosure()
    const { 
        isOpen: isOpen11, 
        onOpen: onOpen11, 
        onClose: onClose11 
    } = useDisclosure()

    const { 
        isOpen: isOpen12, 
        onOpen: onOpen12, 
        onClose: onClose12 
    } = useDisclosure()
    const { 
        isOpen: isOpen13, 
        onOpen: onOpen13, 
        onClose: onClose13 
    } = useDisclosure()
    const { 
        isOpen: isOpen14, 
        onOpen: onOpen14, 
        onClose: onClose14 
    } = useDisclosure()
    const { 
        isOpen: isOpen15, 
        onOpen: onOpen15, 
        onClose: onClose15 
    } = useDisclosure()
    
    
    // if(isAuth){
        
    //   return (<Navigate to="/" />)
    //   }

    
  return (
    <>
    <ChakraProvider>
        <Flex
        py={2}
        px={4}
        direction={["column", "row"]}
        justify="space-evenly"
        bg="whiteAlpha.900"
        borderBottom="1px solid grey"
        color="blackAlpha.900"
        width="100%"
        height="120px"
        fontSize="13px"
        // border='1px solid red'
      >
        
        <Flex alignItems="center" wrap="wrap">
          <Flex flexGrow={1} width='100%' >
            <Menu >
          <Link to="/"> <MenuButton ><Image style={{width:"110px",marginTop:"10px",marginRight:"10px"}} src="https://www.sephora.com/img/ufe/logo.svg"/></MenuButton></Link> 
            </Menu>
            <Menu><MenuButton>{}</MenuButton></Menu>
            <Menu>
                <Input style={{width:"400px",borderRadius:"20px",}} _hover={{border:"1px solid"}} type="text" placeholder="🔍Search" />
            </Menu>
            
            <Menu isOpen={isOpen11}>
          <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                _hover={{ borderBottom:"1px solid" }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen11}
                onMouseLeave={onClose11}
                
            >
                Store and Services
            </MenuButton>
            <MenuList onMouseEnter={onOpen11} style={{color:"black" ,padding:"20px",width:"351px"}} 
            onMouseLeave={onClose11}>
                <div>
                <Button style={{backgroundColor:"black",textAlign:"center",color:"white",borderRadius:"20px",width:"150px",fontSize:"13px"}}>Choose Your Store</Button>
                </div>
                <div style={{borderBottom:"5px solid grey",marginTop:"15px",height:"55px",borderTop:"5px solid grey"}}>
                   <h1 style={{fontSize:"18px",marginTop:"5px",fontWeight:"bolder"}}>📍Find a Sephora</h1>
                </div>
                <div style={{marginTop:"15px",height:"55px"}}>
                   <h1 style={{fontSize:"13px",marginTop:"5px",marginLeft:"-150px",fontWeight:"bolder"}}>Happening at Sephora</h1>
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div>
                    <Image src="https://www.sephora.com/contentimages/meganav/icons/happening_services.jpg" style={{width:"55px"}} />
                    </div>
                   <div style={{textAlign:"left",marginTop:"-5px",marginLeft:"20px"}}> <h1 style={{fontSize:"18px",marginTop:"5px"}}>Services</h1>
                    <p>Personalised,Makeup,Skin care and Brow Service</p>
                    </div>
                </div>
               
                <div style={{display:"flex"}}>
                    <div>
                    <Image src="https://www.sephora.com/contentimages/meganav/icons/happening_events_2.jpg" style={{width:"55px"}} />
                    </div>
                   <div style={{textAlign:"left",marginTop:"-5px",marginLeft:"15px"}}> <h1 style={{fontSize:"18px",marginTop:"5px"}}>Store events</h1>
                    <p>Exciting launches Parties and more</p>
                    </div>
                </div>
                <div style={{display:"flex"}}>
                    <div>
                    <Image src="https://www.sephora.com/contentimages/meganav/icons/happening_new.jpg" style={{width:"55px"}} />
                    </div>
                   <div style={{textAlign:"left",marginTop:"-5px",marginLeft:"15px"}}> <h1 style={{fontSize:"18px",marginTop:"5px"}}>What's new in store</h1>
                    <p>What's Hot in store</p>
                    </div>
                </div>
            </MenuList>
            
          </Menu>
          <Menu isOpen={isOpen12}>
          <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                _hover={{ borderBottom:"1px solid" }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen12}
                onMouseLeave={onClose12}
                
            >
                Community
            </MenuButton>
            <MenuList onMouseEnter={onOpen12} style={{color:"black" ,padding:"20px",width:"351px"}} 
            onMouseLeave={onClose12}>
               <MenuItem style={{display:"flex",justifyContent:"space-between"}}>
               <div>
               <Image src="https://community.sephora.com/t5/image/serverpage/avatar-name/default-avatar/avatar-theme/sephora/avatar-collection/sephora/avatar-display-size/profile/version/4" style={{width:"85px"}}/>
               </div>
               <div style={{textAlign:"left",marginTop:"-5px",marginLeft:"20px"}}> <h1 style={{fontSize:"18px",marginTop:"5px",fontWeight:"bold"}}>Community Home 🔔 📨</h1>
                    <p>Ask questions, join challenges, and get recommendations from people like you</p>
                    </div>
               </MenuItem >
               <MenuItem style={{textAlign:"left",marginTop:"-5px",marginLeft:"20px"}}>
               <Button style={{marginRight:"15px",borderRadius:"15px",color:"white",backgroundColor:"black"}}>Sign In</Button>
               <Button style={{borderRadius:"15px",border:"1px solid black"}}>Create Account</Button>
               </MenuItem>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div>
                    <Image src="https://www.sephora.com/contentimages/meganav/icons/community_home.jpg" style={{width:"85px"}} />
                    </div>
                   <div style={{textAlign:"left",marginTop:"-5px",marginLeft:"20px"}}> <h1 style={{fontSize:"18px",marginTop:"5px"}}>Community Home</h1>
                    <p>Ask questions, join challenges, and get recommendations from people like you</p>
                    </div>
                </div>
               
                <div style={{display:"flex"}}>
                    <div>
                    <Image src="https://www.sephora.com/contentimages/meganav/icons/community_groups.jpg" style={{width:"55px"}} />
                    </div>
                   <div style={{textAlign:"left",marginTop:"-5px",marginLeft:"15px"}}> <h1 style={{fontSize:"18px",marginTop:"5px"}}>Groups</h1>
                    <p>Discover topics tailored to your beauty interests</p>
                    </div>
                </div>
                <div style={{display:"flex"}}>
                    <div>
                    <Image src="https://www.sephora.com/contentimages/meganav/icons/community_gallery.jpg" style={{width:"55px"}} />
                    </div>
                   <div style={{textAlign:"left",marginTop:"-5px",marginLeft:"15px"}}> <h1 style={{fontSize:"18px",marginTop:"5px"}}>Gallery</h1>
                    <p>Add Your Photo Inspired by fellow beauty lovers</p>
                    </div>
                </div>
            </MenuList>
            </Menu>
            <Menu isOpen={isOpen13}>
          <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                _hover={{ borderBottom:"1px solid" }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen13}
                onMouseLeave={onClose13}
                display="flex"
            >
             Sign-In
            </MenuButton>
            <MenuList onMouseEnter={onOpen13} style={{color:"black" ,padding:"20px",width:"351px"}} 
            onMouseLeave={onClose13}>
               <MenuItem style={{display:"flex",justifyContent:"space-between"}}>
               <div>
               <Image src="https://community.sephora.com/t5/image/serverpage/avatar-name/default-avatar/avatar-theme/sephora/avatar-collection/sephora/avatar-display-size/profile/version/4" style={{width:"85px"}}/>
               </div>
               <div style={{textAlign:"left",marginTop:"-5px",marginLeft:"20px"}}> <h1 style={{fontSize:"18px",marginTop:"5px",fontWeight:"bold"}}>Goodday Beautiful 👋</h1>
                    <p>Sign-in for a more personalized experience</p>
                    </div>
               </MenuItem >
               <MenuItem style={{textAlign:"left",marginTop:"-5px",marginLeft:"20px"}}>
               <Button onClick={onOpen15} style={{marginRight:"15px",borderRadius:"15px",color:"white",backgroundColor:"black"}}>Sign In</Button>
               <Modal isOpen={isOpen15} onClose={onClose15}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Already have a account</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input   value={email}
            onChange={(e)=> setEmail(e.target.value)}   placeholder="enter email"  style={{marginBottom:'20px'}}/>
            <Input    value={password}
              onChange={(e)=> setPassword(e.target.value)}  placeholder="enter password" />
          </ModalBody>
          <ModalFooter>
            <Button variant='ghost' onClick={handleLogin}>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
              
               <Button onClick={onOpen14} style={{borderRadius:"15px",border:"1px solid black"}}>Create Account</Button>
               <Modal isOpen={isOpen14} onClose={onClose14}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Account</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="enter email"  style={{marginBottom:'20px'}}/>
            <Input placeholder="enter password" />
          </ModalBody>
          <ModalFooter>
            <Button variant='ghost'>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
               </MenuItem>
               
               <MenuItem style={{textAlign:"left",display:"block"}}><div style={{fontSize:"17px"}}>Beauty Insider Summary</div><div style={{fontSize:"11px",color:"grey"}}>View Activity Savings Benifits</div>
                </MenuItem>
                <MenuItem style={{textAlign:"left",display:"block"}}><div style={{fontSize:"17px"}}>Rewards Bazaar</div><div style={{fontSize:"11px",color:"grey"}}>Reedemed Item Sample and more</div>
                </MenuItem>
                <MenuItem style={{textAlign:"left",display:"flex"}}><div>
                    <Image src="https://www.sephora.com/img/ufe/icons/subscription.svg" />
                </div>
                <div><div style={{fontSize:"17px"}}>Buy it Again</div><div style={{fontSize:"11px",color:"grey"}}>Record from in-stores and online purchase</div></div>
                </MenuItem>
                <MenuItem style={{textAlign:"left",display:"flex"}}><div>
                    <Image src="https://www.sephora.com/img/ufe/icons/track.svg" />
                </div>
                <div><div style={{fontSize:"17px"}}>Orders</div><div style={{fontSize:"11px",color:"grey"}}>View track on online orders</div></div>
                </MenuItem>
                <MenuItem style={{textAlign:"left",display:"flex"}}><div>
                    <Image src="https://www.sephora.com/img/ufe/icons/auto-replenish.svg" />
                </div>
                <div><div style={{fontSize:"17px"}}>Auto-replenish</div><div style={{fontSize:"11px",color:"grey"}}>View and manage subscription</div></div>
                </MenuItem>
                <MenuItem style={{textAlign:"left",display:"flex"}}><div>
                    <Image src="https://www.sephora.com/img/ufe/icons/track.svg" />
                </div>
                <div><div style={{fontSize:"17px"}}>Auto-replenish</div><div style={{fontSize:"11px",color:"grey"}}>View and manage subscription</div></div>
                </MenuItem>
                <MenuItem style={{textAlign:"left",display:"flex"}}><div>
                    <Image src="https://www.sephora.com/img/ufe/icons/heart.svg" />
                </div>
                <div><div style={{fontSize:"17px"}}>Love</div><div style={{fontSize:"11px",color:"grey",marginLeft:"5px"}}>View Liked Products</div></div>
                </MenuItem>

            </MenuList>
            </Menu>
            <Menu><MenuButton style={{margin:"0px 15px 0px 15px"}}>
            ❤
                </MenuButton></Menu>
                <Link to="/cart"> <Menu><MenuButton style={{fontSize:"25px"}}>🛒</MenuButton></Menu></Link>
          </Flex>
          </Flex>
          </Flex>
      <Flex
        py={2}
        px={4}
        direction={["column", "row"]}
        justify="space-around"
        bg="blackAlpha.900"
        borderBottom="1px solid grey"
        color="whiteAlpha.900"
        width="100%"
        fontSize="14px"
        // border='1px solid red'
      >
        
        <Flex alignItems="center" wrap="wrap">
          <Flex flexGrow={1} justify="center" /*border='1px'*/>
            
            <Menu isOpen={isOpen}>
          <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: ("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                
            >
                New {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList onMouseEnter={onOpen} style={{color:"black" ,padding:"20px",width:"1318px"}} 
            onMouseLeave={onClose}
             display="flex" justifyContent="space-evenly">
                <div >
                <MenuItem>All New</MenuItem>
                <MenuItem>Just Dropped</MenuItem>
                <MenuItem>New Makeup</MenuItem>
                <MenuItem>New Skincare</MenuItem>
                <MenuItem>New Haircare</MenuItem>
                <MenuItem>New Fragrance</MenuItem>
                <MenuItem>New Bath & Body</MenuItem>
                <MenuItem>New Tools & Brushes</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem>The Next Big Thing</MenuItem>
                <MenuItem>Bestsellers</MenuItem>
                <MenuItem>Allure Best of Beauty</MenuItem>
                <MenuItem>Quizzes & Buying Guides</MenuItem>
                <MenuItem>Clean Beauty Guide</MenuItem>
                <MenuItem>Clean+Planet Positive Beauty Guide</MenuItem>
                </div>
                <div style={{marginLeft:"150px"}}>
                    <Image src="https://www.sephora.com/contentimages/meganav/large/2022-6-9-haus-lady-gaga-bundle-b-site-desktop-global-navigation-button-en-us-can.jpg?imwidth=294"/>
                </div>
                <div style={{marginLeft:"50px"}}>
                    <Image src="https://www.sephora.com/contentimages/meganav/large/2022-06-09-june-hair-treatment-mbc-site-desktop-global-navigation-button-US-CAN.jpg?imwidth=294"/>
                </div>
            </MenuList>
            
          </Menu>
          <Menu isOpen={isOpenModal}>
          <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: ("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpenModal}
                onMouseLeave={onCloseModal}
            >
                Brands {isOpenModal ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList  display="flex" justifyContent="space-evenly" 
            style={{color:"black" ,padding:"20px",width:"1318px"}} 
            onMouseEnter={onOpenModal} 
            onMouseLeave={onCloseModal}>
            <div >
                <MenuItem fontWeight={"bold"}>Brand A-Z</MenuItem>
                <MenuItem fontWeight={"bold"}>SEPHORA COLLECTION</MenuItem>
                <MenuItem fontWeight={"bold"}>New Brands</MenuItem>
                <MenuItem>Kulfi</MenuItem>
                <MenuItem>New Haircare</MenuItem>
                <MenuItem>HAUS LABS BY LADY GAGA</MenuItem>
                <MenuItem>Deadcool</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>Only At Sephora</MenuItem>
                <MenuItem>Hanni</MenuItem>
                <MenuItem>MAKEUP BY MARIO</MenuItem>
                <MenuItem>Rare Beauty By Selena Gomez</MenuItem>
                </div>
                <div > 
                <MenuItem fontWeight={"bold"}>Affordable Brands</MenuItem>
                <MenuItem>SEPHORA COLLECTION</MenuItem>
                <MenuItem>The Ordinary</MenuItem>
                <MenuItem>The Inkey List</MenuItem>
                <MenuItem>Verb</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>Black-Owned Brands</MenuItem>
                <MenuItem>Shani Darden Skin Care</MenuItem>
                <MenuItem>Adwoa beauty</MenuItem>
                <MenuItem>PATTERN by Tracee Ellis Ross</MenuItem>
                <MenuItem>Verb</MenuItem>
                </div>
                <div>
                <MenuItem fontWeight={"bold"}>Clean at Sephora</MenuItem>
                <MenuItem>ILIA</MenuItem>
                <MenuItem>Olaplex</MenuItem>
                <MenuItem>Tatcha</MenuItem>
                <MenuItem>Ellis Brooklyn</MenuItem>
                </div>
            </MenuList>
          </Menu>
          <Menu isOpen={isOpenModal1}>
          <Link to="/makeup"> <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: ("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpenModal1}
                onMouseLeave={onCloseModal1}
            >
              Makeup {isOpenModal1 ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton></Link>
            <MenuList  display="flex" justifyContent="space-evenly" 
            style={{color:"black" ,padding:"20px",width:"1318px"}} 
            onMouseEnter={onOpenModal1} 
            onMouseLeave={onCloseModal1}>
            <div >
                <MenuItem fontWeight={"bold"}><Link to="/makeup">All Makeup</Link></MenuItem>
                <MenuItem fontWeight={"bold"}>Face</MenuItem>
                <MenuItem>Foundation</MenuItem>
                <MenuItem>BB & CC Creams</MenuItem>
                <MenuItem>Tinted Moisturizer</MenuItem>
                <MenuItem>Concealer</MenuItem>
                <MenuItem>Face Primer</MenuItem>
                <MenuItem>Setting Spray & Powder</MenuItem>
                <MenuItem>Highlighter</MenuItem>
                <MenuItem>Contour</MenuItem>
                <MenuItem>Color Correct</MenuItem>
                <MenuItem>Face Sets</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>Eye</MenuItem>
                <MenuItem>Eye Palettes</MenuItem>
                <MenuItem>Mascara</MenuItem>
                <MenuItem>Eyeliner</MenuItem>
                <MenuItem >Eyebrow</MenuItem>
                <MenuItem>False Eyelashes</MenuItem>
                <MenuItem>Eyeshadow</MenuItem>
                <MenuItem>Eyelash Serums</MenuItem>
                <MenuItem>Eyebrow Serums</MenuItem>
                <MenuItem>Eye Primer</MenuItem>
                <MenuItem>Eye Sets</MenuItem>
                </div>
                <div > 
                <MenuItem fontWeight={"bold"}>Lip</MenuItem>
                <MenuItem>Lipstick</MenuItem>
                <MenuItem>Lip Gloss</MenuItem>
                <MenuItem>Lip Balm & Treatment</MenuItem>
                <MenuItem >Liquid Lipstick</MenuItem>
                <MenuItem>Lip Satin</MenuItem>
                <MenuItem>Lip Liner</MenuItem>
                <MenuItem>Lip Plumper</MenuItem>
                <MenuItem>Lip Sets</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>Cheek</MenuItem>
                <MenuItem>Blush</MenuItem>
                <MenuItem>Bronzer</MenuItem>
                <MenuItem>Highlighter</MenuItem>
                <MenuItem >Contour</MenuItem>
                <MenuItem>Cheek Palettes</MenuItem>
                <MenuItem>Value & Gift Sets</MenuItem>
                <MenuItem>Makeup Palettes</MenuItem>
                <MenuItem>Brushes & Applicatiors</MenuItem>
                <MenuItem>Accessories</MenuItem>
                <MenuItem>Nail</MenuItem>
                </div>
                <div>
                <MenuItem fontWeight={"bold"}>New</MenuItem>
                <MenuItem fontWeight={"bold"}>Bestsellers</MenuItem>
                <MenuItem fontWeight={"bold"}>Clean Makeup</MenuItem>
                <MenuItem fontWeight={"bold"}>Vegan Makeup</MenuItem>
                <MenuItem fontWeight={"bold"}>Mini Size</MenuItem>
                <MenuItem fontWeight={"bold"}>Value Size</MenuItem>
                <MenuItem fontWeight={"bold"}>Sephora Collection</MenuItem>
                </div>
                <div > 
                <MenuItem fontWeight={"bold"}>Help Me Choose</MenuItem>
                <MenuItem>Foundation Quiz</MenuItem>
                <MenuItem>Lip Quiz</MenuItem>
                <MenuItem>Brow Quiz</MenuItem>
                <MenuItem >Complexion Routine Builder</MenuItem>
                <MenuItem>Guide To Foundations</MenuItem>
                <MenuItem>Clean Makeup Guide</MenuItem>
                <MenuItem>No Makeup Makeup</MenuItem>
                <MenuItem>Allure Best of Beauty Makeup</MenuItem>
                </div>
            </MenuList>
          </Menu>
          <Menu isOpen={isOpenModal2}>
          <Link to="/skincare"> <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: ("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpenModal2}
                onMouseLeave={onCloseModal2}
            >
                Skincare {isOpenModal2 ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton></Link>
            <MenuList  display="flex" justifyContent="space-evenly" 
            style={{color:"black" ,padding:"20px",border:"1px solid gray",width:"1318px"}} 
            onMouseEnter={onOpenModal2} 
            onMouseLeave={onCloseModal2}>
            <div >
                <MenuItem fontWeight={"bold"}><Link to="/skincare">All Skincare</Link> </MenuItem>
                <MenuItem fontWeight={"bold"}>Moisturizers</MenuItem>
                <MenuItem>Night creams</MenuItem>
                <MenuItem>Face Oils</MenuItem>
                <MenuItem>MIsts & Essences</MenuItem>
                <MenuItem>BB & CC Creams</MenuItem>
                <MenuItem fontWeight={"bold"}>Cleansers</MenuItem>
                <MenuItem>Face Wash & cleansers</MenuItem>
                <MenuItem>Exfoliators</MenuItem>
                <MenuItem>Makeup Removers</MenuItem>
                <MenuItem>Face Wipes</MenuItem>
                <MenuItem>Toners</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>Treatments</MenuItem>
                <MenuItem>Face Serums</MenuItem>
                <MenuItem>Blemish & Acne Treatments</MenuItem>
                <MenuItem>Facial Peels</MenuItem>
                <MenuItem style={{width:'190px'}}>Masks</MenuItem>
                <MenuItem >Face Masks</MenuItem>
                <MenuItem>Sheet Masks</MenuItem>
                <MenuItem>Eye Masks</MenuItem>
                </div>
                <div > 
                <MenuItem fontWeight={"bold"}>Eye Care</MenuItem>
                <MenuItem>Eye Creams & Treatments</MenuItem>
                <MenuItem>Eye Masks</MenuItem>
                <MenuItem fontWeight={"bold"}>Lip Balms & Treatments</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>Sunscreen</MenuItem>
                <MenuItem>Face Sunscreen</MenuItem>
                <MenuItem>Body Sunscreen</MenuItem>
                <MenuItem fontWeight={"bold"}>High Tech Tools</MenuItem>
                <MenuItem fontWeight={"bold"}>Wellness</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>Shop by Concern</MenuItem>
                <MenuItem>Acne & Blemishes</MenuItem>
                <MenuItem>Anti-Aging</MenuItem>
                <MenuItem>Dark Spots</MenuItem>
                <MenuItem>Pores</MenuItem>
                <MenuItem>Dryness</MenuItem>
                <MenuItem>Fine Lines & Wrinkles</MenuItem>
                <MenuItem>Dullness</MenuItem>
                </div>
                <div>
                <MenuItem fontWeight={"bold"}>New</MenuItem>
                <MenuItem fontWeight={"bold"}>Bestsellers</MenuItem>
                <MenuItem fontWeight={"bold"}>Clean Makeup</MenuItem>
                <MenuItem fontWeight={"bold"}>Vegan Makeup</MenuItem>
                <MenuItem fontWeight={"bold"}>Mini Size</MenuItem>
                <MenuItem fontWeight={"bold"}>Value Size</MenuItem>
                <MenuItem fontWeight={"bold"}>Sephora Collection</MenuItem>
                </div>
                <div > 
                <MenuItem fontWeight={"bold"}>Help Me Choose</MenuItem>
                <MenuItem>Foundation Quiz</MenuItem>
                <MenuItem>Lip Quiz</MenuItem>
                <MenuItem>Brow Quiz</MenuItem>
                <MenuItem >Complexion Routine Builder</MenuItem>
                <MenuItem>Guide To Foundations</MenuItem>
                <MenuItem>Clean Makeup Guide</MenuItem>
                <MenuItem>No Makeup Makeup</MenuItem>
                <MenuItem>Allure Best of Beauty Makeup</MenuItem>
                </div>
            </MenuList>
          </Menu>
          <Menu isOpen={isOpenModal3}>
          <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: ("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpenModal3}
                onMouseLeave={onCloseModal3}
            >
                Hairs {isOpenModal3 ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList  display="flex" justifyContent="space-evenly" 
            style={{color:"black" ,padding:"20px",border:"1px solid gray",width:"1318px"}} 
            onMouseEnter={onOpenModal3} 
            onMouseLeave={onCloseModal3}>
            <div >
                <MenuItem fontWeight={"bold"}>Treatments</MenuItem>
                <MenuItem >Hair Masks</MenuItem>
                <MenuItem>Leave-in Conditioner</MenuItem>
                <MenuItem>Hair Oils</MenuItem>
                <MenuItem>Hair Serums</MenuItem>
                <MenuItem>Scalp Treatmrnts</MenuItem>
                <MenuItem >Hair supplements</MenuItem>
                <MenuItem>Hair thining and loss</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>Styling</MenuItem>
                <MenuItem>Styling Creams</MenuItem>
                <MenuItem>Dry Shampoo</MenuItem>
                <MenuItem>Hair Primers & Heat Protectants</MenuItem>
                <MenuItem >Hair Spray</MenuItem>
                <MenuItem style={{width:'190px'}}>Curly,Coily,Textured Haircare</MenuItem>
                <MenuItem style={{width:'190px'}}>Hair Dye & Root Touch Ups</MenuItem>
                <MenuItem>Hair Toners</MenuItem>
                </div>
                <div style={{width:'190px'}}> 
                <MenuItem fontWeight={"bold"}>Styling</MenuItem>
                <MenuItem>Styling Creams</MenuItem>
                <MenuItem>Dry Shampoo</MenuItem>
                <MenuItem >Hair Primers & Heat Proctentants</MenuItem>
                <MenuItem>Hair Spray</MenuItem>
                <MenuItem fontWeight={"bold"}>Curly,Coily,Textured Haircare</MenuItem>
                <MenuItem fontWeight={"bold"} >Brushes and combos</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>Value & Gift sets</MenuItem>
                <MenuItem>Tools</MenuItem>
                <MenuItem>Hair Dryers</MenuItem>
                <MenuItem >Hair Straightners & Flat Irons</MenuItem>
                <MenuItem >Curling Irons</MenuItem>
                <MenuItem fontWeight={"bold"} >Brushes and combos</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>Shop by Concern</MenuItem>
                <MenuItem>Damaged</MenuItem>
                <MenuItem>Dryness</MenuItem>
                <MenuItem>Frizz</MenuItem>
                <MenuItem>Scalp Care</MenuItem>
                <MenuItem>Volume</MenuItem>
                <MenuItem>Color Care</MenuItem>
                </div>
                <div>
                <MenuItem fontWeight={"bold"}>New</MenuItem>
                <MenuItem fontWeight={"bold"}>Bestsellers</MenuItem>
                <MenuItem fontWeight={"bold"}>Clean Makeup</MenuItem>
                <MenuItem fontWeight={"bold"}>Vegan Makeup</MenuItem>
                <MenuItem fontWeight={"bold"}>Mini Size</MenuItem>
                <MenuItem fontWeight={"bold"}>Value Size</MenuItem>
                <MenuItem fontWeight={"bold"}>Sephora Collection</MenuItem>
                </div>
                <div > 
                <MenuItem fontWeight={"bold"}>Help Me Choose</MenuItem>
                <MenuItem>Foundation Quiz</MenuItem>
                <MenuItem>Lip Quiz</MenuItem>
                <MenuItem>Brow Quiz</MenuItem>
                <MenuItem >Complexion Routine Builder</MenuItem>
                <MenuItem>Guide To Foundations</MenuItem>
                <MenuItem>Clean Makeup Guide</MenuItem>
                <MenuItem>No Makeup Makeup</MenuItem>
                <MenuItem>Allure Best of Beauty Makeup</MenuItem>
                </div>
            </MenuList>
          </Menu>
          <Menu isOpen={isOpenModal4}>
          <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: ("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpenModal4}
                onMouseLeave={onCloseModal4}
            >
                Fragrance {isOpenModal4 ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList  display="flex" justifyContent="space-evenly" 
            style={{color:"black" ,padding:"20px",border:"1px solid gray",width:"1318px"}} 
            onMouseEnter={onOpenModal4} 
            onMouseLeave={onCloseModal4}>
            <div >
                <MenuItem fontWeight={"bold"}>
                All Fragrance
                </MenuItem>
                <MenuItem fontWeight={"bold"}>Women</MenuItem>
                <MenuItem>Perfume</MenuItem>
                <MenuItem>Perfume Oils</MenuItem>
                <MenuItem>Rollerballs & Travel Size</MenuItem>
                <MenuItem>Body Mist & Hair Mist</MenuItem>
                <MenuItem fontWeight={"bold"}>Men</MenuItem>
                <MenuItem>Cologne</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>
                Value & Gift Sets
                </MenuItem>
                <MenuItem>Perfume Gift Sets</MenuItem>
                <MenuItem>Cologne Gift Sets</MenuItem>
                <MenuItem>Home Gift Sets</MenuItem>
                <MenuItem >Sephora Favorites</MenuItem>
                </div>
                <div style={{width:'190px'}}> 
                <MenuItem fontWeight={"bold"}>Candles & Home Scents</MenuItem>
                <MenuItem>Candles</MenuItem>
                <MenuItem>Diffusers</MenuItem>
                <MenuItem >Shop by Fragrance Family</MenuItem>
                <MenuItem>Floral</MenuItem>
                <MenuItem fontWeight={"bold"}>Fresh</MenuItem>
                <MenuItem fontWeight={"bold"} >Warm & Spicy</MenuItem>
                <MenuItem fontWeight={"bold"} >Earthy & Woody</MenuItem>
                </div>
                <div>
                <MenuItem fontWeight={"bold"}>New</MenuItem>
                <MenuItem fontWeight={"bold"}>Bestsellers</MenuItem>
                <MenuItem fontWeight={"bold"}>Clean Makeup</MenuItem>
                <MenuItem fontWeight={"bold"}>Vegan Makeup</MenuItem>
                <MenuItem fontWeight={"bold"}>Mini Size</MenuItem>
                <MenuItem fontWeight={"bold"}>Value Size</MenuItem>
                <MenuItem fontWeight={"bold"}>Sephora Collection</MenuItem>
                </div>
                <div > 
                <MenuItem fontWeight={"bold"}>Help Me Choose</MenuItem>
                <MenuItem>Foundation Quiz</MenuItem>
                <MenuItem>Lip Quiz</MenuItem>
                <MenuItem>Brow Quiz</MenuItem>
                <MenuItem >Complexion Routine Builder</MenuItem>
                <MenuItem>Guide To Foundations</MenuItem>
                <MenuItem>Clean Makeup Guide</MenuItem>
                <MenuItem>No Makeup Makeup</MenuItem>
                <MenuItem>Allure Best of Beauty Makeup</MenuItem>
                </div>
            </MenuList>
          </Menu>
          <Menu isOpen={isOpenModal5}>
          <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: ("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpenModal5}
                onMouseLeave={onCloseModal5}
            >
                Tools and Brushes {isOpenModal5 ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList  display="flex" justifyContent="space-evenly" 
            style={{color:"black" ,padding:"20px",border:"1px solid gray",width:"1318px"}} 
            onMouseEnter={onOpenModal5} 
            onMouseLeave={onCloseModal5}>
            <div >
                <MenuItem fontWeight={"bold"}>
                All Tools & Brushes
                </MenuItem>
                <MenuItem fontWeight={"bold"}>Sephora Collection</MenuItem>
                <MenuItem fontWeight={"bold"}>Brushes & Applicators</MenuItem>
                <MenuItem>Brush Sets</MenuItem>
                <MenuItem>Face Brushes</MenuItem>
                <MenuItem>Eye Brushes</MenuItem>
                <MenuItem >Lip Brushes</MenuItem>
                <MenuItem>Sponges & Applicators</MenuItem>
                <MenuItem >Brush Cleaners</MenuItem>
                <MenuItem>Facial Cleansing Brushes</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>
                Hair Tools
                </MenuItem>
                <MenuItem>Hair Dryers</MenuItem>
                <MenuItem>Straighteners & Flat Irons</MenuItem>
                <MenuItem>Curling Irons</MenuItem>
                <MenuItem >Brushes & Combs</MenuItem>
                <MenuItem >Accessories</MenuItem>
                </div>
                <div style={{width:'190px'}}> 
                <MenuItem fontWeight={"bold"}>Beauty Tools</MenuItem>
                <MenuItem>Anti-Aging</MenuItem>
                <MenuItem>Teeth Whitening</MenuItem>
                <MenuItem >Tweezers & Eyebrow</MenuItem>
                <MenuItem>Manicure & Pedicure</MenuItem>
                <MenuItem >Eyelash Curlers</MenuItem>
                <MenuItem  >Sharpeners</MenuItem>
                <MenuItem fontWeight={"bold"} >Vibrators & Devices</MenuItem>
                </div>
                <div>
                <MenuItem fontWeight={"bold"}>New</MenuItem>
                <MenuItem fontWeight={"bold"}>Bestsellers</MenuItem>
                <MenuItem fontWeight={"bold"}>Clean Makeup</MenuItem>
                <MenuItem fontWeight={"bold"}>Vegan Makeup</MenuItem>
                <MenuItem fontWeight={"bold"}>Mini Size</MenuItem>
                <MenuItem fontWeight={"bold"}>Value Size</MenuItem>
                <MenuItem fontWeight={"bold"}>Sephora Collection</MenuItem>
                </div>
                <div > 
                <Image src="https://www.sephora.com/contentimages/meganav/large/2020-07-29-pro-brushes-site-desktop-global-navigation-button.jpg?imwidth=294"/>
                </div>
            </MenuList>
          </Menu>
          <Menu isOpen={isOpenModal6}>
          <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: ("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpenModal6}
                onMouseLeave={onCloseModal6}
            >
                Bath & Body {isOpenModal6 ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList  display="flex" justifyContent="space-evenly" 
            style={{color:"black" ,padding:"20px",width:"1318px"}} 
            onMouseEnter={onOpenModal6} 
            onMouseLeave={onCloseModal6}>
            <div >
                <MenuItem fontWeight={"bold"}>
                All Bath & Body
                </MenuItem>
                <MenuItem fontWeight={"bold"}>Body Wash & Shower Gel</MenuItem>
                <MenuItem >Scrub & Exfoliants</MenuItem>
                <MenuItem>Bath Soaks & Bubble Bath</MenuItem>
                <MenuItem  fontWeight={"bold"}>Body Moisturizers</MenuItem>
                <MenuItem>Body Lotions & Body Oils</MenuItem>
                <MenuItem >Hand Cream & Foot Cream</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>
                Body Care</MenuItem>
                <MenuItem>Intimate Care & Vibrators</MenuItem>
                <MenuItem>Cellulite & Stretch Marks</MenuItem>
                <MenuItem>Deodorant & Antiperspirant</MenuItem>
                <MenuItem fontWeight={"bold"}>Value & Gift Sets</MenuItem>
                <MenuItem fontWeight={"bold"}>Shop by Concern</MenuItem>
                <MenuItem >Stretch Marks and Firming</MenuItem>
                <MenuItem >Hydration</MenuItem>
                <MenuItem >Smooth Texture</MenuItem>
                <MenuItem >Even Skin Tone and Color Correction</MenuItem>
                </div>
                <div style={{width:'190px'}}> 
                <MenuItem fontWeight={"bold"}>Candles & Home Scents</MenuItem>
                <MenuItem>Sunscreen</MenuItem>
                <MenuItem>Face Sunscreen</MenuItem>
                <MenuItem >Body Sunscreen</MenuItem>
                <MenuItem>Self Tanners</MenuItem>
                <MenuItem >Beauty Supplements</MenuItem>
                </div>
                <div>
    
                <MenuItem fontWeight={"bold"}>New</MenuItem>
                <MenuItem fontWeight={"bold"}>Bestsellers</MenuItem>
                <MenuItem fontWeight={"bold"}>Clean Makeup</MenuItem>
                <MenuItem fontWeight={"bold"}>Vegan Makeup</MenuItem>
                <MenuItem fontWeight={"bold"}>Mini Size</MenuItem>
                <MenuItem fontWeight={"bold"}>Value Size</MenuItem>
                <MenuItem fontWeight={"bold"}>Sephora Collection</MenuItem>
                </div>
                <div > 
                <Image src="https://www.sephora.com/contentimages/meganav/large/2020-9-14-site-desktop-global-navigation-button-banner-sol-de-janeiro.jpg?imwidth=294"/>
                </div>
            </MenuList>
          </Menu>
          <Menu isOpen={isOpenModal7}>
          <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: ("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpenModal7}
                onMouseLeave={onCloseModal7}
            >
                Mini Size{isOpenModal7 ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList  display="flex" justifyContent="space-evenly" 
            style={{color:"black" ,padding:"20px",width:"1318px"}} 
            onMouseEnter={onOpenModal7} 
            onMouseLeave={onCloseModal7}>
            <div >
                <MenuItem fontWeight={"bold"}>
                All Mini Size</MenuItem>
                <MenuItem fontWeight={"bold"}>Makeup</MenuItem>
                <MenuItem  fontWeight={"bold"}>Skincare</MenuItem>
                <MenuItem fontWeight={"bold"}>Hair</MenuItem>
                <MenuItem  fontWeight={"bold"}>Fragrance</MenuItem>
                <MenuItem  fontWeight={"bold"}>Bath & Body</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>
                Value & Gift Sets</MenuItem>
                <MenuItem  fontWeight={"bold"}>$15 and Under</MenuItem>
                <MenuItem fontWeight={"bold"}>$25 and Under</MenuItem>
                <MenuItem  fontWeight={"bold"}>Sephora Favorites</MenuItem>
                </div>
                <div > 
                <Image src="https://www.sephora.com/contentimages/meganav/large/2020-07-29-site-global-navigation-button-evergreen-crossworld-minis.jpg?imwidth=294"/>
                </div>
                <div > 
                <Image src="https://www.sephora.com/contentimages/meganav/large/2020-12-23-site-dt-botnav-seph-coll-US.jpg?imwidth=294"/>
                </div>
            </MenuList>
          </Menu>
          <Menu isOpen={isOpenModal8}>
          <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: ("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpenModal8}
                onMouseLeave={onCloseModal8}
            >
                Gifts{isOpenModal8 ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList  display="flex" justifyContent="space-evenly" 
            style={{color:"black" ,padding:"20px",width:"1318px"}} 
            onMouseEnter={onOpenModal8} 
            onMouseLeave={onCloseModal8}>
            <div >
                <MenuItem fontWeight={"bold"}>
                All Gifts</MenuItem>
                <MenuItem fontWeight={"bold"}>Gift Finder</MenuItem>
                <MenuItem  fontWeight={"bold"}>Gift Cards</MenuItem>
                <MenuItem fontWeight={"bold"}>Value & Gift Sets</MenuItem>
                <MenuItem  fontWeight={"bold"}>By Price</MenuItem>
                <MenuItem  >$10 and under</MenuItem>
                <MenuItem  >$15 and under</MenuItem>
                <MenuItem  >$25 and under</MenuItem>
                <MenuItem  >$50 and under</MenuItem>
                <MenuItem  >$75 and under</MenuItem>
                <MenuItem  >$100 and under</MenuItem>

                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>
                Value & Gift Sets</MenuItem>
                <MenuItem  fontWeight={"bold"}>By Category</MenuItem>
                <MenuItem >Makeup</MenuItem>
                <MenuItem >Skincare</MenuItem>
                <MenuItem >Hair</MenuItem>
                <MenuItem >Fragrance</MenuItem>
                <MenuItem >Candles & Home Scents</MenuItem>
                <MenuItem >Tools</MenuItem>
                <MenuItem >Brush Sets & Accessories</MenuItem>
                <MenuItem >Bath & Body</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>
                By Recipient</MenuItem>
                <MenuItem  >For Her</MenuItem>
                <MenuItem >For Him</MenuItem>
                <MenuItem >For Teenagers</MenuItem>
                <MenuItem >For Them</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>
                Top Rated Gifts</MenuItem>
                <MenuItem fontWeight={"bold"}>Mini Size</MenuItem>
                <MenuItem fontWeight={"bold"}>Only at Sephora</MenuItem>
                <MenuItem fontWeight={"bold"}>Luxury</MenuItem>
                <MenuItem fontWeight={"bold"}>Gift Finder</MenuItem>
                </div>
                <div>
                    <Image src="https://www.sephora.com/contentimages/meganav/large/site-desktop-global-navigation-button-evergreen-gift-card.jpg?imwidth=294"/>
                </div>

            </MenuList>
          </Menu>
          <Menu isOpen={isOpenModal9}>
          <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: ("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpenModal9}
                onMouseLeave={onCloseModal9}
            >
                Beauty under $20{isOpenModal9 ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList  display="flex" justifyContent="space-evenly" 
            style={{color:"black" ,padding:"20px",width:"1318px"}} 
            onMouseEnter={onOpenModal9} 
            onMouseLeave={onCloseModal9}>
            <div >
                <MenuItem fontWeight={"bold"}>
                Makeup Under $20</MenuItem>
                <MenuItem fontWeight={"bold"}>Skincare Under $20</MenuItem>
                <MenuItem  fontWeight={"bold"}>Hair Under $20</MenuItem>
                <MenuItem fontWeight={"bold"}>Fragrance Under $20</MenuItem>
                <MenuItem  fontWeight={"bold"}>Tools & Brushes Under $20</MenuItem>
                <MenuItem  fontWeight={"bold"}>Bath & Body Under $20</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>
                Sephora Collection Under $20</MenuItem>
                <MenuItem >Makeup</MenuItem>
                <MenuItem >Skincare</MenuItem>
                <MenuItem >Hair</MenuItem>
                <MenuItem >Fragrance</MenuItem>
                <MenuItem >Candles & Home Scents</MenuItem>
                <MenuItem >Tools</MenuItem>
                <MenuItem >Brush Sets & Accessories</MenuItem>
                <MenuItem >Bath & Body</MenuItem>
                </div>
                <div>
                    <Image src="https://www.sephora.com/contentimages/meganav/large/2022-07-08-sc-bse-concealer-site-desktop-global-navigation-button-beauty-under-20.jpg?imwidth=294"/>
                </div>

            </MenuList>
          </Menu>
          <Menu isOpen={isOpenModal10}>
          <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: ("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpenModal10}
                onMouseLeave={onCloseModal10}
            >
                Sale and Offers{isOpenModal10 ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList  display="flex" justifyContent="space-evenly" 
            style={{color:"black" ,padding:"20px",width:"1318px"}} 
            onMouseEnter={onOpenModal10} 
            onMouseLeave={onCloseModal10}>
            <div >
                <MenuItem fontWeight={"bold"}>
                All Sale</MenuItem>
                <MenuItem fontWeight={"bold"}>Makeup</MenuItem>
                <MenuItem  fontWeight={"bold"}>Skincare</MenuItem>
                <MenuItem fontWeight={"bold"}>Haircare</MenuItem>
                <MenuItem  fontWeight={"bold"}>Fragrance</MenuItem>
                <MenuItem  fontWeight={"bold"}>Bath & Body</MenuItem>
                <MenuItem  fontWeight={"bold"}>Mini Size</MenuItem>
                </div>
                <div>
                    <MenuItem fontWeight={"bold"}>Beauty Offers</MenuItem>
                </div>
                <div>
                    <Image src="https://www.sephora.com/contentimages/meganav/large/slotting-sale-generic-site-desktop-global-navigation-button_copy-only.jpg?imwidth=294"/>
                </div>
                <div>
                    <Image src="https://www.sephora.com/contentimages/meganav/large/site-desktop-global-navigation-button-evergreen-beauty-offers-abundance.jpg?imwidth=294"/>
                </div>
            </MenuList>
          </Menu>
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
    </>
  );
}
