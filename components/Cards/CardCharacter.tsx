// import * as React from 'react'
// import Card from '@mui/material/Card'
// import CardContent from '@mui/material/CardContent'
// import CardMedia from '@mui/material/CardMedia'
// import Typography from '@mui/material/Typography'

// export interface CardCharacterProps {
//   name: string
//   description: string
//   image: string
//   id: number
// }

// export default function CardCharacter ({ name, description, image, id }: CardCharacterProps) {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 300 }}
//         image={image}
//         title={`${name} imagen`}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {name}
//         </Typography>
//         <Typography variant="body1" color="text.secondary">
//           {description === ''
//             ? 'Sin descripción disponible'
//             : description
//           }
//         </Typography>
//       </CardContent>
//     </Card>

//   )
// }

// refactor

// import * as React from 'react'
// import Card from '@mui/material/Card'
// import CardContent from '@mui/material/CardContent'
// import CardMedia from '@mui/material/CardMedia'
// import Typography from '@mui/material/Typography'

// export interface CardCharacterProps {
//   name: string
//   description: string
//   image: string
//   id: number
// }

// const CardCharacter: React.FC<CardCharacterProps> = ({
//   name,
//   description,
//   image,
//   id
// }: CardCharacterProps): JSX.Element => {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia sx={{ height: 300 }} image={image} title={`${name} imagen`} />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {name}
//         </Typography>
//         <Typography variant="body1" color="text.secondary">
//           {description === '' ? 'Sin descripción disponible' : description}
//         </Typography>
//       </CardContent>
//     </Card>
//   )
// }

// export default CardCharacter

// refactor3

// import * as React from 'react'
// import Card from '@mui/material/Card'
// import CardContent from '@mui/material/CardContent'
// import CardMedia from '@mui/material/CardMedia'
// import Typography from '@mui/material/Typography'

// export interface CardCharacterProps {
//   name: string
//   description: string
//   image: string
//   id: number
// }

// export default function CardCharacter ({ name, description, image, id }: CardCharacterProps): React.ReactNode {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia sx={{ height: 300 }} image={image} title={`${name} imagen`} />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {name}
//         </Typography>
//         <Typography variant="body1" color="text.secondary">
//           {description === '' ? 'Sin descripción disponible' : description}
//         </Typography>
//       </CardContent>
//     </Card>
//   )
// }

// refactor6

/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

export interface CardCharacterProps {
  name: string
  description: string
  image: string
  id: number
}

const CardCharacter: React.FC<CardCharacterProps> = ({ name, description, image, id }: CardCharacterProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 300 }} image={image} title={`${name} imagen`} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description === '' ? 'Sin descripción disponible' : description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardCharacter
