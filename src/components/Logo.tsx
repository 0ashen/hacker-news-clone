import React, { VFC } from 'react';
import styled from 'styled-components';
import { IconLogo } from '../assets/IconLogo';
import { Link } from 'react-router-dom';
import { PATHS } from '../routes/paths';

type Props = {};

export const LogoWrapper = styled(Link)`
   display: flex;
   align-items: center;
`;
export const Text = styled.p`
   font-size: 25rem;
   margin-left: 10rem;
`;

export const Logo: VFC<Props> = (props) => {
   return (
      <LogoWrapper to={PATHS.Home}>
         <IconLogo width="35rem" height="35rem" />
         <Text>Hacker News</Text>
      </LogoWrapper>
   );
};
