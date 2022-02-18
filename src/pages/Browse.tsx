import React from 'react';
import { useContent } from '../hooks';
import { genreFilter } from '../utils/genre-filter';

export const Browse: React.FC = () => {
  const { series } = useContent("series")
  const { films } = useContent("films")

  const slides = genreFilter({series, films})
  console.log(slides)
  return (
    <div>Browse</div>
  )
}
