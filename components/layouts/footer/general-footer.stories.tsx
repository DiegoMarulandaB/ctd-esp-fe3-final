/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/*
* Usar la extensión better comments
! se modifica la importación dh- marver, por  este error  Unable to resolve path to module dado en eslint
*/

// import React from 'react'
// import GeneralFooter from '../../../components/layouts/footer/general-footer.component'
// import { type ComponentStory, type ComponentMeta } from '@storybook/react'

// export default {
//   title: 'Layout/Footer/GeneralFooter',
//   component: GeneralFooter,
//   argTypes: {}
// } as ComponentMeta<typeof GeneralFooter>

// const Template: ComponentStory<typeof GeneralFooter> = (args: any) => <GeneralFooter {...args} />

// export const Primary = Template.bind({})
// Primary.args = {}

// refactor
import React from 'react'
import GeneralFooter from '../../../components/layouts/footer/general-footer.component'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

export default {
  title: 'Layout/Footer/GeneralFooter',
  component: GeneralFooter,
  argTypes: {}
} as ComponentMeta<typeof GeneralFooter>

const Template: ComponentStory<typeof GeneralFooter> = (args: unknown) => <GeneralFooter {...(args as any)} />

export const Primary = Template.bind({})
Primary.args = {}
