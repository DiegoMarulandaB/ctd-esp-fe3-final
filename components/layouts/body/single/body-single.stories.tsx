// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
// import { type ComponentStory, type ComponentMeta } from '@storybook/react'
// import BodySingle from '../../../../components/layouts/body/single/body-single'

// export default {
//   title: 'Layout/Body/BodySingle',
//   component: BodySingle,
//   argTypes: {
//   }
// } as ComponentMeta<typeof BodySingle>

// const Template: ComponentStory<typeof BodySingle> = (args: any) => <BodySingle {...args} />

// export const Primary = Template.bind({})
// Primary.args = {
//   title: 'Single body'
//   // containerProps: {sx: {backgroundColor:'#faa' }}
// }


/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import BodySingle from '../../../../components/layouts/body/single/body-single'

export default {
  title: 'Layout/Body/BodySingle',
  component: BodySingle,
  argTypes: {
  }
} as ComponentMeta<typeof BodySingle>

const Template: ComponentStory<typeof BodySingle> = (args) => <BodySingle {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Single body'
  // containerProps: {sx: {backgroundColor:'#faa' }}
}
