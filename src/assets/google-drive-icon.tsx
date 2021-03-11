import React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';

export const DriveIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="64" height="64" viewBox="0 0 64 64" fill="none" { ...props }>
      <Rect width="64" height="64" rx="16" fill="white"/>
      <Path d="M25 14H39L53 38H39L25 14Z" fill="#FFC107"/>
      <Path d="M17.875 50L24.938 38H53L46 50H17.875Z" fill="#1976D2"/>
      <Path d="M11 38.125L17.875 50L32 26L25 14L11 38.125Z" fill="#4CAF50"/>
    </Svg>
  )
}
