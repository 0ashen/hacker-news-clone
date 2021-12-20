function path(root: string, ...sublinks: string[]): string {
   return [root, ...sublinks].join('/');
}

export const ROOTS = '' as const;

export enum PAGES {
   Home = 'home'
}

export const PATHS = {
   Home: path(ROOTS, PAGES.Home)
} as const;
