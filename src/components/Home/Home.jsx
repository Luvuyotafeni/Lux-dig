import React from 'react'
import Pro16 from './Assets/16 Pro.jpg'
import './Home.css'

const Home = () => {
  return (
    <div>
        <section>
            <div className='container mt-5 mb-5'>
                <div className='f_flex'>
                    <div className="home_info">
                        <div>
                            <h3>Luxurous Digitals</h3>
                            <h5>Shop with us, shop digitally</h5>
                        </div>
                        <div className='buttons'>
                            <button className='btn btn-dark'>Shop all</button>
                            <button className='ml-2'>Contact Us</button>
                        </div>
                    </div>
                    <div className='imgHome'>
                        <img src={Pro16} alt='iPhone 16'/>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <h2 className='text-center'>About Us</h2>
            <div className='container f_flex'>
                <div></div>
                <div></div>
            </div>
        </section>
    </div>
  )
}

export default Home
