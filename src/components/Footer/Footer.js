import React from 'react'
import './Footer.css'
import * as Icon from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <div className="footer text-center my-5">
        <h2>Follow Us</h2>
        <div className="icons my-3">
        <Icon.Github size={30}/>
        <Icon.Instagram size={30}/>
        <Icon.Facebook size={30}/>
        </div>
       
    </div>
  )
}

export default Footer
