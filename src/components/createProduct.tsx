import React, { useState } from 'react';
import { Button, TextField, Typography, Paper, Container } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface ProductData {
  name: string;
  price: number | '';  // Set price to number or empty string to handle form input
  stock: number | '';  // Same for stock
  description: string;
}

const CreateProduct: React.FC = () => {
  const [productData, setProductData] = useState<ProductData>({
    name: '',
    price: '',
    stock: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Ensure price and stock fields get numeric values
    const updatedValue = name === 'price' || name === 'stock' ? Number(value) : value;

    setProductData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/create', productData); // Your backend endpoint
      console.log('Product created successfully:', response.data);

      // Navigate to another page if needed (e.g., product list)
      navigate('/home'); // Adjust the path as necessary
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8">
      <Container maxWidth="sm" className="mt-8">
        <Paper elevation={3} className="p-4 rounded-lg shadow-lg">
          <Typography variant="h4" gutterBottom align="center" className="text-gray-800">
            Create New Product
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Product Name"
              name="name"
              value={productData.name}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Category"
              name="description"
              value={productData.description}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Price"
              name="price"
              type="number"
              value={productData.price === '' ? '' : productData.price}  // Handle empty value case
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              variant="outlined"
              inputProps={{ min: 0 }} // Ensure non-negative price
            />
            <TextField
              label="Stock Quantity"
              name="stock"
              type="number"
              value={productData.stock === '' ? '' : productData.stock}  // Handle empty value case
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              variant="outlined"
              inputProps={{ min: 0 }} // Ensure non-negative stock quantity
            />
            
            <Button 
              variant="contained" 
              color="primary" 
              type="submit" 
              fullWidth 
              sx={{ mt: 2, padding: '10px', fontSize: '16px' }}
            >
              Create Product
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default CreateProduct;
