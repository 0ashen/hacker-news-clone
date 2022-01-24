import React, { useEffect, useState, VFC } from 'react';
import {
   Close,
   ExplorerWrapper,
   Header,
   Iframe,
   Inner,
   Left,
   Right,
   Title,
   Top
} from './Explorer.styled';
import { useOpenedNewsId } from '../../hooks/useOpenedNewsId';
import { useGetTopStoriesQuery } from '../../api/api';
import { useCloseExplorer } from './hooks/useCloseExplorer';
import { NewsParams } from '../NewsParams';
import { GlobalInner } from '../../ui/GlobalInner';
import { useLocalStorage, useLockBodyScroll } from 'react-use';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { useClientGuard } from './hooks/useClientGuard';

export const Explorer: VFC = () => {
   const isClient = useClientGuard();
   const newsId = useOpenedNewsId();
   const { data, isLoading, isSuccess } = useGetTopStoriesQuery();
   const newsItem = data?.filter((el) => el.id === newsId)?.[0];
   const { closeHandler } = useCloseExplorer();
   useLockBodyScroll(!!newsItem);
   const [toggleChecked, setToggleChecked] = useState(true);
   const [hideIframe, setHideIframe] = useLocalStorage('hideIframe', false);

   if (!newsItem || !isClient) return null;

   const { title, url } = newsItem;

   return (
      <ExplorerWrapper show={!!newsId}>
         <Top>
            <Inner>
               <Close onClick={closeHandler}>Close</Close>
            </Inner>
         </Top>

         <GlobalInner>
            <Header>
               <Left>
                  <Title>{title}</Title>
                  <NewsParams {...newsItem} />
               </Left>
               <Right>
                  <p>Hide iframe</p>
                  <div suppressHydrationWarning={true}>
                     <Toggle
                        checked={hideIframe}
                        onChange={() => {
                           setHideIframe(!hideIframe);
                        }}
                     />
                  </div>
               </Right>
            </Header>
         </GlobalInner>
         {!hideIframe && <Iframe src={url} frameBorder="0" />}

         <div style={{ height: '200vh' }}></div>
      </ExplorerWrapper>
   );
};
