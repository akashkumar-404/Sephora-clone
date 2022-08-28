import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Heading,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import styles from "./Makeup.module.css";
import axios from  "axios"
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function getData({sortBy}){
    return axios.get(`https://peaceful-castle-87830.herokuapp.com/makeup?_sort=price&_order=${sortBy}`)
}

function MakeUp() {
  const [data,setData]=useState([])
  const [sortBy,setSort]=useState("ASC")
   
  useEffect(()=>{
      getData({sortBy}).then((res)=>{
        console.log(res.data)
        setData(res.data)
      })
  },[sortBy])
 const handledata=(item)=>{
     axios.post("https://obscure-stream-21364.herokuapp.com/user",item)
 }

  return (
    <>
       <Navbar/>
    <div style={{ display: "flex" }}>
      <div className={styles.slideshow}>
        <p>Makeup</p>
        <Heading as="h4" size="lg">
          Makeup
        </Heading>
        <p>Face(798)</p>
        <p>Vegan (613)</p>
        <p>Eye (889)</p>
        <p>Lip (494)</p>
        <p>Cheek (234)</p>
        <p>Value & Gift Sets (272)</p>
        <p>Makeup Palettes (183)</p>
        <p>Brushes & Applicators (256)</p>
        <p>Accessories (90)</p>
        <p>Nail (56)</p>
        <p className={styles.filter}>Filters</p>
        <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        <Link className={styles.dropdown}> Pickup & Delivery</Link>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <Checkbox isvalid> <Link> Pickup: Choose a Store</Link></Checkbox>
                    <Checkbox isvalid> <Link> Same-Day Delivery: Set Your Location﻿</Link></Checkbox>
                    </AccordionPanel>
                    </AccordionItem>
              </Accordion>
              <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        <Link className={styles.dropdown}> New</Link>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <Checkbox isvalid> <Link> New(205)</Link></Checkbox>
                   
                    </AccordionPanel>
                    </AccordionItem>
              </Accordion>
              <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        <Link className={styles.dropdown}>Sale</Link>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <Checkbox isvalid> <Link> Sale(114)</Link></Checkbox>
                    </AccordionPanel>
                    </AccordionItem>
              </Accordion>
              <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        <Link className={styles.dropdown}>Skin Type</Link>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <Checkbox isvalid> <Link>Combination (709)</Link></Checkbox>
                    <Checkbox isvalid> <Link>Normal (700)</Link></Checkbox>
                    <Checkbox isvalid> <Link>Oily (665)</Link></Checkbox>
                    <Checkbox isvalid> <Link>Dry (653)</Link></Checkbox>
                    <Checkbox isvalid> <Link>Sensitive (102)</Link></Checkbox>
                    </AccordionPanel>
                    </AccordionItem>
              </Accordion>
              <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        <Link className={styles.dropdown}>Coverage</Link>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <Checkbox isvalid> <Link>Full (123)</Link></Checkbox>
                    <Checkbox isvalid> <Link>Medium (182)</Link></Checkbox>
                    <Checkbox isvalid> <Link>Light (176)</Link></Checkbox>
                    <Checkbox isvalid> <Link>Buildable (41)</Link></Checkbox>
                    <Checkbox isvalid> <Link>Sheer (29)</Link></Checkbox>
                    </AccordionPanel>
                    </AccordionItem>
              </Accordion>
              <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        <Link className={styles.dropdown}>Age Range</Link>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <Checkbox isvalid> <Link>16+ (92)</Link></Checkbox>
                    <Checkbox isvalid> <Link>20s (181)</Link></Checkbox>
                    <Checkbox isvalid> <Link>30s (182)</Link></Checkbox>
                    </AccordionPanel>
                    </AccordionItem>
              </Accordion>
              <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        <Link className={styles.dropdown}>Size</Link>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <Checkbox isvalid> <Link>Mini (448)     </Link></Checkbox>
                    <Checkbox isvalid> <Link>Value (31)     </Link></Checkbox>
                    </AccordionPanel>
                    </AccordionItem>
              </Accordion>
              <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        <Link className={styles.dropdown}>Sun Protections</Link>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <Checkbox isvalid> <Link>SPF 30 and under (57)</Link></Checkbox>
                    <Checkbox isvalid> <Link>SPF over 30 (16)</Link></Checkbox>
                    </AccordionPanel>
                    </AccordionItem>
              </Accordion>

      </div>
      <div className={styles.makeupcontent}>
        <div className={styles.filterdiv}>
          <div>
            <p>New</p>
            <img
              src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/new.svg"
              alt=""
            />
          </div>
          <div>
            <p>Bestsellers</p>
            <img
              src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/bestsellers.svg"
              alt=""
            />
          </div>
          <div>
            <p>Clean</p>
            <img
              src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/clean_beauty32.svg"
              alt=""
            />
          </div>
          <div>
            <p>Vegan</p>
            <img
              src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/Icon_Vegan.svg"
              alt=""
            />
          </div>
          <div>
            <p>Mini Size</p>
            <img
              src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/minis.svg"
              alt=""
            />
          </div>
          <div>
            <p>Lip Quiz</p>
            <img
              src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/lip_quiz.svg"
              alt=""
            />
          </div>
          <div>
            <p>Foundation Quiz</p>
            <img
              src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/foundation_quiz.svg"
              alt=""
            />
          </div>
          <div>
            <p>Cruelty-Free</p>
            <img
              src="https://www.sephora.com/contentimages/meganav/icons/CrueltyFreeupdated.svg"
              alt=""
            />
          </div>
        </div>
        <p className={styles.sort}>
          sortby:Relevence
          <Menu>
            <MenuButton
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="0px"
              marginLeft="-7px"
            >
              <ChevronDownIcon />
            </MenuButton>
            <MenuList boxShadow={"box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"}>
              <MenuItem onClick={()=>setSort("asc")}>Price Low To High</MenuItem>
              <MenuItem onClick={()=>setSort("desc")}>Price High To Low</MenuItem>
              <MenuItem>Best Selling</MenuItem>
              <MenuItem>Top Rated</MenuItem>
              <MenuItem>New</MenuItem>
            </MenuList>
          </Menu>
        </p>
        <div className={styles.product}>
             {data&&data.map((item)=>
                  <div className={styles.new}>
                     <img  src={item.image} alt="" />
                     <h5 style={{fontWeight:"bold" ,fontSize:"14px",marginTop:"20px"}}>{item.title}</h5>
                     <p>{item.description}</p>
                     <p style={{color:"gray",fontSize:"14px"}}>{item.color}</p>
                     <p style={{color:"gray",fontSize:"14px"}}>{item.rating}</p>
                     <h4 style={{fontWeight:"bold" ,fontSize:"16px"}}>${item.price}.00</h4>
                     <button class={styles.heart}></button>
                     <button onClick={()=>handledata(item)} className={styles.quick}>Quicklook</button>
                  </div>
             )}
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
}
export default MakeUp;
