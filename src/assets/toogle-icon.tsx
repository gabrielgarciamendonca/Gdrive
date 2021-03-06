import React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';

export const Toogle: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" { ...props }>
      <Path d="M20 20L15.0962 15.0962M15.0962 15.0962C16.2725 13.9199 17 12.2949 17 10.5C17 6.91015 14.0899 4 10.5 4C6.91015 4 4 6.91015 4 10.5C4 14.0899 6.91015 17 10.5 17C12.2949 17 13.9199 16.2725 15.0962 15.0962Z" stroke="#7C809E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  )
}
