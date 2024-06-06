import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import GeneralFooter from '../../../components/layouts/footer/general-footer.component'

const componentMeta: ComponentMeta<typeof GeneralFooter> = {
  title: 'Layout/Footer/GeneralFooter',
  component: GeneralFooter,
  argTypes: {},
}

export default componentMeta

const Template: ComponentStory<typeof GeneralFooter> = (args: any) => <GeneralFooter {...args} />

export const Primary = Template.bind({})
Primary.args = {}
