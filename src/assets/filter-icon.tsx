import React from 'react';
import Svg, { SvgProps, Rect } from 'react-native-svg';

export const FilterIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="18" height="15" viewBox="0 0 18 15" fill="none" { ...props }>
      <Rect x="6" width="12" height="3" rx="1.5" fill="#21205A" fill-opacity="0.6"/>
      <Rect x="6" y="6" width="12" height="3" rx="1.5" fill="#21205A" fill-opacity="0.6"/>
      <Rect x="6" y="12" width="12" height="3" rx="1.5" fill="#21205A" fill-opacity="0.6"/>
      <Rect width="5" height="3" rx="1.5" fill="#21205A" fill-opacity="0.6"/>
      <Rect y="6" width="5" height="3" rx="1.5" fill="#21205A" fill-opacity="0.6"/>
      <Rect y="12" width="5" height="3" rx="1.5" fill="#21205A" fill-opacity="0.6"/>
    </Svg>
  )
}
