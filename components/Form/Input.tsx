/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, IconButton, TextField, type TextFieldProps } from '@mui/material'
import { useController } from 'react-hook-form'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import React, { type FC } from 'react'

export type Props = {
  control: any
  name: string
  rules?: any
} & TextFieldProps;

const Input: FC<Props> = ({ control, name, rules, ...props }) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false)

  const handleClickShowPassword = () => { setShowPassword((show) => !show) }

  const { field } = useController({
    name,
    control,
    rules
  })

  return (
    <Box
      sx={{
        position: 'relative',
        paddingY: '5px'
      }}>
      <TextField
        style={{ width: '100%', margin: '5px' }}
        {...field} {...props}
        type={(name === 'codigodeseguridad' && !showPassword) ? 'password' : 'text'}
      />

      {name === 'codigodeseguridad' &&
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                  sx={{
                    position: 'absolute',
                    right: '10px',
                    top: '17px'
                  }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
      }
    </Box>
  )
}

export default Input

// import { Box, IconButton, TextField, type TextFieldProps } from '@mui/material'
// import { useController } from 'react-hook-form'
// import { Visibility, VisibilityOff } from '@mui/icons-material'
// import React, { type FC } from 'react'

// export type Props = {
//   control: any
//   name: string
//   rules?: any
// } & TextFieldProps;

// const Input: FC<Props> = ({ control, name, rules, ...props }: Props) => {
//   const [showPassword, setShowPassword] = React.useState<boolean>(false)

//   const handleClickShowPassword = () => {
//     setShowPassword((show) => !show)
//   }

//   const { field } = useController({
//     name,
//     control,
//     rules
//   })

//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         paddingY: '5px'
//       }}
//     >
//       <TextField
//         style={{ width: '100%', margin: '5px' }}
//         {...field}
//         {...props}
//         type={name === 'codigodeseguridad' && !showPassword ? 'password' : 'text'}
//       />

//       {name === 'codigodeseguridad' && (
//         <IconButton
//           aria-label="toggle password visibility"
//           onClick={handleClickShowPassword}
//           edge="end"
//           sx={{
//             position: 'absolute',
//             right: '10px',
//             top: '17px'
//           }}
//         >
//           {showPassword ? <VisibilityOff /> : <Visibility />}
//         </IconButton>
//       )}
//     </Box>
//   )
// }

// export default Input

// refactor 2

// import { Box, IconButton, TextField, type TextFieldProps } from '@mui/material'
// import { useController } from 'react-hook-form'
// import { Visibility, VisibilityOff } from '@mui/icons-material'
// import React, { type FC } from 'react'

// export type Props = {
//   control: any
//   name: string
//   rules?: any
// } & TextFieldProps;

// const Input: FC<Props> = ({ control, name, rules, ...props }: Props): JSX.Element => {
//   // <-- Aquí se especifica el tipo de retorno como JSX.Element
//   const [showPassword, setShowPassword] = React.useState<boolean>(false)

//   const handleClickShowPassword = () => {
//     setShowPassword((show) => !show)
//   }

//   const { field } = useController({
//     name,
//     control,
//     rules
//   })

//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         paddingY: '5px'
//       }}
//     >
//       <TextField
//         style={{ width: '100%', margin: '5px' }}
//         {...field}
//         {...props}
//         type={name === 'codigodeseguridad' && !showPassword ? 'password' : 'text'}
//       />

//       {name === 'codigodeseguridad' && (
//         <IconButton
//           aria-label="toggle password visibility"
//           onClick={handleClickShowPassword}
//           edge="end"
//           sx={{
//             position: 'absolute',
//             right: '10px',
//             top: '17px'
//           }}
//         >
//           {showPassword ? <VisibilityOff /> : <Visibility />}
//         </IconButton>
//       )}
//     </Box>
//   )
// }

// export default Input

// refactor 3

// import React, { type FC, useState } from 'react'
// import { Box, IconButton, TextField, type TextFieldProps } from '@mui/material'
// import { Visibility, VisibilityOff } from '@mui/icons-material'
// import { useController, FieldValues } from 'react-hook-form'

// type InputProps = {
//   // control: any // Esto debería ser cambiado a un tipo más específico como Control<FieldValues>
//   control: Control<any>
//   name: string
//   rules?: any // Esto debería ser cambiado a un tipo más específico como FieldRules
// } & TextFieldProps;

// const Input: FC<InputProps> = ({ control, name, rules, ...props }: InputProps): JSX.Element => {
//   const [showPassword, setShowPassword] = useState<boolean>(false)

//   const handleClickShowPassword = () => {
//     setShowPassword((show) => !show)
//   }

//   const { field } = useController({
//     name,
//     control,
//     rules
//   })

//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         paddingY: '5px'
//       }}
//     >
//       <TextField
//         style={{ width: '100%', margin: '5px' }}
//         {...field}
//         {...props}
//         type={name === 'codigodeseguridad' && !showPassword ? 'password' : 'text'}
//       />

//       {name === 'codigodeseguridad' && (
//         <IconButton
//           aria-label="toggle password visibility"
//           onClick={handleClickShowPassword}
//           edge="end"
//           sx={{
//             position: 'absolute',
//             right: '10px',
//             top: '17px'
//           }}
//         >
//           {showPassword ? <VisibilityOff /> : <Visibility />}
//         </IconButton>
//       )}
//     </Box>
//   )
// }

// export default Input
