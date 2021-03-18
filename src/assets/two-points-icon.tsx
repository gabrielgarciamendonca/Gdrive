import React from 'react';
import Svg, { SvgProps, Circle } from 'react-native-svg';

export const TwoPoints: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" { ...props }>
      <Circle cx="12" cy="17" r="2.5" transform="rotate(-90 12 17)" fill="#21205A"/>
      <Circle cx="12" cy="7" r="2.5" transform="rotate(-90 12 7)" fill="#21205A"/>
    </Svg>
  )
}
