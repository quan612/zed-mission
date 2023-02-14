import React from 'react'
import Banner from '.'

export default {
  title: 'Design System/Components/Banner',
  component: Banner,
  argTypes: {
    title: { control: { type: 'text' } },
    text: { control: { type: 'text' } },
    textColor: { control: { type: 'text' } },
    buttonText: { control: { type: 'text' } },
    backgroundImage: { control: { type: 'text' } },
    minHeight: { control: { type: 'text' } },
    textOpacity: { control: { type: 'text' } },
    width: { control: { type: 'text' } },
    isMobile: { control: { type: 'boolean' } },
    mobileWidth: { control: { type: 'text' } },
  },
}

const Template = (args) => <Banner {...args} />

export const BannerTemplate = Template.bind({})
BannerTemplate.args = {
  title: 'Banner Title',
  text: 'Banner Text',
  textOpacity: '100%',
  backgroundImage: 'https://nftevening.com/wp-content/uploads/2021/09/Zed-Run-featured.jpg',
}
