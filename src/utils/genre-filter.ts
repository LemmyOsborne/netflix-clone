import { IContent } from "../types/types";

interface ISelection extends IContent {
    selectionTitle?: string
    data?: ISelection[]
}

export function genreFilter({ series, films }: { series: ISelection[], films: ISelection[]}) {
    return {
      series: [
        { selectionTitle: 'Documentaries', data: series?.filter((item) => item.genre === 'documentaries') },
        { selectionTitle: 'Comedies', data: series?.filter((item) => item.genre === 'comedies') },
        { selectionTitle: 'Children', data: series?.filter((item) => item.genre === 'children') },
        { selectionTitle: 'Crime', data: series?.filter((item) => item.genre === 'crime') },
        { selectionTitle: 'Feel Good', data: series?.filter((item) => item.genre === 'feel-good') },
      ],
      films: [
        { selectionTitle: 'Drama', data: films?.filter((item) => item.genre === 'drama') },
        { selectionTitle: 'Thriller', data: films?.filter((item) => item.genre === 'thriller') },
        { selectionTitle: 'Children', data: films?.filter((item) => item.genre === 'children') },
        { selectionTitle: 'Suspense', data: films?.filter((item) => item.genre === 'suspense') },
        { selectionTitle: 'Romance', data: films?.filter((item) => item.genre === 'romance') },
      ],
    };
  }