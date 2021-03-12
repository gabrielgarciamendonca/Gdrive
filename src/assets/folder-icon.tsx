import React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';

export default function FolderIcon(props: SvgProps) {
  return (
    <Svg width="34" height="31" viewBox="0 0 34 31" fill="none" { ...props }>
      <Rect x="5.33334" y="0.333374" width="25" height="20" rx="2" fill="#F0A714"/>
      <Path d="M0.333344 6.86675C0.333344 5.74664 0.333344 5.18659 0.55133 4.75877C0.743077 4.38244 1.04904 4.07648 1.42536 3.88474C1.85319 3.66675 2.41324 3.66675 3.53334 3.66675H11.9541C12.5802 3.66675 12.8933 3.66675 13.1775 3.75305C13.4291 3.82945 13.6631 3.95471 13.8662 4.12166C14.0957 4.31023 14.2693 4.57073 14.6167 5.09171L16.05 7.24179C16.3974 7.76277 16.571 8.02326 16.8005 8.21184C17.0036 8.37879 17.2376 8.50404 17.4892 8.58045C17.7734 8.66675 18.0865 8.66675 18.7126 8.66675H30.4667C31.5868 8.66675 32.1468 8.66675 32.5747 8.88473C32.951 9.07648 33.257 9.38244 33.4487 9.75877C33.6667 10.1866 33.6667 10.7466 33.6667 11.8667V27.1334C33.6667 28.2535 33.6667 28.8136 33.4487 29.2414C33.257 29.6177 32.951 29.9237 32.5747 30.1154C32.1468 30.3334 31.5868 30.3334 30.4667 30.3334H3.53334C2.41324 30.3334 1.85319 30.3334 1.42536 30.1154C1.04904 29.9237 0.743077 29.6177 0.55133 29.2414C0.333344 28.8136 0.333344 28.2535 0.333344 27.1334V6.86675Z" fill="#FDCD55"/>
    </Svg>
  )
}



