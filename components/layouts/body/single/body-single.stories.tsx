/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
// usar extensión Better Comments
/**
 *  * se modifica la importación dh-marvel ya que genera este error unable to resolve path to module
 */
import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import BodySingle from '../../../../components/layouts/body/single/body-single'

export default {
  title: 'Layout/Body/BodySingle',
  component: BodySingle,
  argTypes: {}
} as ComponentMeta<typeof BodySingle>

const Template: ComponentStory<typeof BodySingle> = (args: any) => <BodySingle {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Single body'
  // containerProps: {sx: {backgroundColor:'#faa' }}
}
