import { render, screen, fireEvent } from '@testing-library/react' // (or /dom, /vue, ...)
import React from 'react'
import SidebarProvider from '../../../hooks/useSidebar/SidebarProvider'
import AlertButton from '../../../components/pages/activities/AlertButton'
import SidebarDrawer from '../Sidebar/SidebarDrawer'
import { MockedProvider } from '@apollo/client/testing'
import { getMocks } from '@/components/pages/activities/__tests__/apolloClientMockData'
import { GET_ACTIVITIES } from '@/components/pages/activities/gqlQueries'
import HeightProvider from '../../../hooks/useHeight/HeightProvider'
import MediaQueryProvider from '@/hooks/useMediaQuery/MediaQueryProvider'
import intl from 'react-intl-universal'
import { LOCALE_DATA } from '@/hooks/useLanguage'

// required to avoid testing errors because the 'AlertButton' component contains audio
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const playStub = jest
  .spyOn(window.HTMLMediaElement.prototype, 'play')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  .mockImplementation(async () => {})

describe('SidebarDrawer', () => {
  beforeAll(() => {
    intl.init({ currentLocale: 'en-AU', locales: LOCALE_DATA, fallbackLocale: 'en-AU' })
  })
  describe('does not show drawer if isOpen=false', () => {
    it('does not show drawer if not open', () => {
      render(
        <MockedProvider
          mocks={getMocks([
            {
              request: {
                query: GET_ACTIVITIES,
                variables: {
                  limit: 10,
                  filters: [],
                },
              },
            },
          ])}
          addTypename={false}
        >
          <MediaQueryProvider>
            <SidebarProvider>
              <HeightProvider>
                <>
                  <AlertButton />
                  <SidebarDrawer />
                </>
              </HeightProvider>
            </SidebarProvider>
          </MediaQueryProvider>
        </MockedProvider>,
      )
      expect(screen.queryByTestId('sidebar-drawer')).not.toBeInTheDocument()
    })
  })

  describe('show drawer if button is clicked', () => {
    it('show drawer on click', () => {
      render(
        <MockedProvider
          mocks={getMocks([
            {
              request: {
                query: GET_ACTIVITIES,
                variables: {
                  limit: 10,
                  filters: [],
                },
              },
            },
          ])}
          addTypename={false}
        >
          <MediaQueryProvider>
            <SidebarProvider>
              <HeightProvider>
                <>
                  <AlertButton />
                  <SidebarDrawer />
                </>
              </HeightProvider>
            </SidebarProvider>
          </MediaQueryProvider>
        </MockedProvider>,
      )
      fireEvent.click(screen.getByTestId('AlertButtonClick'))
      expect(screen.getByTestId('sidebar-drawer')).toBeInTheDocument()
    })
  })
})
