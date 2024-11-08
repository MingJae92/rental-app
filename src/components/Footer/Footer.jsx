import React from 'react';
import { Box, Container, Grid, Typography, Link, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Box
        component="footer"
        sx={{
          bgcolor: 'black',
          color: 'white',
          py: 2,
          width: '100%',
          position: 'relative', // No fixed positioning
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="space-evenly">
            {/* About Section */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h6" gutterBottom>
                  About Denton
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  We are committed to providing top-notch legal services worldwide. Our values and expertise define our approach.
                </Typography>
              </motion.div>
            </Grid>

            {/* Links Section */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h6" gutterBottom>
                  Quick Links
                </Typography>
                {["Our Services", "Careers", "Contact Us", "Privacy Policy"].map((text) => (
                  <Box key={text} sx={{ mb: 1 }}>
                    <Link href="#" color="inherit" underline="hover">
                      {text}
                    </Link>
                  </Box>
                ))}
              </motion.div>
            </Grid>

            {/* Contact Section */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h6" gutterBottom>
                  Contact Us
                </Typography>
                <Typography variant="body2" sx={{ color: 'white', mb: 1 }}>
                  Email: contact@denton.co.uk
                </Typography>
                <Typography variant="body2" sx={{ color: 'white', mb: 1 }}>
                  Phone: +44 123 456 7890
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  Address: 123 Denton Lane, London, UK
                </Typography>
              </motion.div>
            </Grid>

            {/* Newsletter Section */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h6" gutterBottom>
                  Subscribe to Our Newsletter
                </Typography>
                <Typography variant="body2" sx={{ color: 'white', mb: 2 }}>
                  Stay updated with our latest news and offers.
                </Typography>
                <Box
                  component="form"
                  noValidate
                  autoComplete="off"
                  sx={{ display: 'flex', gap: 1 }}
                >
                  <TextField
                    variant="outlined"
                    placeholder="Enter your email"
                    type="email"
                    size="small"
                    sx={{
                      bgcolor: 'white',
                      borderRadius: 1,
                      input: { color: 'black' },
                    }}
                  />
                  <Button variant="contained" color="primary" size="small">
                    Subscribe
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          {/* Footer Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box textAlign="center" pt={2} borderTop={1} borderColor="grey.800">
              <Typography variant="body2" sx={{ color: 'white' }}>
                © {new Date().getFullYear()} Denton. All rights reserved.
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </motion.footer>
  );
};

export default Footer;
