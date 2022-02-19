import React from 'react';
import { useContent } from '../hooks';
import { genreFilter } from '../utils/genre-filter';
import { BrowseContainer } from "../containers/Browse";
import { ISlides } from '../types/types';


export const Browse: React.FC = () => {
  const { series } = useContent("series")
  const { films } = useContent("films")

  //This function return content sorted by genres 
  const slides: ISlides = genreFilter({ series, films })
  
  return <BrowseContainer slides={slides}/>
}
