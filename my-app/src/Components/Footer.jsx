import { Button, Heading, Img, Input, Link } from "@chakra-ui/react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
    <footer>
            <div className={styles.foot}>
        <div className={styles.store}>
          <div className={styles.icon}>
            <img
              src="https://www.sephora.com/img/ufe/icons/find-store.svg"
              alt=""
            />
            <div className={styles.box}>
              <h5 className={styles.bold}>Find a Store</h5>
              <p className={styles.ptag}>Coose Your Store</p>
            </div>
          </div>
          <div className={styles.icon}>
            <img src="" alt="" />
            <div className={styles.box}>
              <h5 className={styles.bold}>Live Beauty Help</h5>
              <p className={styles.ptag}>Chat is unavailable</p>
            </div>
          </div>
          <div className={styles.icon}>
            <img src="https://www.sephora.com/img/ufe/icons/app.svg" alt="" />
            <div className={styles.box}>
              <h5 className={styles.bold}>Get the App</h5>
              <p className={styles.ptag}>Text “APP” to 36681</p>
            </div>
          </div>
          <div className={styles.icon}>
            <img
              src="https://www.sephora.com/img/ufe/icons/sms-ko.svg"
              alt=""
            />
            <div className={styles.box}>
              <h5 className={styles.bold}>Get Sephora Text</h5>
              <p className={styles.ptag}>sign up Now</p>
            </div>
          </div>
          <div style={{ width: "35%" }} className={styles.icon}>
            <img
              src="https://www.sephora.com/img/ufe/icons/cc-outline-ko.svg"
              alt=""
            />
            <div className={styles.box}>
              <h5 className={styles.bold}>Sephora Credit Card Program</h5>
              <p className={styles.ptag}>
                Want 25% off your Sephora purchase1? DETAILS
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footermain}>
          <div>
            <h5>About Sephora</h5>
            <div
              className={styles.links}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Link>About Sephora</Link>
              <Link>Newsroom</Link>
              <Link>Careers</Link>
              <Link>Sephora Social Impact</Link>
              <Link>Supply Chain Transparency</Link>
              <Link>Affiliates</Link>
              <Link>Sephora Events</Link>
              <Link>Gift Cards</Link>
              <Link>Sephora Global Sites</Link>
              <Link>Diversity and Inclusion</Link>
              <Link>Checkout on Instagram</Link>
              <Link>Sephora Accelerate</Link>
            </div>
          </div>
          <div>
            <h5>My Sephora</h5>
            <div
              className={styles.links}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Link>Beauty Insider</Link>
              <Link>Sephora Credit Card</Link>
              <Link>Community Profile</Link>
              <Link>Order Status</Link>
              <Link>Purchase History</Link>
              <Link>Account Settings</Link>
              <Link>Beauty Advisor Recommendations</Link>
              <Link>Beauty Offers</Link>
              <Link>Quizzes & Buying Guides</Link>
              <Link>Rewards Bazaar</Link>
              <Link>Loves</Link>
              <Link>Book a Reservation</Link>
            </div>
          </div>
          <div>
            <h5>Help</h5>
            <div
              className={styles.links}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Link>Customer Service</Link>
              <Link>Returns & Exchanges</Link>
              <Link>Delivery and Pickup Options</Link>
              <Link>Shipping</Link>
              <Link>Billing</Link>
              <Link>International Shipments</Link>
              <Link>Beauty Services FAQ</Link>
              <Link>Sephora at Kohl's</Link>
              <Link>Sephora Inside JCPenney</Link>
              <Link>Store Locations</Link>
            </div>
          </div>
          <div>
            <h5>Region & Language</h5>
            <div
              className={styles.links}
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "30px",
              }}
            >
              <div style={{ display: "flex", gap: "15px" }}>
                <img
                  style={{ width: "25px" }}
                  src="https://www.sephora.com/img/ufe/flags/us.svg"
                  alt=""
                />
                <p>United States - English</p>
              </div>
              <div style={{ display: "flex", gap: "15px" }}>
                <img
                  style={{ width: "25px" }}
                  src="https://www.sephora.com/img/ufe/flags/ca.svg"
                  alt=""
                />
                <p>Canada - English</p>
              </div>
              <div style={{ display: "flex", gap: "15px" }}>
                <img
                  style={{ width: "25px" }}
                  src="https://www.sephora.com/img/ufe/flags/ca.svg"
                  alt=""
                />
                <p>Canada- English</p>
              </div>
            </div>
          </div>
          <div>
            <Heading as="h2" size="lg">
              We Belong to <br />
              Something Beautiful
            </Heading>
          </div>
        </div>
          <div style={{width:"35%", lineHeight:"40px", height:"90px",marginLeft:"70%",marginTop:"-150px"}}>
                 <h6>Sign up for Sephora Emails</h6>
                 <Input w="60%" focusBorderColor='none' placeholder='Enter your email address ' />
                 <Button colorScheme='whiteAlpha' bg="black" border="1px solid" marginLeft="10px" marginBottom="6px" borderRadius="1.2rem">
                      Sign Up
               </Button>
          </div>


          <div className={styles.socialicon}>
             <div className={styles.texts}>
                <p>© 2022 Sephora USA, Inc. All rights reserved.</p>
                <div style={{display:"flex" ,gap:"20px" ,fontSize:"14px"}}>
                <Link>Privacy Policy</Link>
                <Link>Terms of Use </Link>
                <Link>Accessibility</Link>
                <Link>Sitemap</Link>
                <Link>CA - Do Not Sell My Personal Information</Link>
                </div>
               
                <p>1-877-737-4672    TTY: 1-888-866-9845</p>

             </div>
             <div  className={styles.mediahandle}>
               <Link> <Img src="https://www.sephora.com/img/ufe/icons/instagram-ko.svg"/></Link>
               <Link>  <Img src="https://www.sephora.com/img/ufe/icons/facebook-ko.svg"/></Link>
               <Link>  <Img src="https://www.sephora.com/img/ufe/icons/twitter-ko.svg"/></Link>
               <Link>  <Img src="https://www.sephora.com/img/ufe/icons/youtube-ko.svg"/></Link>
               <Link> <Img src="https://www.sephora.com/img/ufe/icons/pinterest-ko.svg"/></Link>
               <Link> <Img src="https://www.sephora.com/img/ufe/icons/tiktok-ko.svg"/></Link>
             </div>

         </div>
      </div>
    </footer>
     
    </>
  );
}
export default Footer;
