import React from 'react'
import './Footer.css'

function Footer() {

    let year = new Date().getFullYear();

  return (
    <div className='footer' >
        <div>&copy; {year} -  All Copyrights by Spark Inventive.</div>
    </div>
  )
}

export default Footer;