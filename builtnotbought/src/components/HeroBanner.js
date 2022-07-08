import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/HeroBanner.jpg';

const HeroBanner = () => (
<Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color= "hot pink" fontWeight="600" fontSize="65px">Fake? Never</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
    All Growth No Regret
 
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
  Personalize Your Workouts
    </Typography>
    <Stack>
    <a href="#workouts" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Workouts</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
Workout
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
</Box>
);

export default HeroBanner;
