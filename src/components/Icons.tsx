import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserLarge} from '@fortawesome/free-solid-svg-icons';
import {SizeProp} from '@fortawesome/fontawesome-svg-core';

interface IIconProps {
  size?: SizeProp;
}

export function UserLarge({size}: IIconProps) {
  return <FontAwesomeIcon icon={faUserLarge} size={size} />;
}
