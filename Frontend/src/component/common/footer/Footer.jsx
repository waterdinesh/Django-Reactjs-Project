import React from "react"
import "./footer.css"
import logo from "../../images/trainer/logo-white.svg";
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            <img src={logo} alt='' className="boxlogoimg" />
            <div className="faicon">
            <h3><FaFacebookF/></h3>
            <h3><FaInstagram /></h3>
            <h3><FaTwitterSquare/></h3>
            <h3><FaYoutube /></h3>
            </div>
           
          </div>
          <div className='box'>
            <h6>NEWS</h6>
             <h6>SCHEDULE</h6>
             <h6>BOOK AN APPOINTMENT</h6>
             <h6>TRAINERS</h6>
             <h6>FIRST TIMERS</h6>
          
          </div>
          <div className='box'>
            <h6>PERSONAL TRAINING</h6>
            <h6>SHOP</h6>
            <h6>ABOUT OUR CLUB</h6>
            <h6>CONTACT</h6>
          </div>
          <div className='box'>
            <h5>WE DON’T KEEP OUR FITNESS SECRETS</h5>
            {/*<i className='fa fa-chevron-right'></i>*/}
            <h6>Subscribe now and thank us later</h6>
            <div className="boxu">
            <input type="text" placeholder="your@gmail.com"/>
            <button className="bhu">SUBSCRIBE</button>
            </div>
            
          </div>
        </div>
      </footer>
      <div className='legal '>
        <div className='container flexSB'>
          <p>© all rights reserved</p>
          <p>
            made with <i className='fa fa-heart'></i> by dinesh
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer