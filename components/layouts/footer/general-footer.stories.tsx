/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import GeneralFooter from '../../../components/layouts/footer/general-footer.component'

export default {
  title: 'Layout/Footer/GeneralFooter',
  component: GeneralFooter,
  argTypes: {
  }
} as ComponentMeta<typeof GeneralFooter>

const Template: ComponentStory<typeof GeneralFooter> = (args: any) => <GeneralFooter {...args} />

export const Primary = Template.bind({})
Primary.args = {
}
