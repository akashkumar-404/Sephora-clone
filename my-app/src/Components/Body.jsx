import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios"
import { Button, ChakraProvider } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const url="https://intense-basin-23894.herokuapp.com/makeup";
const url1="https://intense-basin-23894.herokuapp.com/skincare";
const url2="https://intense-basin-23894.herokuapp.com/skincare?id=50&id=49&id=48&id=47&id=46&id=45&id=44&id=43&id=42&id=41&id=40&id=39&id=38&id=37&id=36&id=35&id=34&id=33&id=32&id=31&id=30&id=29";
const url3="https://intense-basin-23894.herokuapp.com/makeup?id=50&id=49&id=48&id=47&id=46&id=45&id=44&id=43&id=42&id=41&id=40&id=39&id=38&id=37&id=36&id=35&id=34&id=33&id=32&id=31&id=30&id=29";
const post4=[
    {
        "id": 5,
        "image": "https://www.sephora.com/productimages/sku/s2031391-main-zoom.jpg?imwidth=460",
        "title": "The Ordinary",
        "description": "Niacinamide 10% + Zinc 1% Oil Control Serum",
        "rating": "5.4k",
        "price": 7
      },
      {
        "id": 6,
        "image": "https://www.sephora.com/productimages/sku/s2315935-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=460",
        "title": "Supergoop!",
        "description": "Unseen Sunscreen SPF 40 PA+++",
        "rating": "3.1k",
        "price": 20
      },
      {
        "id": 7,
        "image": "https://www.sephora.com/productimages/sku/s2449130-main-zoom.jpg?imwidth=460",
        "title": "Dior",
        "description": "Lip Glow Oil",
        "rating": "726",
        "price": 38
      },
      {
        "id": 8,
        "image": "https://www.sephora.com/productimages/sku/s2532505-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=460",
        "title": "Peace Out",
        "description": "Salicylic Acid Acne Healing Dots",
        "rating": "4.3k",
        "price": "$19.00"
      },
      {
        "id": 9,
        "image": "https://www.sephora.com/productimages/sku/s2181006-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=460",
        "title": "Tatcha",
        "description": "The Dewy Skin Cream Plumping ",
        "rating": "2.8k",
        "price": 22
      },
      {
        "id": 10,
        "image": "https://www.sephora.com/productimages/sku/s2536183-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=460",
        "title": "Summer Fridays",
        "description": "Sheer Skin Tint with Hyaluronic",
        "rating": "127",
        "price": 42
      },
      {
        "id": 33,
        "image": "https://www.sephora.com/productimages/sku/s2148385-main-zoom.jpg?pb=2020-03-sephora-value-2020&imwidth=460",
        "title": "SEPHORA COLLECTION",
        "description": "#LIPSTORIES Lipstick",
        "color": "52 Colors",
        "rating": "3.6k",
        "price": 9
      },
      {
        "id": 34,
        "image": "https://www.sephora.com/productimages/sku/s2372530-main-zoom.jpg?imwidth=460",
        "title": "Anastasia Beverly Hills",
        "description": "Brow Wiz® Ultra-Slim Precision Brow Pencil",
        "color": "12 Colors ",
        "rating": "15.8k",
        "price": 23
      },
      {
        "id": 35,
        "image": "https://www.sephora.com/productimages/sku/s2210482-main-zoom.jpg?imwidth=460",
        "title": "LANEIGE",
        "description": "Lip Glowy Balm",
        "color": "4 Colors",
        "rating": "3.3k",
        "price": 17
      },
      {
        "id": 36,
        "image": "https://www.sephora.com/productimages/sku/s2484954-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=460",
        "title": "ITEM Beauty By Addison Rae",
        "description": "Lip Quip Clean Moisturizing Lip Gloss",
        "color": "4 Colors ",
        "rating": "480",
        "price": 14
      },
      {
        "id": 37,
        "image": "https://www.sephora.com/productimages/sku/s2418135-main-zoom.jpg?imwidth=460",
        "title": "Urban Decay",
        "description": "24/7 Moondust Eyeshadow",
        "color": "5 Colors",
        "rating": "211",
        "price": 22
      },
      {
        "id": 38,
        "image": "https://www.sephora.com/productimages/sku/s2368439-main-zoom.jpg?imwidth=460",
        "title": "Charlotte Tilbury",
        "description": "Airbrush Flawless Setting Spray",
        "color": "1 Color",
        "rating": "1k",
        "price": 20
      },
      {
        "id": 39,
        "image": "https://www.sephora.com/productimages/sku/s2595007-main-zoom.jpg?imwidth=460",
        "title": "Dior",
        "description": "Rouge Dior Forever Transfer-Proof Lipstick",
        "color": "16 Colors",
        "rating": "608",
        "price": 42
      },
      {
        "id": 40,
        "image": "https://www.sephora.com/productimages/sku/s2495497-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=460",
        "title": "Summer Fridays",
        "description": "Lip Butter Balm",
        "color": "3 Colors",
        "rating": "1.6k",
        "price": 23
      },
      {
        "id": 41,
        "image": "https://www.sephora.com/productimages/sku/s2171627-main-zoom.jpg?imwidth=460",
        "title": "Dior",
        "description": "Dior Addict Lip Maximizer Plumping Gloss",
        "color": "10 Colors",
        "rating": "1.8k",
        "price": 38
      },
      {
        "id": 42,
        "image": "https://www.sephora.com/productimages/sku/s2609824-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=460",
        "title": "Saie",
        "description": "Lip Blur Soft-Matte Hydrating Lipstick",
        "color": "6 Colors",
        "rating": "234",
        "price": 24
      }    
]
const post5=[
    {
        "image":"https://www.sephora.com/contentimages/homepage/080922/Homepage/APP/2022-08-23-hp-slide-july-clean-planet-positive-new-makeup-us-rwd-slice.jpeg?imwidth=548",
        "title":"Eco-Conscious & So Effective ",
        "title1":"Exceptional beauty",
        "last":"SHOP NOW▸"
    },
    {
        "image":"https://www.sephora.com/contentimages/homepage/080922/Homepage/RWD/2022-08-18-hp-slide-aug-hair-mbc-us-ca-rwd-slice-NO%20CARETS.jpeg?imwidth=548",
        "title":"Shine on healthy hair",
        "title1":"Get Glossy result with hardworking hair care",
        "last":"LEARN MORE▸"
    },
    {
        "image":"https://www.sephora.com/contentimages/homepage/080922/Homepage/RWD/2022-8-15-hp-slide-fragrance-q3-us-ca-rwd-slice.jpeg?imwidth=548",
        "title":"Let's Find Your Fragrance",
        "title1":"Our tools make it Easy",
        "last":"LEARN MORE▸"
    },
    {
        "image":"https://www.sephora.com/contentimages/homepage/080922/Homepage/RWD/2022-8-13-hp-slide-tatcha-pores-rwd-us-ca-slice.jpeg?imwidth=548",
        "title":"Target pores with Tatcha",
        "title1":"Get clearer-looking, visibly refined skin with these clean must-haves.Only at Sephora.",
        "last":"LEARN MORE▸"
    },
    
]
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  



