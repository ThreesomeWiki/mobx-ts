/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconHeart = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M708.01993 122.015961c-79.389118 0-150.063761 36.856419-196.134029 94.302783-46.070268-57.446363-116.744911-94.302783-196.134029-94.302783-138.853441 0-251.41917 112.564705-251.41917 251.418146 0 29.589922 5.390777 57.874105 14.771425 84.256986 70.483284 214.443024 403.287019 425.442622 432.781774 443.800735 29.494755-18.35709 362.297466-229.357711 432.781774-443.800735 9.379625-26.383904 14.771425-54.667064 14.771425-84.256986C959.438077 234.580666 846.873372 122.015961 708.01993 122.015961z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconHeart.defaultProps = {
  size: 0.18,
};

export default IconHeart;
