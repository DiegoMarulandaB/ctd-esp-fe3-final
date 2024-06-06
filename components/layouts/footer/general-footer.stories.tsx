/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
// import { type ComponentStory, type ComponentMeta } from '@storybook/react'
// import GeneralFooter from '../../../components/layouts/footer/general-footer.component'

// export default {
//   title: 'Layout/Footer/GeneralFooter',
//   component: GeneralFooter,
//   argTypes: {
//   }
// } as ComponentMeta<typeof GeneralFooter>

// const Template: ComponentStory<typeof GeneralFooter> = (args: any) => <GeneralFooter {...args} />

// export const Primary = Template.bind({})
// Primary.args = {
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GeneralFooter from '../../../components/layouts/footer/general-footer.component'

const componentMeta: ComponentMeta<typeof GeneralFooter> = {
  title: 'Layout/Footer/GeneralFooter',
  component: GeneralFooter,
  argTypes: {
  }
}

export default componentMeta

const Template: ComponentStory<typeof GeneralFooter> = (args: any) => <GeneralFooter {...args} />

export const Primary = Template.bind({})
Primary.args = {
}
