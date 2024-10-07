import React, { useState } from 'react';
import { Container, List, ListItem, ListItemText, Typography, Button } from '@mui/material';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Dummy data
    { id: 1, name: 'Product 1', price: 29.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 49.99, quantity: 1 },
  ]);

  const handleCheckout = () => {
    alert('Proceed to checkout');
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 4 }}>
        Shopping Cart
      </Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`Price: $${item.price} x ${item.quantity}`}
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" sx={{ mt: 4 }}>
        Total: ${totalPrice.toFixed(2)}
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleCheckout}>
        Proceed to Checkout
      </Button>
    </Container>
  );
};

export default Cart;
