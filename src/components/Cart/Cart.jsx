import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = ({ user }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate total price whenever cartItems change
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
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

  // Function to remove an item from the cart and update localStorage
  const handleRemoveFromCart = async (itemId) => {
    // Update local cart state first
    const updatedCart = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  
    // If the user is logged in, attempt to update the cart on the database
    if (user && user._id) {
      try {
        const response = await axios.put(`http://localhost:3001/cart/${user._id}/remove-item/${itemId}`);
        
        // Check for a successful response and alert the user
        if (response.status === 200) {
          alert("Item successfully removed from the cart!");
        } else {
          alert("Could not update the cart. Please try again.");
        }
      } catch (error) {
        console.error('Error removing item from the database', error);
        alert("Could not update the cart. Please try again.");
      }
    }
  };
  
  
  

  return (
    <div className="container mt-4">
      <h2 className="text-center">Shopping Cart</h2>
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
            {cartItems.map((item) => (
              <tr key={item._id}>
                <td><img src={item.image} alt={item.version} style={{ width: '50px' }} /></td>
                <td>{item.version}</td>
                <td>R{item.price}</td>
                <td>{(item.space || []).join(', ')}</td>
                <td>{(item.variant || []).join(', ')}</td>
                <td>{item.desc}</td>
                <td>
                  <button 
                    className="btn btn-danger" 
                    onClick={() => handleRemoveFromCart(item._id)} // Pass _id instead of index
                  >
                    Remove
                  </button>
                </td>
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
