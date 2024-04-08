import React from 'react'
import './Services.css'

function Services() {
  return (
    <div className='services' id='services'>
        <div className='serviceDetails'>
            <div className='head'><h1>Services</h1></div>
            <div className='serviceContainer'>
            <div className='sloganHead'>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, aperiam?</div>
            </div>
                <div className='serviceBox'>
                    <div className='serviceItem'>
                        <div className='slogan serviceSlogan'>
                            <h2 className='head'>Lorem, ipsum.</h2>
                            <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rem veniam eligendi illum voluptate maxime provident nobis ex incidunt autem?</p>
                            <button>Learn more</button>
                        </div>
                    </div>
                    <div>
                        <div className='slogan serviceSlogan'>
                            <h2 className='head'>Lorem, ipsum.</h2>
                            <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rem veniam eligendi illum voluptate maxime provident nobis ex incidunt autem?</p>
                            <button>Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services