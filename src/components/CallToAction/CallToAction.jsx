import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const CallToAction = () => {
  return (
    <Box
      sx={{
        width: '100%', // Full width
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 20px',
        backgroundColor: '#333', // Dark background to reflect a martial arts vibe
        borderRadius: '8px',
        boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.3)', // Stronger shadow for depth
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="https://via.placeholder.com/1920x1080/333333/ffffff?text=Martial+Arts" // Replace with martial arts-themed image URL
        alt="Martial Arts Background"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.2,
          zIndex: -1,
        }}
      />

      {/* Section Tagline */}
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 400,
          color: '#e63946', // Red, often associated with martial arts
          marginBottom: '10px',
          fontSize: '1.25rem',
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}
      >
        Strength. Discipline. Honor.
      </Typography>

      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          color: '#fff', // White text for contrast
          marginBottom: '20px',
          fontFamily: 'Martial Arts Font, sans-serif', // Use a bold and sharp font, replace with actual martial arts font if needed
        }}
      >
        Unleash Your Inner Warrior
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          color: '#f1faee', // Light text for readability
          maxWidth: '600px',
          marginBottom: '40px',
          lineHeight: 1.6,
        }}
      >
        Transform your body and mind with the power of martial arts. 
        Unlock your potential and become a champion in every aspect of life.
      </Typography>

      {/* Buttons */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            color="error" // Use red to match martial arts color scheme
            sx={{
              padding: '12px 28px',
              fontSize: '16px',
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: '24px',
              backgroundColor: '#e63946', // Martial arts red
              ':hover': {
                backgroundColor: '#c0392b', // Darker red on hover
              },
            }}
          >
            Join the Fight
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="error"
            sx={{
              padding: '12px 28px',
              fontSize: '16px',
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: '24px',
              borderColor: '#e63946',
              color: '#e63946',
              ':hover': {
                backgroundColor: '#e63946',
                color: '#fff',
              },
            }}
          >
            Learn the Art
          </Button>
        </Grid>
      </Grid>

      {/* Highlighted Feature */}
      <Box
        sx={{
          marginTop: '60px',
          padding: '20px',
          backgroundColor: '#1d3557', // Dark blue background
          borderRadius: '8px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: '#e63946', // Red text for feature
            marginBottom: '10px',
          }}
        >
          Master Your Skills
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#fff',
            fontSize: '1rem',
          }}
        >
          Harness the power of martial arts training and elevate your life to new heights.
        </Typography>
      </Box>
    </Box>
  );
};

export default CallToAction;
