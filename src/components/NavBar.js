import React,{useState} from 'react'
// import { NavLink } from 'react-router-dom';
import './css/NavBar.css';
import ProfilePic from './ProfilePic';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
function NavBar() {
     const [colour, setColour] = useState(false);
      const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]); 
    const pushUp = () => {
        if (window.scrollY >= 103) {
            setColour(true);
        }
        else {
            setColour(false);
        }
    }
    window.addEventListener('scroll', pushUp);
    return (
        <>
        <div className="navBar">

            <img  src="images/logo name.png" alt="INCODER"/>
         
            </div>
            {colour ?  <motion.div  animate={{x:-500,y:-50,scale:0.6}} transition={{duration:0.5,type:'ease',stiffness:100}} className="profile"><ProfilePic/>  
            </motion.div> :  <motion.div  animate={{x:0,y:-10}} transition={{duration:0.5}} className="profile"><ProfilePic/></motion.div> }
           
    </>
    )
}

export default NavBar
