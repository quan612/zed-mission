import React from 'react'
import styled from 'styled-components'

// Assets
import icnRegisteredHorse from '@/assets/images/icn-horse-registered.svg'

export const RegisteredIcon: React.FC = () => {
  return <StyledImg src={icnRegisteredHorse} data-testid="horse-registered-icon" />
}

const StyledImg = styled.img`
  vertical-align: middle;
  border-style: none;
`
