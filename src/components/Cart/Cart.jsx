import React from 'react'

const Cart = ({cartItems, handleDeleteFromCart}) => {
  return (
    <div className='container mt-4'>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <h1>Your cart is empty</h1>
      ) : (
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Version</th>
              <th>Price</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={item.image} alt={item.version} style={{width: '50px'}}/>
                </td>
                <td>{item.version}</td>
                <td>{item.desc}</td>
                <td><button className='btn btn-danger' onClick={() => handleDeleteFromCart(index)}> delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) }

    </div>
  )
}

export default Cart