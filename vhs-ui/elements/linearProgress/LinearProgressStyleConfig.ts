import { ComponentStyleConfig } from '@chakra-ui/react'

const LinearProgressStyleConfig: ComponentStyleConfig = {
  baseStyle: () => ({
    display: 'flex',
    width: '100%',
    height: 'min-content',
    transformStyle: 'preserve-3d',
  }),
  variants: {},
  sizes: {},
  defaultProps: {
    colorScheme: '',
  },
}

const activeStepColor = (isActive) => {
  return isActive
    ? {
        color: '#f0f8ff',
        border: '2px solid #2A2E35',
        background: '#27b18a',
      }
    : {}
}

const inProgStepColor = (isInProg) => {
  return isInProg
    ? {
        color: '#f0f8ff',
        border: '2px solid #2A2E35',
        background: '#2A2E35',
        boxShadow: '0px 0px 0px 2px #27b18a inset',
      }
    : {}
}

const stepConnectorColor = (activeOrInProg) => ({
  borderColor: activeOrInProg ? '#27b18a' : '#323844',
})
const StepStyleConfig: ComponentStyleConfig = {
  parts: [
    'linearProgressContainer',
    'stepContainer',
    'stepContent',
    'stepNumber',
    'stepLabel',
    'stepConnector',
    'stepConnectorContainer',
  ],
  baseStyle: ({ isActive, isInProg }) => ({
    stepContainer: {
      flex: 1,
      position: 'relative',
    },
    stepContent: {
      display: 'flex',
      flexDirection: 'column-reverse',
    },
    stepLabel: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
    },
    stepNumber: {
      width: '24px',
      height: '24px',
      borderRadius: '16px',
      margin: '0px auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'default',
      zIndex: 5,
      position: 'relative',
      color: 'rgba(240, 248, 255, 0.24)',
      border: '2px solid #323844',
      background: '#2A2E35',
      ...activeStepColor(isActive),
      ...inProgStepColor(isInProg),
    },
    stepConnectorContainer: {
      flex: '1 1 auto',
      position: 'absolute',
      bottom: '10px',
      left: 'calc(-50% + 11px)',
      right: 'calc(50% + 11px)',
      zIndex: 1,
    },
    stepConnector: {
      display: 'block',
      borderTopStyle: 'solid',
      borderTopWidth: '3px',
      ...stepConnectorColor(isActive || isInProg),
    },
  }),
  variants: {},
  sizes: {},
  defaultProps: {
    colorScheme: '',
  },
}

export { LinearProgressStyleConfig, StepStyleConfig }
