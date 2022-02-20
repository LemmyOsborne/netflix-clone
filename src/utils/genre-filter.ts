import { IContent, ISlides } from "../types/types";

export function genreFilter({ series, films }: {series: IContent[], films: IContent[]}): ISlides {
    return {
      series: [
        { rowTitle: 'Documentaries', data: series?.filter((item) => item.genre === 'documentaries') },
        { rowTitle: 'Comedies', data: series?.filter((item) => item.genre === 'comedies') },
        { rowTitle: 'Children', data: series?.filter((item) => item.genre === 'children') },
        { rowTitle: 'Crime', data: series?.filter((item) => item.genre === 'crime') },
        { rowTitle: 'Feel Good', data: series?.filter((item) => item.genre === 'feel-good') },
      ],
      films: [
        { rowTitle: 'Drama', data: films?.filter((item) => item.genre === 'drama') },
        { rowTitle: 'Thriller', data: films?.filter((item) => item.genre === 'thriller') },
        { rowTitle: 'Children', data: films?.filter((item) => item.genre === 'children') },
        { rowTitle: 'Suspense', data: films?.filter((item) => item.genre === 'suspense') },
        { rowTitle: 'Romance', data: films?.filter((item) => item.genre === 'romance') },
      ],
    };
  }