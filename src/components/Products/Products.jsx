import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS
import data from './Produts-api'; // Import your data array
import './Products.css'; // Import CSS for styling images
import Cart from '../Cart/Cart'

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product
  const [selectedIndex, setSelectedIndex] = useState(0); // State for selected image index in the carousel
  const [cart, setCart] = useState([]);

  // Function to open modal with the selected product
  const handleShowModal = (product) => {
    setSelectedProduct(product); // Set the selected product to show its details in the modal
    setSelectedIndex(0); // Reset the index to 0 when opening a new modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedProduct(null); // Clear the selected product to hide the modal
  };

  // Handle carousel navigation
  const handlePrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? selectedProduct.gallery.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === selectedProduct.gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  // function to add the selected Item to the cart
const handleAddToCart = () => {
  const newItem = {
    version: selectedProduct.version,
    price: selectedProduct.price,
    space: selectedProduct.space,
    desc: selectedProduct.desc,
    variant: selectedProduct.variants,
    image: selectedProduct.gallery[selectedIndex],
  };

  // Add the new item to the cart state
  const updatedCart = [...cart, newItem];
  setCart(updatedCart);

  // Store the updated cart in localStorage
  localStorage.setItem('cart', JSON.stringify(updatedCart));

  console.log('cart', updatedCart);

  alert('Item added to cart');
};


   // delete from cart function

   const handleDeleteFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
   }

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
                  className="btn-close"
                   data-bs-dismiss="modal"
                    aria-label="Close" 
                  onClick={handleCloseModal}
                >
                  <span aria-hidden="true"></span>
                </button>
              </div>
              <div className="modal-body">
                {/* Carousel for product images */}
                <div
                  id={`carousel-${selectedProduct.version}`}
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    {selectedProduct.gallery.map((img, i) => (
                      <div
                        className={`carousel-item ${i === selectedIndex ? 'active' : ''}`}
                        key={i}
                      >
                        <img
                          src={img}
                          className="d-block"
                          alt={`Slide ${i + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                  <a
                    className="carousel-control-prev"
                    role="button"
                    onClick={handlePrev}
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    role="button"
                    onClick={handleNext}
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
                  onClick={handleAddToCart}
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
      {/* Render the Cart Component and pass the cart data */}
      <Cart cartItems={cart} onRemoveFromCart={handleDeleteFromCart} />
    </div>
  );
};

export default Products;
