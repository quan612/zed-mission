import React, { useEffect } from 'react'
import { Drawer, DrawerOverlay } from '@chakra-ui/modal'
import { useSidebar, useSidebarContent } from '@/hooks/useSidebar/useSidebar'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useHeaderHeight } from '@/hooks/useHeight/useHeight'

//This is a sidebar drawer that is specifically tailored to fit underneath the header as a sticky component
type Ref = HTMLElement

const SidebarDrawer = React.forwardRef<Ref>((props, ref) => {
  const { isMobile } = useMediaQuery()
  //requires a ref so that the drawer renders under the correct parent (otherwise it overlays entire screen and takes up full height)
  //accepts a content prop to render content
  const sidebar = useSidebar()
  //side bar context
  const sidebarContent = useSidebarContent()
  //content context
  const headerHeight = useHeaderHeight()
  //header height context - changes depending on banners getting added/removed

  const vhToPixels = (vh: number) => {
    return Math.round(window.innerHeight / (100 / vh))
  }

  const setSidebarUnderHeader = () => {
    //check if the user is in mobile mode to get the correct chakra ui container to override styles
    const dialog = document.getElementById('chakra-modal-sidebar-drawer-container')
    if (dialog) {
      const container = dialog.parentElement.parentElement
      if (!isMobile) {
        container.style.height = 'calc(100% - ' + headerHeight.getCurrentHeaderHeight() + 'px)'
      }
    }
  }

  const adjustSidebarHeight = () => {
    const dialog = document.getElementById('chakra-modal-sidebar-drawer-container')
    if (dialog) {
      if (document.body.clientHeight < headerHeight.getCurrentHeaderHeight() + vhToPixels(100)) {
        //check that it exists and override to exactly fit the screen
        dialog.style.minHeight = 'calc(100vh - ' + headerHeight.getCurrentHeaderHeight() + 'px)'
      } else {
        //check that it exists and override height
        dialog.style.minHeight = '100vh'
      }
    }
    setOverlay()
  }

  const setOverlay = () => {
    //removes overlay visually if it is turned off
    const sidebarDrawerOverlay = document.getElementById('sidebar-drawer-overlay')
    const dialog = document.getElementById('chakra-modal-sidebar-drawer-container')
    if (dialog) {
      //must use the drawer as a reference as the parent components cannot be otherwise accessed or styled
      const container = dialog.parentElement.parentElement
      if (sidebarDrawerOverlay && container) {
        sidebarDrawerOverlay.style.height = sidebar.overlayEnabled() ? '100vh' : '0px'
        container.style.maxWidth = sidebar.overlayEnabled() ? '100vw' : '400px'
      }
    }
  }

  useEffect(() => {
    //desktop mode only
    if (sidebar.isSidebarOpen() && !isMobile) {
      setSidebarUnderHeader()
      adjustSidebarHeight()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerHeight, sidebar])

  return (
    <Drawer
      id="sidebar-drawer-container"
      placement="right"
      onClose={sidebar.toggleSidebar}
      isOpen={sidebar.isSidebarOpen()}
      size={isMobile ? 'full' : 'md'}
      closeOnOverlayClick={sidebar.overlayEnabled()}
      //full overlay if using mobile
      blockScrollOnMount={isMobile}
      //block scroll on outside when on mobile
      variant={isMobile ? 'mobile' : 'desktop'}
      //variants available in SidebarStyles
      portalProps={{ containerRef: ref as React.RefObject<HTMLElement> }}
      //insert drawer into ref
      autoFocus={false}
      trapFocus={false}
    >
      <DrawerOverlay data-testid="sidebar-drawer" id="sidebar-drawer-overlay" />
      {sidebarContent.getCurrentSidebarContent()}
    </Drawer>
  )
})

//naming for devtools
SidebarDrawer.displayName = 'SidebarDrawer'

export default SidebarDrawer
