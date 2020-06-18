/* eslint-disable */

import React from 'react';
import IconJewelry from './IconJewelry';
import IconFanhui2 from './IconFanhui2';
import IconHeart from './IconHeart';
import IconMenu from './IconMenu';
import IconCameraB from './IconCameraB';
import IconArrow from './IconArrow';
import IconSearch from './IconSearch';
import IconRight from './IconRight';
import IconHuanyipi from './IconHuanyipi';
import IconFanhui from './IconFanhui';
import IconStar from './IconStar';

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'jewelry':
      return <IconJewelry {...rest} />;
    case 'fanhui2':
      return <IconFanhui2 {...rest} />;
    case 'heart':
      return <IconHeart {...rest} />;
    case 'menu':
      return <IconMenu {...rest} />;
    case 'camera-b':
      return <IconCameraB {...rest} />;
    case 'arrow':
      return <IconArrow {...rest} />;
    case 'search':
      return <IconSearch {...rest} />;
    case 'right':
      return <IconRight {...rest} />;
    case 'huanyipi':
      return <IconHuanyipi {...rest} />;
    case 'fanhui':
      return <IconFanhui {...rest} />;
    case 'Star':
      return <IconStar {...rest} />;

  }

  return null;
};

export default IconFont;
