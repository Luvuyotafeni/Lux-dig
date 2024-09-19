import React from 'react'

const About = () => {
  return (
    <div>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='card middle-card'>
                <i class='bx bx-time-five'></i>
                <div className='card-body'>
                  <p>24hrs</p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card middle-card'>
                <i class='bx bx-globe' ></i>
                <div className='card-body'>
                  <p>Nationwide Delivery</p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card middle-card'>
                <i class='bx bx-mobile-alt' ></i>
                <div className='card-body'>
                  <p>Fully digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className='text-center'>Our Mission</h2>
        <div className='continer'>
          <p>Our mission is to offer high-quality digital products, including top-tier laptops and iPhones,
            at competitive prices, while ensuring customer satisfaction through transparent business practices,
            timely service, and ongoing support.</p>
        </div>
      </section>
      <section>
        <h2 className='text-center'>Our Vision</h2>
        <div>
          <p>Our vision is to become a global leader in the digital commerce space, recognized not only for the superior 
            quality of the laptops and iPhones we offer but also for our unwavering commitment to customer-centric values. 
            We envision a future where our brand is synonymous with trust, reliability, and technological innovation.
            By constantly evolving and adapting to the latest advancements in technology, 
            we aspire to create a marketplace where customers can confidently shop, knowing they are 
            receiving the best in both product quality and service. We aim to set a benchmark for ethical 
            business practices in the digital sector, where transparency, responsibility, and integrity 
            are at the heart of every transaction.
            In the long term, we seek to be more than just an online retailer—we strive to empower our customers 
            to stay ahead in an ever-changing digital world, providing them with the tools and support needed to 
            thrive in their personal and professional lives.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About