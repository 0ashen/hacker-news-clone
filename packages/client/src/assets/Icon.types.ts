import React, { VFC } from 'react';

export type IconProps = React.SVGProps<SVGSVGElement> & {
   color?: string;
};

export type IconComponent = VFC<IconProps>;
