import React, {useState} from 'react'
import data from './Produts-api'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

const Products = () => {

  const[selectedProduct, setSelectedProduct] = useState(null);

  const handleShowModal = (product) => {
    setSelectedProduct(product);
  };
  return (
    <div className='container'>
      <div className='row'>
        {data.map((item, index) => (
          item.models.map(model, idx) => (
            <div className='col-md-3 mb-4' key={`${index}-${idx}`}>
              <div className='card'>
                <img src=''/>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  )
}

export default Products