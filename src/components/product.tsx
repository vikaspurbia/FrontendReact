import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from '@mui/material';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

// Sample data simulating an API response for products
const sampleProducts: Product[] = [
    {
        id: 1,
        name: 'Smartphone X',
        description: 'Latest model with high-end specs, great camera, and excellent battery life.',
        price: 999.99,
        imageUrl: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg',
      },
      {
        id: 2,
        name: 'Wireless Headphones',
        description: 'Noise-cancelling over-ear headphones with excellent sound quality and comfort.',
        price: 299.99,
        imageUrl: 'https://media.istockphoto.com/id/1412240771/photo/headphones-on-white-background.jpg?s=612x612&w=is&k=20&c=MhI4ip5_ZfCj7DgkOQI7ZAIwt9T2SEgQtB10tf8IB2g=',
      },
      {
        id: 3,
        name: 'Smartwatch Pro',
        description: 'Advanced smartwatch with health monitoring, fitness tracking, and GPS.',
        price: 199.99,
        imageUrl: 'https://media.istockphoto.com/id/525575671/vector/smart-watch-isolated-with-icons-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=2waziDObLLmI3pmCngMbqTMHSI6TQRXp4DQ7_zRGikI=',
      },
      {
        id: 4,
        name: 'Gaming Laptop',
        description: 'High-performance gaming laptop with a fast processor and powerful GPU.',
        price: 1499.99,
        imageUrl: 'https://media.istockphoto.com/id/505227671/photo/gamer-laptop-with-video-game.jpg?s=612x612&w=0&k=20&c=uOSghomu1OWFE4-joIdLlgd3Pz-uBz211oF4aBydflo=',
      },
      {
        id: 5,
        name: 'Digital Camera',
        description: 'Compact camera with 20MP sensor, 4K video recording, and a powerful zoom lens.',
        price: 799.99,
        imageUrl: 'https://media.istockphoto.com/id/147747269/photo/dslr-camera-on-white-background.jpg?s=612x612&w=0&k=20&c=yN1f5bZ6sb32AykN3pTISmwaq5nhE7ePs8rfpk3IENc=',
      },
      {
        id: 6,
        name: 'Bluetooth Speaker',
        description: 'Portable Bluetooth speaker with deep bass and long battery life.',
        price: 99.99,
        imageUrl: 'https://media.istockphoto.com/id/1335374517/vector/black-bluetooth-speaker-with-power-blue-lead-on-white-background-eps10-vector-illusration.jpg?s=612x612&w=0&k=20&c=FJHzQf24mszeen0xJJz_NQdrm89sGau_CiYJM-_-y9o=',
      },
      {
        id: 7,
        name: '4K Ultra HD TV',
        description: 'Stunning 4K Ultra HD TV with vibrant colors and smart features.',
        price: 799.99,
        imageUrl: 'https://media.istockphoto.com/id/613753096/photo/big-led-tv-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=91E1-t5LhjhuwK7Xpd_LN44GYUNlb27_6xs9ov82WCM=',
      },
      {
        id: 8,
        name: 'Gaming Mouse',
        description: 'Ergonomic gaming mouse with customizable buttons and RGB lighting.',
        price: 49.99,
        imageUrl: 'https://media.istockphoto.com/id/1351688705/photo/black-wireless-mouse-top-view-of-gamer-mouse-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=cKSYDBrC9YjtW0WNRs46FMeznVIWHsU-CHRnddu-AJs=',
      },
];

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Simulate API call delay using setTimeout for demo purposes
    setTimeout(() => {
      setProducts(sampleProducts);
    }, 500);
  }, []);

  return (
    <Container sx={{ my: 4 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Featured Products
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
        Discover our latest collection of gadgets and electronics.
      </Typography>

      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200" // Set a fixed height for consistency
                image={product.imageUrl}
                alt={product.name}
                sx={{
                  objectFit: 'cover', // Maintain aspect ratio while filling the space
                  borderBottom: '1px solid #e0e0e0',
                }}
              />
              <CardContent sx={{ flexGrow: 1, padding: '16px' }}>
                <Typography gutterBottom variant="subtitle1" component="div" fontWeight="bold" fontSize="1rem">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {product.description.length > 80
                    ? `${product.description.substring(0, 80)}...`
                    : product.description}
                </Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mt: 'auto' }}>
                  <Typography variant="body1" color="primary" fontWeight="bold">
                    ${product.price.toFixed(2)}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', p: 1 }}>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  sx={{
                    px: 2,
                    py: 0.5,
                    borderRadius: '15px',
                    fontSize: '0.875rem',
                    '&:hover': {
                      backgroundColor: '#1e88e5',
                    },
                  }}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
