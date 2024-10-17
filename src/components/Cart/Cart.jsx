import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate total price whenever cartItems change
  useEffect(() => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price;
    });
    setTotalPrice(total);
  }, [cartItems]);

  // Sync cart items from localStorage when the component loads or storage is updated
  useEffect(() => {
    const syncCart = () => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(storedCart);
    };

    // Sync cart on component mount
    syncCart();

    // Listen for changes to localStorage
    window.addEventListener('storage', syncCart);

    // Cleanup listener when component unmounts
    return () => {
      window.removeEventListener('storage', syncCart);
    };
  }, []);


  // Handle removing an item from the cart
  const handleRemoveFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index); // Remove the selected item
    setCartItems(updatedCart); // Update the cart state

    // Update localStorage with the new cart
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="container mt-4">
      <h2 className='text-center'>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
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
                  <td><button className="btn btn-danger" onClick={() => handleRemoveFromCart(index)}>
                      Remove
                    </button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-end">
            <p>Total Price: R{totalPrice}</p>
            <button className="btn btn-primary">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
