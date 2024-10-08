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
    </div>
  )
}

export default Enquire