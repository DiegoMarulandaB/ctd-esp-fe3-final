import React from 'react'
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

export default {
  title: 'Layout/Body/BodySingle',
  component: BodySingle,
  argTypes: {
  }
} as ComponentMeta<typeof BodySingle>

const Template: ComponentStory<typeof BodySingle> = (args: any) => <BodySingle {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Single body'
  // containerProps: {sx: {backgroundColor:'#faa' }}
}
