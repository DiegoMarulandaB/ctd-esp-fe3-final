/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
// usar extensión Better Comments
/**
 *  * se modifica la importación dh-marvel ya que genera este error unable to resolve path to module
 */
import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import GeneralHeader from '../../../components/layouts/header/general-header.component'

export default {
  title: 'Layout/Header/GeneralHeader',
  component: GeneralHeader,
  argTypes: {}
} as ComponentMeta<typeof GeneralHeader>

const Template: ComponentStory<typeof GeneralHeader> = (args: any) => <GeneralHeader {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const Simple = Template.bind({})
Simple.args = {
  variant: 'simple'
}
