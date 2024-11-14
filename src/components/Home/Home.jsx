import React from 'react'
import Pro16 from './Assets/16 Pro.jpg'
import LaptopImg from './Assets/Lenovo slim7x.jpg'
import PhoneImg from './Assets/Iphone 15 pro.jpg'
import BestSeller1 from './Assets/I14.jpg'
import BestSeller2 from './Assets/Lenovo V15 G4.jpg'
import BestSeller3 from './Assets/Iphone 15 pro.jpg'
import iphone from './Assets/iPhone logo.jpg'
import lenovo from './Assets/Lenovo.png'
import hp from './Assets/hp logo.png'
import { Carousel } from 'react-bootstrap'
import './Home.css'

import { useNavigate } from 'react-router-dom'


const Home = () => {

const navigate = useNavigate();

const shopAll = () => {
  navigate('/products')
}

const handleContact = () => {
  navigate('/enquire')
}

  return (
    <div>
      <section>
        <div className='container mt-5 mb-5'>
          <div className='row align-items-center'>
            <div className="col-md-6 home_info text-center">
              <div>
                <h3>Luxurious Digitals</h3>
                <h5>Shop with us, shop digitally</h5>
              </div>
              <div className='buttons'>
                <button className='btn btn-dark' onClick={shopAll}>Shop all</button>
                <button className='btn btn-secondary ml-2' onClick={handleContact}>Contact Us</button>
              </div>
            </div>
            <div className='col-md-6 imgHome text-center'>
              <img src={Pro16} alt='iPhone 16'/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-center'>About Us</h2>
        <div className='container'>
          <div className='row'>
            <div className="col-md-6">
              <img src='' alt='about Us'/>
            </div>
            <div className="col-md-6">
            Based in the vibrant city of Cape Town, South Africa, our digital company specializes 
            in offering a wide range of premium laptops and iPhones, both new and used, 
            to customers across the globe. We believe in the power of technology and its ability 
            to transform lives, which is why we strive to provide only the best products that meet 
            the highest standards of quality.
          At the core of our business are values that define who we are: integrity, trust, responsibility,    
          respect for time, and a deep commitment to our customers. Whether you’re shopping for the latest 
                iPhone or a reliable laptop, we aim to make your online shopping experience as smooth 
                and trustworthy as possible.
            </div>  
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-center mt-5 mb-5'>Our Collections</h2>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mb-4'>
              <div className='card'>
                <img src={LaptopImg} className='category_img' alt='Laptop'/>
                <div className='card-body text-center'>
                  <h5 className='card-title'>Laptop</h5>
                  <button className='btn btn-dark'>Shop Category</button>
                </div>
              </div>
            </div>

            <div className='col-md-6 mb-4'>
              <div className='card'>
                <img src={PhoneImg} className='category_imgp' alt='Phone'/>
                <div className='card-body text-center'>
                  <h5 className='card-title'>Phone</h5>
                  <button className='btn btn-dark'>Shop Category</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-center mt-5 mb-5'>Best Sellers</h2>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 mb-4'>
              <div className='card'>
                <img src={BestSeller1} className='card-img-top' alt='Best Seller 1'/>
                <div className='card-body text-center'>
                  <h5 className='card-title'>Product 1</h5>
                  <p className='card-text'>$999.99</p>
                  <button className='btn btn-dark'>Add to Cart</button>
                </div>
              </div>
            </div>

            <div className='col-md-4 mb-4'>
              <div className='card'>
                <img src={BestSeller2} className='card-img-top' alt='Best Seller 2'/>
                <div className='card-body text-center'>
                  <h5 className='card-title'>Product 2</h5>
                  <p className='card-text'>$799.99</p>
                  <button className='btn btn-dark'>Add to Cart</button>
                </div>
              </div>
            </div>

            <div className='col-md-4 mb-4'>
              <div className='card'>
                <img src={BestSeller3} className='card-img-top' alt='Best Seller 3'/>
                <div className='card-body text-center'>
                  <h5 className='card-title'>Product 3</h5>
                  <p className='card-text'>$699.99</p>
                  <button className='btn btn-dark'>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-center mt-5 mb-5'>Our Brands</h2>
        <div className='container'>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block"
                src={iphone}
                alt="iphone"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={lenovo}
                alt="lenovo"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={hp}
                alt="hp"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

    </div>      
  );
};

export default Home;
