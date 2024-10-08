import React from 'react'

const Enquire = () => {
  return (
    <div className="container mt-5">
      {/* Contact Details Section */}
      <div className="row">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Phone Number</h5>
              <p className="card-text">0792950603</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Email</h5>
              <p className="card-text">luvuyotafeni012@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Address</h5>
              <p className="card-text">13 Education Street, Belhar 8, Cape Town, 7493</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Contact Us</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="surname">Surname</label>
                  <input type="text" className="form-control" id="surname" placeholder="Enter your surname" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" className="form-control" id="subject" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Enquire