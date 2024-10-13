import React from 'react';

const Cart = ({ cartItems = [], onRemoveFromCart }) => {
  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Image</th>
              <th>Version</th>
              <th>Price</th>
              <th>Space</th>
              <th>Available Colors</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td><img src={item.image} alt={item.version} style={{ width: '50px' }} /></td>
                <td>{item.version}</td>
                <td>R{item.price}</td>
                <td>{(item.space || []).join(', ')}</td>
                <td>{(item.variant || []).join(', ')}</td>
                <td>{item.desc}</td>
                <td><button className="btn btn-danger" onClick={() => onRemoveFromCart(index)}>Remove</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
