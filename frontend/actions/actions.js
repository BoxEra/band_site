import { ajax } from 'jquery';

export const getMusic = () => (
  ajax({
    url: `${location.origin}/getMusic`,
    method: 'GET'
  })
);
