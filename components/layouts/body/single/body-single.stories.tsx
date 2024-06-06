import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import BodySingle from '../../../../components/layouts/body/single/body-single'

// Definir explícitamente el tipo del objeto exportado
const componentMeta: ComponentMeta<typeof BodySingle> = {
  title: 'Layout/Body/BodySingle',
  component: BodySingle,
  argTypes: {},
}

export default componentMeta

const Template: ComponentStory<typeof BodySingle> = (args) => <BodySingle {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Single body',
  // containerProps: {sx: {backgroundColor:'#faa' }}
}
