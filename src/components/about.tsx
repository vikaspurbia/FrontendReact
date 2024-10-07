import React from 'react';
import { Typography, Box, Button, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8">
      <Typography variant="h3" gutterBottom className="text-gray-900 font-bold mb-6">
        About Our Product
      </Typography>
      
      <Box maxWidth="800px" className="text-center mb-12">
        <Typography variant="h5" gutterBottom className="text-gray-800 font-medium">
          Welcome to Our Innovative Product
        </Typography>
        <Typography variant="body1" className="text-gray-700 mt-4">
          Our product is designed to streamline processes, enhance productivity, and provide users with a seamless experience. We believe in the power of technology to simplify tasks and improve overall efficiency.
        </Typography>
      </Box>

      {/* Product Features Section */}
      <Grid container spacing={4} className="mb-12">
        <Grid item xs={12} md={4}>
          <Card className="bg-white shadow-lg" sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom className="text-blue-600 font-semibold">
                Feature 1: User-Friendly Interface
              </Typography>
              <Typography variant="body2" className="text-gray-700">
                Our intuitive interface makes it easy for anyone to navigate and use the product efficiently, reducing the learning curve and boosting productivity.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="bg-white shadow-lg" sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom className="text-blue-600 font-semibold">
                Feature 2: Advanced Analytics
              </Typography>
              <Typography variant="body2" className="text-gray-700">
                Gain valuable insights through our powerful analytics tools that help you track performance and make informed decisions to drive growth.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="bg-white shadow-lg" sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom className="text-blue-600 font-semibold">
                Feature 3: Seamless Integration
              </Typography>
              <Typography variant="body2" className="text-gray-700">
                Our product integrates effortlessly with existing systems, ensuring a smooth transition and minimizing disruption to your workflow.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Call to Action */}
      <Box className="text-center">
        <Typography variant="h6" gutterBottom className="text-gray-800">
          Ready to revolutionize your workflow?
        </Typography>
        <Typography variant="body1" className="text-gray-700 mb-4">
          Join countless users who have transformed their processes with our product. Experience the difference today!
        </Typography>
        <Button
          component={Link}
          to="/contact"
          sx={{
            color: 'white',
            backgroundColor: '#1E88E5',
            '&:hover': { backgroundColor: '#1565C0' },
            marginX: 1,
            paddingX: 3,
            paddingY: 1,
            borderRadius: 2,
          }}
        >
          Contact Us
        </Button>
      </Box>
    </div>
  );
};

export default About;
