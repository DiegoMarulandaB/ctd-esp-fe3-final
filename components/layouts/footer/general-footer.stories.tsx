import React from 'react'
import GeneralFooter from 'dh-marvel/components/layouts/footer/general-footer.component'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

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