function ReactLeafCarousel() {
    const [post,setPost]=useState([]);
    const [post1,setPost1]=useState([]);
    const [post2,setPost2]=useState([]);
    const [post3,setPost3]=useState([])
    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
         return  setPost(res.data);
        })
    },[])
    useEffect(()=>{
        axios.get(url1)
        .then((res)=>{
         return  setPost1(res.data);
        })
    },[])
    useEffect(()=>{
        axios.get(url2)
        .then((res)=>{
         return  setPost2(res.data);
        })
    },[])
    useEffect(()=>{
        axios.get(url3)
        .then((res)=>{
         return  setPost3(res.data);
        })
    },[])
    console.log(post)
    const settings = {
        dots: true,
        infinite: false,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const settings1 = {
        dots: true,
        infinite: false,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const settings2 = {
        dots: true,
        infinite: false,
        speed: 900,
        slidesToShow: 1.5,
        slidesToScroll: 1.5,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        Height:'1000px',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
    return ( 
      <> 
        <Navbar/>
        <ChakraProvider>
        <div >
            <div style={{width:'90%',margin:'auto',height:'600px'}}>
            <Slider {...settings2}>

            {
            post5.map(item=>(
                <div>
                <div style={{height:'840px',width:'700px'}}>
                    <div>
                <div className="card" style={{borderRadius:'10px',gap:'20px',height:'700px',width:'800px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',overflow:'hidden'}}>
               <div>
                <div className="card-top" style={{height:'200px',width:'750px',marginLeft:'35px',marginTop:'20px'}}>
                    <img src={item.image} style={{width:'700px'}}  />
                </div>
                </div>
                <div className="card-bottom">
                <h3 style={{marginTop:'350px',textAlign:'left',fontSize:'28px',fontWeight:'bolder',marginLeft:'30px'}}>{item.title}</h3>
                <h3 style={{textAlign:'left',fontSize:'14px',fontWeight:'bold',marginLeft:'30px'}}>{item.title1}</h3>
                <h3 style={{textAlign:'left',fontSize:'17px',fontWeight:'bold',marginLeft:'30px'}}>{item.last}</h3>
                </div>
                <div>
                
                </div>
                
            </div>
           
            </div>
            </div>
            </div>
            ))}
            </Slider>
            </div><br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
            {/* ////////////////////////////end of first big Carusel */}
             <h1 style={{fontWeight:"bolder",marginLeft:'-68rem'}}>JUST DROPPED</h1>
            <div style={{width:'90%',margin:'auto'}}>
            <Slider {...settings}>

            {
            post.map(item=>(
                <div style={{height:'340px'}}>
                <div className="card" style={{borderRadius:'10px',gap:'20px',height:'240px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',overflow:'hidden'}}>
                <div className="card-top" style={{width:'150px',marginLeft:'35px',marginTop:'20px'}}>
                    <img style={{marginLeft:"45px"}} src={item.image} />
                </div>
                <div className="card-bottom" style={{textAlign:"center",marginTop:"2px"}}>
                <h3  >{item.description}</h3>
                </div>
            </div>
            </div>
            ))}
            </Slider>
            </div><br /><br />
            {/* //////////////////////end of first carousel/////////////////////////////// */}
            <h1 style={{fontWeight:"bolder",marginLeft:'-65rem'}}>CHOOSEN FOR YOU</h1>
            <div style={{width:'90%',margin:'auto'}}>
            <Slider {...settings}>

            {
            post1.map(item=>(
                <div>
                <div className="card" style={{borderRadius:'10px',height:'240px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',overflow:'hidden'}}>
                    <div>
                <div className="card-top" style={{width:'150px',marginLeft:'35px',marginTop:'20px'}}>
                    <img style={{marginLeft:"45px"}} src={item.image} />
                </div>
                </div>
                <div className="card-bottom" style={{textAlign:"center",marginTop:"2px"}}>
                <h3>{item.description}</h3>
                </div>
            </div>
            </div>
            ))}
            </Slider>
            </div><br /><br />
            <br />
            {/* //////////////////////////////////end of second carousel////////////////////////////////// */}
            <h1 style={{fontWeight:"bolder",marginLeft:'-69rem'}}>BEST OFFERS</h1>
            <div style={{width:'90%',margin:'auto'}}>
            <Slider {...settings1}>

            {
            post2.map(item=>(
                <div>
                <div className="card" style={{borderRadius:'10px',height:'290px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',overflow:'hidden'}}>
                <div className="card-top" style={{backgroundColor:"red",width:'150px',marginLeft:'120px',marginTop:'20px'}}>
                    <img  src={item.image} />
                </div>
                <div className="card-bottom" style={{textAlign:"center",marginTop:"2px",lineHeight:"30px"}}>
                <h3>{item.title}</h3>
                <h3>{item.description}</h3>
                <button><Button style={{borderRadius:'10px',fontWeight:'bold',backgroundColor:'white',color:'black',border:'1px solid black',width:'90px'}}>APPLY</Button></button>
                </div>
            </div>
            </div>
            ))}
            </Slider>
            </div><br /> <br /> <br />
                {/* ///////////////////////////////////////end of third carousel////////////////////////////////////////////// */}
                {/*//////////////////////////////////////////first div/////////////////////////////////////////////////////////  */}

                <div style={{display:'flex',width:"95%",justifyContent:'space-evenly'}}>
                    <div style={{height:'280px',marginLeft:'63px',width:'450px',borderRadius:'5px',backgroundColor:'#feebef'}}>
                        <h1 style={{fontSize:'30px',fontWeight:"bolder",textAlign:'left'}}>NEW Anastasia Beverly Hills</h1>
                        <h1 style={{fontSize:'15px',textAlign:'left'}}>Get fuller-looking, softer, and smoother brows with the Brow Genius Serum—only at Sephora.</h1>
                        <br />
                        <h1 style={{fontSize:'18px',fontWeight:'bolder',textAlign:'left'}}>SHOP NOW▸</h1>
                    <img style={{width:'118%'}} src="https://www.sephora.com/contentimages/homepage/080922/Homepage/RWD/2022-8-22-hp-marketing-banner-anastasia-beverly-hills-brow-genius-serum-eyebrow-us-ca-rwd-slice.jpeg?imwidth=400" />
                    </div>
                    <div style={{height:'280px',marginLeft:'13px',width:'450px',borderRadius:'5px',backgroundColor:'#a5e1bd'}}>
                    <h1 style={{fontSize:'30px',fontWeight:"bolder",textAlign:'left'}}>Clean Beauty Under $20</h1>
                        <h1 style={{fontSize:'15px',textAlign:'left'}}>New hair and skin heroes powered by feel-good ingredients.</h1>
                        <br />
                        <h1 style={{fontSize:'18px',fontWeight:'bolder',textAlign:'left'}}>SHOP NOW▸</h1>
                    <img src="https://www.sephora.com/contentimages/homepage/080922/Homepage/RWD/2022-8-20-hp-marketing-banner-sc-skincare-haircare-us-ca-rwd-slice.jpeg?imwidth=400"/>
                    </div>
                    <div style={{height:'280px',marginLeft:'13px',width:'450px',borderRadius:'5px',backgroundColor:'#8cb8e9'}}>
                    <h1 style={{fontSize:'30px',fontWeight:"bolder",textAlign:'left'}}>Wedding Beauty Services</h1>
                        <h1 style={{fontSize:'15px',textAlign:'left'}}>Get a makeup look you'll love for all your big events.</h1>
                        <br />
                        <h1 style={{fontSize:'18px',fontWeight:'bolder',textAlign:'left'}}>SHOP NOW▸</h1>
                    <img src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/2022-06-02-hp-marketing-banner-wedding-seasonal-services-desktop-mobile-rwd-us-slice.jpeg?imwidth=400"/>
                    </div>

                </div>
                <br />


                {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <h1 style={{fontWeight:"bolder",marginLeft:'-68rem'}}>SELLING FAST</h1>
            <div style={{width:'90%',margin:'auto'}}>
            <Slider {...settings}>

            {
            post3.map(item=>(
                <div>
                <div className="card" style={{borderRadius:'10px',height:'200px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',overflow:'hidden'}}>
                <div className="card-top" style={{width:'150px',marginLeft:'35px',marginTop:'20px'}}>
                    <img style={{marginLeft:"45px"}} src={item.image} />
                </div>
                <div className="card-bottom" style={{textAlign:"center",marginTop:"2px"}}>
                <h3>{item.title}</h3>
                </div>
            </div>
            </div>
            ))}
            </Slider>
            </div>
            <br />
            {/* ////////////////////////////end of fourth carusel///////////////////////////////////////////////// */}
            <h1 style={{fontWeight:"bolder",marginLeft:'-62rem'}}>BEAUTY INSIDER REWARDS</h1>
            <h1 style={{marginLeft:'-65rem'}}>REDEEM YOUR POINTS</h1>
            <div style={{width:'90%',margin:'auto'}}>
            <Slider {...settings}>

            {
            post4.map(item=>(
                <div>
                <div className="card" style={{borderRadius:'10px',height:'290px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',overflow:'hidden'}}>
                <div className="card-top" style={{width:'150px',marginLeft:'35px',marginTop:'20px'}}>
                    <img style={{marginLeft:"45px"}} src={item.image} />
                </div>
                <div className="card-bottom" style={{textAlign:"center",marginTop:"2px",lineHeight:"30px"}}>
                <h3>{item.title}</h3>
                <Button style={{borderRadius:'10px',backgroundColor:'white',color:'black',border:'1px solid black',fontWeight:'bold',width:'90px'}}>REDEEM</Button>
                <h1 style={{fontWeight:"bolder"}}>100 POINTS</h1>
                </div>
            </div>
            </div>
            ))}
            </Slider>
            </div><br /><br />
        </div>
        </ChakraProvider>
        <Footer/>
        </>
     );
}

export default ReactLeafCarousel ;