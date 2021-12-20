import React from 'react';
import { Link, useRoutes } from 'react-router-dom';

import { PAGES, PATHS, ROOTS } from './paths';
import { NewsList } from '../pages/NewsList/NewsList';

export function Router() {
   return useRoutes([
      {
         path: ROOTS,

         element: (
            <ul>
               {Object.values(PATHS).map((el, idx) => {
                  return (
                     <li key={idx}>
                        <Link to={el} style={{ color: 'blue', textDecoration: 'underline' }}>
                           {el}
                        </Link>
                     </li>
                  );
               })}
            </ul>
         )
      },
      {
         path: ROOTS,
         children: [
            {
               path: PAGES.Home,
               element: <NewsList />
            }
         ]
      }
   ]);
}
