/* eslint-disable @typescript-eslint/explicit-function-return-type */
/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/

import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import * as React from 'react'

export interface CardCheckoutProps {
  title: string
  image: string
  id: number
  price: number
}

export default function CardCheckout ({ title, image, price, id }: CardCheckoutProps) {
  return (
    <Card sx={{ width: 350 }}>
      <CardMedia sx={{ height: 300 }} image={image} title={`${title} imagen`} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '1rem' }}>
          <span>${price}</span>
        </Typography>
      </CardContent>
    </Card>
  )
}
