function path(root: string, ...sublinks: string[]): string {
   return [root, ...sublinks].join('/');
}

export const ROOTS = '' as const;

export enum PAGES {
   Page = 'page'
}

export const PATHS = {
   Page: path(ROOTS, PAGES.Page)
} as const;
