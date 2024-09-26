import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS
import data from './Produts-api'; // Import your data array
import './Products.css'; // Import CSS for styling images

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product

  // Function to open modal with the selected product
  const handleShowModal = (product) => {
    setSelectedProduct(product); // Set the selected product to show its details in the modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedProduct(null); // Clear the selected product to hide the modal
  };

  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) =>
          item.models.map((model, idx) => (
            <div className="col-md-3 mb-4" key={`${index}-${idx}`}>
              <div className="card">
                <img
                  src={model.gallery[0]} // Show the first image in the gallery
                  className="card-img-top"
                  alt={model.version}
                  onClick={() => handleShowModal(model)} // Trigger modal when image is clicked
                  style={{ cursor: 'pointer' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{model.version}</h5>
                  <p className="card-text">Price: R{model.price}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal for the selected product */}
      {selectedProduct && (
        <div
          className="modal fade show"
          role="dialog"
          style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProduct.version}</h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={handleCloseModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Carousel for product images */}
                <div className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    {selectedProduct.gallery.map((img, i) => (
                      <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                        <img src={img} className="d-block" alt={`Slide ${i + 1}`} />
                      </div>
                    ))}
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                <hr />
                <p><strong>Space:</strong> {selectedProduct.space.join(', ')}</p>
                <p><strong>Description:</strong> {selectedProduct.desc}</p>
                <p><strong>Available Colors:</strong> {selectedProduct.variants.join(', ')}</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-dark"
                  onClick={() => alert('Added to cart')}
                >
                  Add to Cart
                </button>
                {/* <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
