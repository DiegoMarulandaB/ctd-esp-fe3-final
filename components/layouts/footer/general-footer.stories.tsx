// usar extensión Better Comments
/**
 *  * se modifica la importación dh-marvel ya que genera este error unable to resolve path to module
 */

import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import GeneralFooter from '../../../components/layouts/footer/general-footer.component'

export default {
  title: 'Layout/Footer/GeneralFooter',
  component: GeneralFooter,
  argTypes: {}
} as ComponentMeta<typeof GeneralFooter>

const Template: ComponentStory<typeof GeneralFooter> = (args: any) => <GeneralFooter {...args} />

export const Primary = Template.bind({})
Primary.args = {}
