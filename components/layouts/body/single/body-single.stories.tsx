/* eslint-disable @typescript-eslint/consistent-type-assertions */
/*
* Usar la extensión better comments
! se modifica la importación dh- marver, por  este error  Unable to resolve path to module dado en eslint
*/

// import React from 'react'
// import BodySingle from '../../../../components/layouts/body/single/body-single'
// import { type ComponentStory, type ComponentMeta } from '@storybook/react'

// export default {
//   title: 'Layout/Body/BodySingle',
//   component: BodySingle,
//   argTypes: {}
// } as ComponentMeta<typeof BodySingle>

// const Template: ComponentStory<typeof BodySingle> = (args: any) => <BodySingle {...args} />

// export const Primary = Template.bind({})
// Primary.args = {
//   title: 'Single body'
//   // containerProps: {sx: {backgroundColor:'#faa' }}
// }

// refactor

import React from 'react'
import BodySingle from '../../../../components/layouts/body/single/body-single'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

export default {
  title: 'Layout/Body/BodySingle',
  component: BodySingle,
  argTypes: {}
} as ComponentMeta<typeof BodySingle>

const Template: ComponentStory<typeof BodySingle> = (args) => <BodySingle {...args} />

export const Primary = Template.bind({})
const PrimaryArgs = {
  title: 'Single body'
  // containerProps: {sx: {backgroundColor:'#faa' }}
}
Primary.args = PrimaryArgs
