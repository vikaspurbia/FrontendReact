import React from 'react';
import { Typography, Box, Grid, TextField, Button, Card, CardContent } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8">
      <Typography variant="h3" gutterBottom className="text-gray-900 font-bold mb-6">
        Contact Us
      </Typography>

      <Box maxWidth="800px" className="text-center mb-12">
        <Typography variant="h6" gutterBottom className="text-gray-800">
          We’d love to hear from you!
        </Typography>
        <Typography variant="body1" className="text-gray-700 mt-4">
          Whether you have a question, feedback, or just want to say hello, feel free to get in touch with us. Our team is here to assist you with anything you need.
        </Typography>
      </Box>

      {/* Contact Information Section */}
      <Grid container spacing={4} justifyContent="center" className="mb-12">
        <Grid item xs={12} md={4}>
          <Card className="bg-white shadow-lg" sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom className="text-blue-600 font-semibold">
                Address
              </Typography>
              <Typography variant="body2" className="text-gray-700">
                1234 Example Street, Suite 567<br />
                City, State, 12345
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="bg-white shadow-lg" sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom className="text-blue-600 font-semibold">
                Email
              </Typography>
              <Typography variant="body2" className="text-gray-700">
                support@example.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="bg-white shadow-lg" sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom className="text-blue-600 font-semibold">
                Phone
              </Typography>
              <Typography variant="body2" className="text-gray-700">
                +1 (123) 456-7890
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Contact Form Section */}
      <Box maxWidth="800px" width="100%" mb={12}>
        <Typography variant="h5" gutterBottom className="text-gray-800 text-center mb-6">
          Send us a message
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Your Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Your Email" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Subject" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Message" variant="outlined" multiline rows={4} />
          </Grid>
          <Grid item xs={12} className="text-center">
            <Button
             sx={{
              color: 'white',
              backgroundColor: '#1E88E5',
              '&:hover': { backgroundColor: '#1565C0' },
              marginX: 1,
              paddingX: 3,
              paddingY: 1,
              borderRadius: 2,
            }}            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Social Media Links */}
      <Box textAlign="center">
        <Typography variant="h6" gutterBottom className="text-gray-800">
          Follow us on social media
        </Typography>
        <Box display="flex" justifyContent="center" mt={2}>
          {/* Social media icons would be added here, but I'll use placeholders */}
          <Button variant="text" color="primary">Facebook</Button>
          <Button variant="text" color="primary">Twitter</Button>
          <Button variant="text" color="primary">LinkedIn</Button>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
