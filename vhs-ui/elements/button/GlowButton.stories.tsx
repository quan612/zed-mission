import React from 'react'

import { GlowButton } from './GlowButton'

export default {
  title: 'Design System/Components/GlowButton',
  component: GlowButton,
  argTypes: {
    variant: { control: 'select', options: ['gradient', 'solid', 'outline', 'text'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    colorScheme: { control: 'select', options: ['green', 'white', 'grey'] },
  },
  args: {
    children: 'Button Text',
  },
}

const Template = (args) => <GlowButton {...args} />

export const GradientButton = Template.bind({})

export const OutlineButton = Template.bind({})
OutlineButton.args = {
  variant: 'outline',
}

export const SolidButton = Template.bind({})
SolidButton.args = {
  variant: 'solid',
}
