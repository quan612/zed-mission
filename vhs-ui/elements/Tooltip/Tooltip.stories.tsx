import React from 'react'
import { Image, Box, Flex } from '@chakra-ui/react'

import Tooltip from './Tooltip'
import InfoIcon from '@/assets/images/icn-info-24.svg'

export default {
  title: 'Design System/Components/Tooltip',
  component: Tooltip,
  argTypes: {
    placement: { control: 'select', options: ['top', 'bottom', 'right', 'left'] },
    initialOpacity: { control: 'select', options: [0.32, 50, 75, null] },
    overlayWidth: { control: 'select', options: ['260px', '200px', '150', '50px'] },
  },
}

const Template = (args) => (
  <Flex justifyContent="center" alignItems="center" h="100vh">
    <Tooltip
      {...args}
      label={
        <Box>
          Where in the World Is Carmen Sandiego? is an American half-hour children&aposs television
          game show based on the Carmen Sandiego computer game series created by Brøderbund
          Software. The show was hosted by Greg Lee, who was joined by Lynne Thigpen, and the a
          cappella vocal group Rockapella, who served as the show&aposs house band and comedy
          troupe. The series was videotaped in New York City at Chelsea Studios and Kaufman Astoria
          Studios and co-produced by WQED and WGBH-TV, and aired on PBS stations from September 30,
          1991, to December 22, 1995, with reruns continuing to air until May 31, 1996. A total of
          295 episodes over five seasons were recorded.
        </Box>
      }
    >
      <Image width="3rem" src={InfoIcon} alt="Information Icon" />
    </Tooltip>
  </Flex>
)

export const TooltipExample = Template.bind({})
TooltipExample.args = {
  placement: 'left',
  initialOpacity: 0.32,
}
