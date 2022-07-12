import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/body-part.png';

const BodyPart = ({ item, setMuscle, Muscle }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="Muscle-card"
    sx={Muscle === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setMuscle(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default Muscle;