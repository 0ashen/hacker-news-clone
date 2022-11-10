import { useRouter } from 'next/router';
// import { NewsItemId } from 'server';

export const useOpenedNewsId = (): string | undefined => {
   const router = useRouter();
   const { openedNews } = router.query;
   const _openedNews = Number(openedNews);

   if (isNaN(_openedNews)) return undefined;

   // @ts-ignore
   return _openedNews;
};
