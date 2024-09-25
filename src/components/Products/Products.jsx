import React from 'react';
import data from './Produts-api';  // Import your data array
import './Products.css';  // Import CSS for styling images
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS

const Products = () => {
  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          item.models.map((model, idx) => (
            <div className="col-md-3 mb-4" key={`${index}-${idx}`}>
              <div className="card">
                <img
                  src={model.gallery[0]}  // Show the first image in the gallery
                  className="card-img-top"
                  alt={model.version}
                  data-toggle="modal"
                  data-target={`#modal-${index}-${idx}`} // Target specific modal with unique ID
                  style={{ cursor: 'pointer' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{model.version}</h5>
                  <p className="card-text">Price: R {model.price}</p>
                </div>
              </div>
            </div>
          ))
        ))}
      </div>

      {/* Bootstrap Modals */}
      {data.map((item, index) =>
        item.models.map((model, idx) => (
          <div
            className="modal fade bd-example-modal-lg"
            id={`modal-${index}-${idx}`}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
            key={`modal-${index}-${idx}`}
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="myLargeModalLabel">{model.version}</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {/* Carousel for product images */}
                  <div
                    id={`carousel-${index}-${idx}`}
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      {model.gallery.map((img, i) => (
                        <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                          <img src={img} className="d-block w-100" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                    <a
                      className="carousel-control-prev"
                      href={`#carousel-${index}-${idx}`}
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
                      href={`#carousel-${index}-${idx}`}
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
                  <p><strong>Space:</strong> {model.space.join(', ')}</p>
                  <p><strong>Description:</strong> {model.desc}</p>
                  <p><strong>Available Colors:</strong> {model.variants.join(', ')}</p>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-dark" onClick={() => alert('Added to cart')}>
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;
