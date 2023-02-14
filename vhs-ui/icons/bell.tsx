import React from 'react'

interface BellIconProps {
  width?: string
  height?: string
  active?: boolean
}

// This bell icon svg has two paths identified by class names
//   active: a filled bell icon
//   inactive: an unfilled bell icon.
// The path can be switched on hover/active eg:

// ```css
// &:active .inactive {
//   display: none;
// }

// &:active .active {
//   display: block;
// }
// ```

const BellIcon: React.FC<BellIconProps> = ({ width = '24', height = '28', active = false }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 28"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="active"
        display={active ? 'block' : 'none'}
        d="M22.8839 19.536C21.8777 18.4548 19.9949 16.8282 19.9949 11.5001C19.9949 7.45321 17.1574 4.21362 13.3313 3.41883V2.33341C13.3313 1.4131 12.5855 0.666748 11.6657 0.666748C10.7459 0.666748 10.0001 1.4131 10.0001 2.33341V3.41883C6.17406 4.21362 3.33656 7.45321 3.33656 11.5001C3.33656 16.8282 1.45375 18.4548 0.447497 19.536C0.134997 19.872 -0.00354472 20.2735 -0.000940553 20.6667C0.00478861 21.5209 0.675101 22.3334 1.67093 22.3334H21.6605C22.6563 22.3334 23.3272 21.5209 23.3324 20.6667C23.335 20.2735 23.1964 19.8714 22.8839 19.536ZM11.6657 27.3334C13.5053 27.3334 14.9975 25.8412 14.9975 24.0001H8.33395C8.33395 25.8412 9.82614 27.3334 11.6657 27.3334Z"
      />
      <path
        className="inactive"
        display={active ? 'none' : 'block'}
        d="M22.8839 19.536C21.8777 18.4548 19.9949 16.8282 19.9949 11.5001C19.9949 7.45321 17.1574 4.21362 13.3313 3.41883V2.33341C13.3313 1.4131 12.5855 0.666748 11.6657 0.666748C10.7459 0.666748 10.0001 1.4131 10.0001 2.33341V3.41883C6.17406 4.21362 3.33656 7.45321 3.33656 11.5001C3.33656 16.8282 1.45375 18.4548 0.447497 19.536C0.134997 19.872 -0.00354472 20.2735 -0.000940553 20.6667C0.00478861 21.5209 0.675101 22.3334 1.67093 22.3334H21.6605C22.6563 22.3334 23.3272 21.5209 23.3324 20.6667C23.335 20.2735 23.1964 19.8714 22.8839 19.536V19.536ZM3.51624 19.8334C4.62145 18.3766 5.82979 15.9621 5.83551 11.5303C5.83551 11.5199 5.83239 11.5105 5.83239 11.5001C5.83239 8.27821 8.44385 5.66675 11.6657 5.66675C14.8876 5.66675 17.499 8.27821 17.499 11.5001C17.499 11.5105 17.4959 11.5199 17.4959 11.5303C17.5017 15.9626 18.71 18.3772 19.8152 19.8334H3.51624ZM11.6657 27.3334C13.5053 27.3334 14.9975 25.8412 14.9975 24.0001H8.33395C8.33395 25.8412 9.82614 27.3334 11.6657 27.3334Z"
      />
    </svg>
  )
}

export default BellIcon
