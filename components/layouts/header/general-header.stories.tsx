import React from 'react'
import GeneralHeader from 'dh-marvel/components/layouts/header/general-header.component'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

export default {
  title: 'Layout/Header/GeneralHeader',
  component: GeneralHeader,
  argTypes: {
  }
} as ComponentMeta<typeof GeneralHeader>

const Template: ComponentStory<typeof GeneralHeader> = (args: any) => <GeneralHeader {...args} />

export const Primary = Template.bind({})
Primary.args = {
}

export const Simple = Template.bind({})
Simple.args = {
  variant: 'simple'
}
