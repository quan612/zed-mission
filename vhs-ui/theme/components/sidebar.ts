//style for zed theme sidebar
const SidebarConfig = {
  //Warning: if you change the desktop or mobile variant, please update the relevant code inside SidebarDrawer.tsx (classes are generated on load)
  variants: {
    desktop: {
      dialog: {
        position: 'sticky !important',
        maxW: '400px',
      },
      dialogContainer: {
        top: 'inherit !important',
        justifyContent: 'flex-end !important',
        position: 'absolute',
        height: '100%',
        left: 'auto !important',
        right: '0px',
        //stick container under header
      },
      overlay: { opacity: '0' },
    },

    mobile: {
      header: {
        background: 'none !important',
      },
    },

    activityMobileDrawer: {
      overlay: { zIndex: '1401' },
      dialogContainer: {
        zIndex: '1402',
      },
      dialog: {
        borderRadius: '16px 16px 0px 0px',
        background: '#1E2128',
        padding: '24px 24px 48px',
      },
      body: {
        padding: '0',
      },
    },
  },
}

export default SidebarConfig
