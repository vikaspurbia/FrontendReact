import React, { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface ProductData {
  id: number; // Ensure this matches your backend
  name: string; // Updated to match the CreateProduct component
  price: number | ''; // Price as number or empty string
  stock: number | ''; // Stock as number or empty string
  description: string; // Optionally, if you want to display it
}

const ProductList: React.FC = () => {
  const [productList, setProductList] = useState<ProductData[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/'); // Ensure this is the correct endpoint
        setProductList(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8">
      {/* Page Title */}
      <Typography variant="h4" gutterBottom className="text-gray-900 font-extrabold text-center mb-2 mt-4">
        Product Management Dashboard
      </Typography>

      {/* Button to Create New Product */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-4">
        <Button
          className="bg-blue-600 text-white font-medium py-2 px-6 rounded-full shadow-sm hover:bg-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
          component={Link}
          to="/create-product"
        >
          Create New Product
        </Button>
      </div>

      {/* Product Table */}
      <TableContainer className="w-full max-w-6xl bg-white shadow-xl rounded-lg overflow-hidden">
        <Table>
          <TableHead className="bg-blue-400">
            <TableRow>
              {['Product Name', 'Category','Price', 'Stock'].map((header) => (
                <TableCell key={header} className="font-semibold text-white px-4 py-3 text-center uppercase tracking-wider">
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.map((product) => (
              <TableRow key={product.id} className="hover:bg-blue-200 transition duration-200 ease-in-out">
                <TableCell className="p-4 border-b border-gray-200 text-center text-gray-800">{product.name}</TableCell>
                <TableCell className="p-4 border-b border-gray-200 text-center text-gray-800">{product.description}</TableCell>
                <TableCell className="p-4 border-b border-gray-200 text-center text-gray-800">{product.price}</TableCell>
                <TableCell className="p-4 border-b border-gray-200 text-center text-gray-800">{product.stock}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductList;
