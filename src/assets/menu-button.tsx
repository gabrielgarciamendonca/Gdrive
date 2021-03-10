import React from 'react';
import Svg, { SvgProps, Rect } from 'react-native-svg';

export const Menu: React.FC<SvgProps> = (props) => {
  return (
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" { ...props }>
        <Rect x="2" y="18" width="10" height="3" rx="1.5" fill="#21205A"/>
        <Rect x="2" y="10" width="20" height="3" rx="1.5" fill="#21205A"/>
        <Rect x="2" y="3" width="10" height="3" rx="1.5" fill="#21205A"/>
      </Svg>
  )
}


