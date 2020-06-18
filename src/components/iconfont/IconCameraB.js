/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconCameraB = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1258 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M1049.6 348.16a38.4 38.4 0 1 0-38.4-38.4 38.4 38.4 0 0 0 38.4 38.4zM640 874.88A296.32 296.32 0 1 0 345.6 576a296.96 296.96 0 0 0 294.4 298.88z m0-539.52A243.84 243.84 0 1 1 398.08 576 244.48 244.48 0 0 1 640 335.36zM1161.6 128a96.64 96.64 0 0 1 96.64 96v704a96.64 96.64 0 0 1-96.64 96H96.64A96.64 96.64 0 0 1 0 928v-704A96.64 96.64 0 0 1 96.64 128h246.4L428.16 10.88A26.24 26.24 0 0 1 448 0h373.12a26.24 26.24 0 0 1 20.48 10.24L933.12 128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconCameraB.defaultProps = {
  size: 0.18,
};

export default IconCameraB;
