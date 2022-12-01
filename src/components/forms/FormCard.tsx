import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BasicForm } from './BasicForm';
import { Container } from '@mui/material';
import '../../css/card.css'

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function FormCard() {
  return (
    <Container className="card-container" maxWidth="sm">
    <Card className="card" sx={{ minWidth: 100 }}>
      <CardContent>
      <BasicForm />
      </CardContent>
    </Card>
    </Container>
  );
}