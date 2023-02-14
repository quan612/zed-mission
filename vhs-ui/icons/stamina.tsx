import React from 'react'
import { string } from 'prop-types'

const Stamina = ({ width, height }) => (
  <svg
    width={width || '14'}
    height={height || '14'}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m 5.8706632,9.270158 -0.5836458,4.255574 c -0.05969,0.43529 0.5080611,0.654185 0.7560719,0.291581 L 11.562188,5.7480758 c 0.18892,-0.276303 -0.0089,-0.651329 -0.34362,-0.651329 H 8.1890937 C 7.9366951,5.0967468 7.7423546,4.8739393 7.77665,4.623872 L 8.3457583,0.47424772 C 8.4062394,0.0332462 7.8255661,-0.18218735 7.5837749,0.19154778 L 2.4318981,8.1548132 C 2.2526938,8.431799 2.4515231,8.7972333 2.7814345,8.7972333 h 2.676785 c 0.2523987,0 0.4467391,0.2228075 0.4124437,0.4729247 z"
      fill="#ecf1fb"
      fillOpacity="0.33"
      id="path42"
    />
  </svg>
)

Stamina.propTypes = {
  width: string,
  height: string,
}

export default Stamina
